import Heading from "@/components/typography/heading";
import Image from "next/image";

export default function ActivityCard() {

  return(
    <article className="rounded-activity-card overflow-hidden relative">
      <Image src={"/images/splash-image.jpg"} alt={"data?.title"} width="400" height="400"/>
      <div className="absolute inset-x-0 bottom-0 p-6 rounded-activity-card-textarea bg-activity-card-textarea">
        <Heading level={2} size={"small"} text={"Junior Fitness Dance"} colored={true}/>
        <span>10-12 år</span>
      </div>
    </article>
  )
}