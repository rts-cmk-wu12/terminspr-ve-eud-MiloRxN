"use server"
import { revalidatePath } from "next/cache";
import { getAccessToken } from "./get-access-token";

export default async function updateUserActivity({ userId, activityId, method }) {
  try {
    const response = await fetch(`http://localhost:4000/api/v1/users/${userId}/activities/${activityId}`, {
      method,
      headers: {
        Authorization: `Bearer ${await getAccessToken()}`
      }
    });

    if (!response.ok) {
      throw new Error(`Request failed with status ${response.status}`);
    }

    revalidatePath(`/aktivitet/${activityId}`)
    
    return {success: true};
  } catch (error) {
    console.error("Activity update error:", error);
    throw error;
  }
}