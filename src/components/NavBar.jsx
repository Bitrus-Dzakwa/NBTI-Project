import { useState } from "react";
import { FiMenu } from "react-icons/fi";
import Headroom from "react-headroom";

import Logo from "../assets/mainLogo.png";
import NavLinks from "./NavLinks";
import MobileNav from "./MobileNav";
import { Link } from "react-router-dom";

function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const nav = "py-2 w-full h-50 bg-yellowy-900 shadow-lg";

  return (
    <Headroom style={{ zIndex: 100 }}>
      <div className="w-full">
        <nav className={`${nav}`}>
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
    </Headroom>
  );
}

export default NavBar;
