import ActivityDetails from "@/components/ui/activity-details";
import NavigationBar from "@/components/ui/navigation-bar";
import fetchUser from "@/utils/fetch-user";
import { getUserInfo } from "@/utils/get-user-info";

export async function generateMetadata({ params }) {
  const { id } = await params;
  const response = await fetch(`http://localhost:4000/api/v1/activities/${id}`);
  const activity = await response.json();

  return {
    title: activity.name
  };
};

export default async function ActivityDetailsPage({ params }) {
  const { id } = await params;
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
  
  const { userId } = await getUserInfo();

  if (userId){
    user = await fetchUser(`users/${userId}`)
  }
  
  return (
    <>
      <ActivityDetails id={id} user={user} activity={activity} />
      <NavigationBar/>
    </>
  )
}