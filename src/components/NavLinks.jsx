import { NavLink } from "react-router-dom";
import Button from "./Button";
import { Link } from "react-scroll";

import { HiOutlineChevronRight, HiOutlineUserCircle } from "react-icons/hi";

function NavLinks() {
  const active =
    "text-greengray-900 p-1 border-b border-greengray-900 font-medium text-sm";
  const notActive =
    "transition-all p-1 text-white font-medium text-sm hover:text-greengray-100";

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
              to="/works"
              className={({ isActive }) => (isActive ? active : notActive)}
            >
              Our Works
            </NavLink>
          </li>
          <li>
            <Link
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              to="getInvolved"
              className="transition-all p-1 text-white font-medium text-sm hover:text-greengray-100 cursor-pointer"
            >
              Get Involved
            </Link>
          </li>
          <li>
            <Link
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              to="news"
              className="transition-all p-1 text-white font-medium text-sm hover:text-greengray-100 cursor-pointer"
            >
              News
            </Link>
          </li>
          <li>
            <Link
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              to="contact"
              className="transition-all p-1 text-white font-medium text-sm hover:text-greengray-100 cursor-pointer"
            >
              Contact
            </Link>
          </li>
        </ul>
        <div className="hidden md:flex gap-8">
          <NavLink to="/volunteer">
            <Button title="Volunteer" icon={<HiOutlineUserCircle />} />
          </NavLink>
          <NavLink to="/donate">
            <Button
              title="Donate Now"
              isBg={true}
              icon={<HiOutlineChevronRight />}
            />
          </NavLink>
        </div>
      </div>
    </>
  );
}

export default NavLinks;
