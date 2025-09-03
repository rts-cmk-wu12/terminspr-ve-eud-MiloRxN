'use client'
import useFetch from "@/hooks/use-fetch"
import Image from "next/image"
import Button from "../button"
import Heading from "@/components/typography/heading"
import { IoTimeOutline } from "react-icons/io5";

export default function ActivityDetails({ id }) {
  const { data, error, loading } = useFetch(`activities/${id}`)

  return (
    <>
      {loading && <p>Indlæser...</p>}
      {error && <p>Aktivitet kunne ikke findes</p>}

      {data && (
        <>
          <div className="relative">
            <Image priority className="max-h-110 object-cover" src={data.asset.url} width={data.asset.width} height={data.asset.height} alt={data.name} />
            <Button text={"Tilmeld"} className="absolute bottom-5 right-5" />
          </div>
          <section className="px-8 py-4">
            <Heading text={data.name} />
            <div className="flex gap-4">
              <span>{data.minAge} - {data.maxAge} år</span>
              <div className="flex gap-2 items-center">
                <span className="flex items-center gap-1 capitalize">
                  <IoTimeOutline className="animate-pulse" />
                  {data.weekday}
                </span>
                {data.time}
              </div>
            </div>
            <p className="my-4">{data.description}</p>
          </section>
        </>
      )}
    </>
  )
}