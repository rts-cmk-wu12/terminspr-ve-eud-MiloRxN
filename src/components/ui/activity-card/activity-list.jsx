"use client"
import useFetch from "@/hooks/use-fetch";
import ActivityCardSkeleton from "../skeleton/skeleton-activity-card";
import skeletonProvider from "@/utils/skeleton-provider";
import SingleActivityCard from './index';

export default function ActivityList() {
  const { data, error, loading } = useFetch('activities');

  if (loading) {
    return (
      <ul className="flex flex-col gap-8 py-4">
        {skeletonProvider(3, () => <ActivityCardSkeleton />)}
      </ul>
    );
  }

  return (
    <>
      {error && <p>Ingen aktiviter blev fundet.</p>}
      <ul className="flex flex-col gap-8 py-4">
        {data && data.map((activity, index) => (
          <SingleActivityCard
            key={activity.id}
            activity={activity}
            priority={index === 0}
          />
        ))}
      </ul>
    </>
  )
}