import { getUserInfo } from "@/utils/get-user-info";
import fetchUser from "@/utils/fetch-user";
import Heading from "@/components/typography/heading";
import NavigationBar from "@/components/ui/navigation-bar";
import Link from "next/link";

export async function generateMetadata({ params }) {
  const { id } = await params;

  try {
    const activityResponse = await fetch(`http://localhost:4000/api/v1/activities/${id}`);
    if (activityResponse.ok) {
      const activity = await activityResponse.json();
      return {
        title: `Hold - ${activity.name} | Landrup Dans`
      };
    }
  } catch (error) {
    console.error("Failed to fetch activity for metadata:", error);
  }

  return {
    title: "Hold | Landrup Dans"
  };
}

export default async function HoldPage({ params }) {
  const { userId } = await getUserInfo();

  const { id } = await params;
  let activity = null;
  let roster = [];

  try {
    const activityResponse = await fetch(`http://localhost:4000/api/v1/activities/${id}`);
    if (activityResponse.ok) {
      activity = await activityResponse.json();
    }
    const rosterData = await fetchUser(`users/${userId}/roster/${id}`);
    if (rosterData) {
      roster = rosterData;
    }
  } catch (error) {
    console.error("Failed to fetch data:", error);
  }

  if (!activity) {
    return (
      <>
        <div className="px-8 py-4">
          <Heading text="Aktiviten kunne ikke findes" />
          <Link href="/kalender">Tilbage til kalender</Link>
        </div>
        <NavigationBar />
      </>
    );
  }

  return (
    <>
      <div className="px-8 py-4">
        <Heading text={activity.name} size={"large"} style={"overflow-hidden overflow-ellipsis whitespace-nowrap text-2xl pb-1.5"} />
        {roster.length > 0 ? (
          <ul className="mt-4 space-y-2">
            {roster.map((participant, index) => (
                <li key={index}>{participant.firstname} {participant.lastname}</li>
            ))}
          </ul>
        ) : (
            <span>Ingen deltagere tilmeldt endnu</span>
        )}
      </div>
      <NavigationBar />
    </>
  );
}
