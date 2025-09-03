"use client"
import Heading from "@/components/typography/heading";
import useFetch from "@/hooks/use-fetch";
import Image from "next/image";
import Link from "next/link";
import ActivityCardSkeleton from "./skeleton";

export default function ActivityCard() {
  const { data, error, loading } = useFetch('activities');

  if (loading) {
    return (
      <ul className="flex flex-col gap-8 py-4">
        {[1, 2, 3].map((item) => (
          <li key={item}>
            <ActivityCardSkeleton />
          </li>
        ))}
      </ul>
    );
  }

  return (
    <>
      {error && <p>Ingen aktiviter blev fundet.</p>}
      <ul className="flex flex-col gap-8 py-4">
        {data && data.map((activity, index) => (
          <li key={activity.id}>
            <Link className="rounded-activity-card" href={`/aktivitet/${activity.id}`} >
              <article className="rounded-activity-card overflow-hidden relative">
                <Image 
                  className="max-h-80 object-cover" 
                  src={activity.asset.url} 
                  alt={`${activity.name}`} 
                  width={activity.asset.width} 
                  height={activity.asset.height}
                  priority={index === 0}
                />
                <section className="bg-activity-card-textarea p-5 rounded-activity-card-textarea absolute inset-x-0 bottom-0">
                  <Heading level={2} size={"small"} text={activity.name} colored={true} />
                  <span className="text-black text-lg">{activity.minAge}-{activity.maxAge} år</span>
                </section>
              </article>
            </Link>
          </li>
        ))}
      </ul>
    </>
  )
}