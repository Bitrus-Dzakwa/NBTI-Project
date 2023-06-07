import { useState, useEffect } from "react";
import { FiMenu } from "react-icons/fi";

import Logo from "../assets/mainLogo.png";
import NavLinks from "./NavLinks";
import MobileNav from "./MobileNav";
import { Link } from "react-router-dom";

function NavBar() {
  const [show, setShow] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const transitionNavBar = () => {
    if (window.scrollY > 100) {
      setShow(true);
    } else {
      setShow(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", transitionNavBar);
    return () => window.removeEventListener("scroll", transitionNavBar);
  }, []);

  const nav = "py-2 w-full h-50 z-10";
  const nav__grey = "bg-yellowy-900";
  const nav__black = "bg-[#EA9715]";

  return (
    <div className="sticky top-0 flex w-full">
      <nav className={`${nav} ${!show && nav__grey} ${show && nav__black}`}>
        <div className="flex justify-between items-center w-[90%] mx-auto">
          <Link to="/">
            <img className="h-12" src={Logo} alt="Logo" />
          </Link>

          <NavLinks />
          <div className="block md:hidden">
            <FiMenu onClick={() => setIsMenuOpen(true)} />
            {isMenuOpen && (
              <div className="h-screen w-full flex justify-center items-center fixed top-0 left-0 overflow-auto scrollbar-hide bg-[#EA9715] z-50 transition-all">
                <MobileNav setIsMenuOpen={setIsMenuOpen} />
              </div>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
