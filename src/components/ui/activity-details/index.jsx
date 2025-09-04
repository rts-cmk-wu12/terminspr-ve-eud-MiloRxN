'use client'
import Image from "next/image"
import Heading from "@/components/typography/heading"
import { IoTimeOutline } from "react-icons/io5";
import ParticipateButton from "../participate-button"
import LinkButton from "../link-button"

export default function ActivityDetails({ id, user, activity }) {
  
  console.log("ActivityDetails received user:", user); // Debug log
  console.log("ActivityDetails received activity:", activity); // Debug log
  
  let userStatus = null;
  if (user && activity) {
    const age = user?.age;
    const activities = user?.activities ?? [];
    userStatus = {
      tooOld: age > activity?.maxAge,
      tooYoung: age < activity?.minAge,
      available: !activities.some(act => act?.weekday === activity?.weekday),
      participating: activities.some(act => act?.id === activity?.id),
      userId: user?.id,
      activityId: activity?.id,
    };
    console.log("UserStatus calculated:", userStatus); // Debug log
  }

  if (!activity) {
    return <p>Aktivitet kunne ikke findes</p>;
  }

  return (
    <>
      <div className="relative">
        <Image priority className="max-h-110 object-cover" src={activity.asset.url} width={activity.asset.width} height={activity.asset.height} alt={activity.name} />
        {user ? (
          <ParticipateButton userStatus={userStatus} />
        ) : (
          <LinkButton href={`/login?redirect=/aktivitet/${id}`} text="Login" className="absolute bottom-5 right-5" />
        )}
      </div>
      <section className="px-8 py-4">
        <Heading text={activity.name} />
        <div className="flex gap-4">
          <span>{activity.minAge} - {activity.maxAge} år</span>
          <div className="flex gap-2 items-center">
            <span className="flex items-center gap-1 capitalize">
              <IoTimeOutline className="animate-pulse" />
              {activity.weekday}
            </span>
            {activity.time}
          </div>
        </div>
        <p className="my-4">{activity.description}</p>
      </section>
    </>
  )
}