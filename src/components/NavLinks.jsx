import { NavLink } from "react-router-dom";
import Button from "./Button";

import { HiOutlineChevronRight, HiOutlineUserCircle } from "react-icons/hi";

function NavLinks() {
  const active =
    "text-greengray-900 p-1 border-b border-greengray-900 font-medium text-sm";
  const notActive =
    "transition-all p-1 text-white font-medium text-sm hover:text-greengray-100 ";
  //   const nav__black = "bg-gradient-to-b from-stone-500 to-stone-100";

  return (
    <>
      <div className="flex gap-16">
        <ul className={`hidden md:flex md:flex-row  md:items-center gap-8`}>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? active : notActive)}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) => (isActive ? active : notActive)}
            >
              About Us
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/categories"
              className={({ isActive }) => (isActive ? active : notActive)}
            >
              Categories
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/news"
              className={({ isActive }) => (isActive ? active : notActive)}
            >
              News
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) => (isActive ? active : notActive)}
            >
              Contact
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/volunteer"
              className={({ isActive }) => (isActive ? active : notActive)}
            >
              Volunteer
            </NavLink>
          </li>
        </ul>
        <div className="hidden md:flex gap-8">
          <Button title="sign in" icon={<HiOutlineUserCircle />} />
          <Button
            title="Get Started"
            isBg={true}
            icon={<HiOutlineChevronRight />}
          />
        </div>
      </div>
    </>
  );
}

export default NavLinks;
