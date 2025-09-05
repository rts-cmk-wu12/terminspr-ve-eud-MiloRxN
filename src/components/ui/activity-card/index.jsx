import Heading from "@/components/typography/heading";
import Image from "next/image";
import Link from "next/link";

export default function SingleActivityCard({ activity, priority = false }) {
  if (!activity) {
    return null;
  }

  return (
    <li>
      <Link className="rounded-activity-card" href={`/aktivitet/${activity.id}`}>
        <article className="rounded-activity-card overflow-hidden relative">
          <Image
            className="max-h-80 object-cover"
            src={activity.asset.url}
            alt={`${activity.name}`}
            width={activity.asset.width}
            height={activity.asset.height}
            priority={priority}
          />
          <section className="bg-activity-card-textarea p-5 rounded-activity-card-textarea absolute inset-x-0 bottom-0">
            <Heading level={2} size={"small"} text={activity.name} colored={true} />
            <span className="text-black text-lg">{activity.minAge}-{activity.maxAge} år</span>
          </section>
        </article>
      </Link>
    </li>
  )
}