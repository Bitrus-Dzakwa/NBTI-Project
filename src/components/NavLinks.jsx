import { NavLink } from "react-router-dom";

function NavLinks() {
  const active = "text-stone-500 font-semibold text-xl";
  const notActive = "transition-all font-semibold text-xl hover:text-stone-300";
  //   const nav__black = "bg-gradient-to-b from-stone-500 to-stone-100";

  return (
    <>
      <ul
        className={`hidden md:flex md:flex-row  md:items-center md:gap-[4vw] gap-8`}
      >
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

export default NavLinks;
