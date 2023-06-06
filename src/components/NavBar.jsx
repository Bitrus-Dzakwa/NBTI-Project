import { useState, useEffect } from "react";
import { FiMenu } from "react-icons/fi";

import Logo from "../assets/logo.png";
import NavLinks from "./NavLinks";
import MobileNav from "./MobileNav";

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

  const nav = "p-2 w-full h-50 z-10";
  const nav__grey = "";
  const nav__black = "bg-stone-500";

  return (
    <div className="fixed top-0 flex w-full">
      <nav className={`${nav} ${!show && nav__grey} ${show && nav__black}`}>
        <div className="flex justify-between items-center w-[85%] mx-auto">
          <img className="w-12 " src={Logo} alt="Logo" />

          <NavLinks />
          <div className="block md:hidden">
            <FiMenu onClick={() => setIsMenuOpen(true)} />
            {isMenuOpen && (
              <div className="h-screen w-full flex justify-center items-center fixed top-0 left-0 overflow-auto scrollbar-hide bg-gradient-to-b from-red-950 to-red-800 z-50 transition-all">
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
