import Heading from "@/components/typography/heading";

export default function CalenderItem() {

  return (
    <>
      <section className="rounded-calender-items bg-activity-card-textarea p-5">
        <Heading level={2} size={"large"} text={"Junior Fitness Dance dsadw adw as d"} colored={true} style={"overflow-hidden overflow-ellipsis  whitespace-nowrap"} />
        <span>Mandag 15:45</span>
      </section>
    </>
  )

}