"use client"
import Heading from "@/components/typography/heading";
import { useTitleFromPath } from "@/hooks/use-title-from-path";
import { FiSearch } from "react-icons/fi";

export default function Header({ search = false, onSearch, searchTerm = '' }) {
  const title = useTitleFromPath()

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const searchValue = formData.get('search');
    if (onSearch) {
      onSearch(searchValue);
    }
  };

  const handleInputChange = (event) => {
    if (onSearch) {
      onSearch(event.target.value);
    }
  };

  return (
    <header className="py-4 px-5 flex flex-col gap-4">
      <Heading size={"large"} text={title === "soeg" ? "søg" : title} />
      {search && (
        <form onSubmit={handleSubmit} className="bg-search-background flex justify-between py-2 px-4">
          <label>
            <input 
              type="search" 
              name="search"
              value={searchTerm}
              onChange={handleInputChange}
            />
          </label>
          <button type="submit"><FiSearch /></button>
        </form>
      )}
    </header>
  )
}