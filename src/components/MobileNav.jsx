import { Link, NavLink } from "react-router-dom";
import { IoClose } from "react-icons/io5";
import Button from "./Button";
import { HiOutlineChevronRight, HiOutlineUserCircle } from "react-icons/hi";

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
            to="/donate"
            onClick={() => {
              setIsMenuOpen(false);
            }}
            className={({ isActive }) => (isActive ? active : notActive)}
          >
            Donate
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/news"
            onClick={() => {
              setIsMenuOpen(false);
            }}
            className={({ isActive }) => (isActive ? active : notActive)}
          >
            News
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contact"
            onClick={() => {
              setIsMenuOpen(false);
            }}
            className={({ isActive }) => (isActive ? active : notActive)}
          >
            Contact
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/volunteer"
            onClick={() => {
              setIsMenuOpen(false);
            }}
            className={({ isActive }) => (isActive ? active : notActive)}
          >
            Volunteer
          </NavLink>
        </li>
        <div className="flex flex-col items-center gap-4">
          <Link
            to="/login"
            onClick={() => {
              setIsMenuOpen(false);
            }}
          >
            <Button title="sign in" icon={<HiOutlineUserCircle />} />
          </Link>
          <Link
            to="/started"
            onClick={() => {
              setIsMenuOpen(false);
            }}
          >
            <Button
              title="Get Started"
              isBg={true}
              icon={<HiOutlineChevronRight />}
            />
          </Link>
        </div>
      </ul>
    </>
  );
}

export default MobileNav;
