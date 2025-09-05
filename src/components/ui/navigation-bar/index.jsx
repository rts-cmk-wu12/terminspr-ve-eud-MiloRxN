import { FiCalendar, FiHome, FiSearch } from "react-icons/fi";
import NavLink from "../nav-link";

export default function NavigationBar() {
  return (
    <footer className="bg-navigation-background shadow-top py-6 px-2 fixed inset-x-0 bottom-0">
      <nav>
        <ul className="flex justify-around items-center">
          <li><NavLink className="text-black text-2xl p-2 flex items-center border-black border-1 rounded-full" activeStyle="border-2"><FiHome /></NavLink></li>
          <li><NavLink className="text-black text-2xl p-2 flex items-center border-black border-1 rounded-full" activeStyle="border-2" path='/soeg'><FiSearch /></NavLink></li>
          <li><NavLink className="text-black text-2xl p-2 flex items-center border-black border-1 rounded-full" activeStyle="border-2" path='/kalender'><FiCalendar /></NavLink></li>
        </ul>
      </nav>
    </footer>
  );
}
