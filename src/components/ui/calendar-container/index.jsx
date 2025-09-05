'use client'
import { useEffect } from "react"
import useFetch from "@/hooks/use-fetch"
import CalenderItem from "../calender-item"
import CalenderItemSkeleton from "../skeleton/skeleton-calender-item"
import LinkButton from "../link-button"
import skeletonProvider from "@/utils/skeleton-provider"
import Heading from "@/components/typography/heading"

export default function CalendarContainer({ user, isInstructor }) {
  const { data: activities, loading, error } = useFetch('activities')

  useEffect(() => {
    if (!user) {
      document.body.style.overflow = 'hidden'
    }
  }, [user])

  if (!user) {
    return (
      <>
        <div className="flex flex-col gap-4 relative">
          {skeletonProvider(5, CalenderItemSkeleton)}
          <div className="absolute inset-0 flex items-center justify-center bg-black/40">
            <div className="bg-activity-card-textarea p-6 rounded-lg text-center shadow-lg border">
              <Heading level={2} text={"Log ind for at bruge kalenderen"} style="text-white font-bold mb-2" />
              <LinkButton
                href="/login?redirect=/kalender"
                text="Log ind"
                className="bg-primary-background text-primary-foreground"
              />
            </div>
          </div>
        </div>
      </>
    );
  }

  const userActivities = activities?.filter(activity => {
    if (isInstructor) {
      return activity.instructorId === user?.id
    } else {
      return user?.activities?.some(userActivity => userActivity.id === activity.id)
    }
  }) || []

  return (
    <>
      <div className="flex flex-col gap-4">
        {userActivities.map((activity) => {
          let navigateUrl = null
          if (isInstructor) {
            navigateUrl = `/hold/${activity.id}`
          } else {
            navigateUrl = `/aktivitet/${activity.id}`
          }

          return (
            <CalenderItem
              key={activity.id}
              activity={activity}
              href={navigateUrl}
            />
          )
        })}
      </div>
    </>
  )
}