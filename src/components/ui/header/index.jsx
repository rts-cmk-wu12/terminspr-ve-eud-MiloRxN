"use client"
import Heading from "@/components/typography/heading";
import { useTitleFromPath } from "@/hooks/use-title-from-path";
import { CiSearch } from "react-icons/ci";

export default function Header({ search = false }) {
  const title = useTitleFromPath()

  return (
    <header className="py-4 px-8">
      <Heading size={"large"} text={title} />
      {search && (
        <form>
          <label>
            <input type="search" name="search"/>
          </label>
          <button type="submit"><CiSearch /></button>
        </form>
      )}
    </header>
  )
}