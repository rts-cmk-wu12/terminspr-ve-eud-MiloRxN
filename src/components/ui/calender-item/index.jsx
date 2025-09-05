import Heading from "@/components/typography/heading";
import Link from "next/link";

export default function CalenderItem({ activity, href }) {
  return (
    <Link href={href}>
      <section
        className="rounded-calender-items bg-white p-5 cursor-pointer hover:opacity-80 transition-opacity"
      >
        <Heading
          level={2}
          text={activity.name}
          colored={true}
          style={"overflow-hidden overflow-ellipsis whitespace-nowrap text-2xl"}
        />
        <span className="capitalize text-black">{activity.weekday} {activity.time}</span>
      </section>
    </Link>
  );
}