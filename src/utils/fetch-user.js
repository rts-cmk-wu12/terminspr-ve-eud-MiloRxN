'use server';

import { getAccessToken } from "./get-access-token";

export default async function fetchUser(endpoint, method = "GET", baseUrl = 'http://localhost:4000/api/v1/') {

  const response = await fetch(baseUrl + endpoint, {
    method,
    headers: {
      Authorization: `Bearer ${await getAccessToken()}`
    }
  });

  if (!response.ok) {
    return null;
  }

  return await response.json();
}
