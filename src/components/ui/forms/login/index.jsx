"use client";

import { useActionState } from "react";
import login from "@/actions/login";
import Button from "../../button";
import Heading from "@/components/typography/heading";
import { useSearchParams } from "next/navigation";

export default function LoginFormular({ className = "" }) {
  const searchParams = useSearchParams();
  const redirectTo = searchParams.get("redirect") || "/";
  const [formState, formAction, isPending] = useActionState(
    async (_, formData) => {
      if (redirectTo) {
        formData.append("redirectTo", redirectTo);
      }
      return await login(null, formData);
    }
  );

  return (
    <form action={formAction} className="flex flex-col justify-center gap-4 z-1 p-8 my-auto">
      <Heading text={"Log ind"} size={"xlarge"} />
      <label>
        <input type="text" name="username" placeholder="brugernavn" className="placeholder-[#999] bg-input-background text-[#999] w-full p-3 pl-5" />
        <p>{formState?.properties?.username.errors}</p>
      </label>
      <label>
        <input type="password" name="password" placeholder="adgangskode" className="placeholder-[#999] bg-input-background text-[#999] w-full p-3 pl-5" />
        <p>{formState?.properties?.password.errors}</p>
      </label>
      <Button text={"Log ind"} type={"submit"} className="mt-2 max-w-20 mx-auto" />
      <p>{formState?.errors}</p>
    </form>
  )
}