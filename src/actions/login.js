'use server';

import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import z from "zod";

async function login(prevState, formData) {
  const { username, password, redirectTo } = Object.fromEntries(formData);

  const schema = z.object({
    username: z.string().min(1, { message: 'Brugernavn skal være udfyldt' }),
    password: z.string().min(1, { message: 'Adgangskode skal være udfyldt' }),
    redirectTo: z.string().optional()
  });

  const validated = schema.safeParse({
    username, password, redirectTo
  });

  if (!validated.success) return {
    ...validated,
    ...(z.treeifyError(validated.error))
  };

  const response = await fetch('http://localhost:4000/auth/token', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      username: validated.data.username,
      password: validated.data.password
    })
  });

  if (response.status !== 200) return {
    success: false,
    errors: ['Brugernavn eller adgangskode er forkert']
  };

  const data = await response.json();

  console.log(data)

  if (!Object.keys(data).length) return;

  const cookieStore = await cookies();
  cookieStore.set({
    name: 'access_token',
    value: data.token,
    expires: data.validUntil
  });

  cookieStore.set({
    name: 'user_info',
    value: JSON.stringify({
      userId: data.userId,
      role: data.role
    })
  });

  if (validated.data?.redirectTo) redirect(validated.data.redirectTo);
  redirect('/');
}

export default login;