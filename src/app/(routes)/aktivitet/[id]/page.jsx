import ActivityDetails from "@/components/ui/activity-details";

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

  return (
    <>
      <ActivityDetails id={id}/>
    </>
  )
}