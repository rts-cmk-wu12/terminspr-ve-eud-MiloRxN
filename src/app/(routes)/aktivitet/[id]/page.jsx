import ActivityDetails from "@/components/ui/activity-details";
import fetchUser from "@/utils/fetch-user";
import { cookies } from "next/headers";

export async function generateMetadata({ params }) {
  const { id } = await params;
  const response = await fetch(`http://localhost:4000/api/v1/activities/${id}`);
  const activity = await response.json();

  return {
    title: activity.name
  };
};

export default async function ActivityDetailsPage({ params }) {
  const { id } = await params

  let user = null;
  let activity = null;

  try {
    const activityResponse = await fetch(`http://localhost:4000/api/v1/activities/${id}`);
    if (activityResponse.ok) {
      activity = await activityResponse.json();
    }
  } catch (error) {
    console.error("Failed to fetch activity:", error);
  }

  const cookieStore = await cookies();
  const cookie = cookieStore.get('user_info');

  if (cookie){
    const user_id = JSON.parse(cookie.value).userId;
    user = await fetchUser(`users/${user_id}`)
    // console.log("User data fetched:", user);
  } else {
    // console.log("No user_info cookie found");
  }
  
  // console.log("Final user passed to component:", user);
  
  return (
    <>
      <ActivityDetails id={id} user={user} activity={activity} />
    </>
  )
}