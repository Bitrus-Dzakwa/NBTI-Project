import { NavLink } from "react-router-dom";
import { IoClose } from "react-icons/io5";
import Button from "./Button";
import { HiOutlineChevronRight, HiOutlineUserCircle } from "react-icons/hi";
import { Link } from "react-scroll";

function MobileNav({ setIsMenuOpen }) {
  const active = "text-stone-300 font-semibold text-xl";
  const notActive =
    " text-white transition-all font-semibold text-xl hover:text-greengray-900";

  return (
    <>
      <ul className={`flex justify-center items-center flex-col gap-8`}>
        <div className="pr-4 pt-4 absolute top-0 right-0 text-white">
          <IoClose
            size={35}
            onClick={() => {
              setIsMenuOpen(false);
            }}
          />
        </div>
        <li>
          <NavLink
            to="/"
            onClick={() => {
              setIsMenuOpen(false);
            }}
            className={({ isActive }) => (isActive ? active : notActive)}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
            onClick={() => {
              setIsMenuOpen(false);
            }}
            className={({ isActive }) => (isActive ? active : notActive)}
          >
            About Us
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/works"
            onClick={() => {
              setIsMenuOpen(false);
            }}
            className={({ isActive }) => (isActive ? active : notActive)}
          >
            Our Works
          </NavLink>
        </li>
        <li>
          <Link
            onClick={() => {
              setIsMenuOpen(false);
            }}
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            to="getInvolved"
            className="text-white transition-all font-semibold text-xl hover:text-greengray-900"
          >
            Get Involved
          </Link>
        </li>
        <li>
          <Link
            onClick={() => {
              setIsMenuOpen(false);
            }}
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            to="news"
            className="text-white transition-all font-semibold text-xl hover:text-greengray-900"
          >
            News
          </Link>
        </li>
        <li>
          <Link
            onClick={() => {
              setIsMenuOpen(false);
            }}
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            to="contact"
            className="text-white transition-all font-semibold text-xl hover:text-greengray-900"
          >
            Contact
          </Link>
        </li>

        <div className="flex flex-col items-center gap-4">
          <NavLink
            to="/volunteer"
            onClick={() => {
              setIsMenuOpen(false);
            }}
          >
            <Button title="Volunteer" icon={<HiOutlineUserCircle />} />
          </NavLink>
          <NavLink
            to="/donate"
            onClick={() => {
              setIsMenuOpen(false);
            }}
          >
            <Button
              title="Donate Now"
              isBg={true}
              icon={<HiOutlineChevronRight />}
            />
          </NavLink>
        </div>
      </ul>
    </>
  );
}

export default MobileNav;
