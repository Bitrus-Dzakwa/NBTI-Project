import { NavLink } from "react-router-dom";
import { IoClose } from "react-icons/io5";

function MobileNav({ setIsMenuOpen }) {
  const active = "text-stone-300 font-semibold text-xl";
  const notActive =
    " text-white transition-all font-semibold text-xl hover:text-red-300";

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
            className={({ isActive }) => (isActive ? active : notActive)}
          >
            About Us
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/getinvolve"
            className={({ isActive }) => (isActive ? active : notActive)}
          >
            Get Involved
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/testimonial"
            className={({ isActive }) => (isActive ? active : notActive)}
          >
            Testimonial
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/blog"
            className={({ isActive }) => (isActive ? active : notActive)}
          >
            Blog
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contact"
            className={({ isActive }) => (isActive ? active : notActive)}
          >
            Contact Us
          </NavLink>
        </li>
      </ul>
    </>
  );
}

export default MobileNav;
