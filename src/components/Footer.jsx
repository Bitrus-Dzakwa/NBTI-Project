import { FaFacebookF } from "react-icons/fa";
import { AiOutlineInstagram } from "react-icons/ai";
import { BsTwitter } from "react-icons/bs";
import { CiLinkedin } from "react-icons/ci";

import Logo from "../assets/footerLogo.png";
import bgImg from "../assets/image22.png";

function Footer() {
  return (
    <div className="bg-greengray-900 relative">
      <img
        src={bgImg}
        alt="footerBgImg"
        className="w-full h-full bg-left bg-no-repeat bg-cover object-cover absolute z-1 "
      />
      <div className="md:p-20 p-8 md:flex gap-10">
        <section className="md:w-[25vw] w-full text-[#FAFAFA]">
          <div className="flex gap-3">
            <img src={Logo} alt="footerImage" />
            <h2 className="text-white capitalize font-semibold">
              Neighborhood Bible Translation Initiative
            </h2>
          </div>
          <h6 className="text-sm mt-5 ">
            To see God{"'"}s word translated into the languages of all nations
            to transform lives and unite people.
          </h6>
          <h3 className="text-yellowy-900 uppercase font-semibold mt-5 md:mt-12">
            contact us
          </h3>
          <p className="pt-3 text-sm">neibitrai@gmail.com</p>
          <p className="pt-3 text-sm">+234 806 580 4642</p>
          <div className="flex mt-5 gap-5 md:gap-2">
            <a
              href="http://facebook.com"
              target="_blanck"
              className="p-3 rounded-full bg-yellowy-900 text-greengray-900"
            >
              <FaFacebookF size={20} />
            </a>
            <a
              href="http://twitter.com"
              target="_blanck"
              className="p-3 rounded-full bg-yellowy-900 text-greengray-900"
            >
              <BsTwitter size={20} />
            </a>
            <a
              href="http://instagram.com"
              target="_blanck"
              className="p-3 rounded-full bg-yellowy-900 text-greengray-900"
            >
              <AiOutlineInstagram size={20} />
            </a>
            <a
              href="http://linkedin.com"
              target="_blanck"
              className="p-3 rounded-full bg-yellowy-900 text-greengray-900"
            >
              <CiLinkedin size={20} />
            </a>
          </div>
        </section>
        <section className="text-[#FAFAFA] font-medium md:flex flex-col justify-between">
          <div className="md:flex gap-10">
            <article className="md:w-1/5 mb-5 md:mb-0 ">
              <h3 className="text-yellowy-900 uppercase font-semibold">
                quick links
              </h3>
              <ul>
                <li>about us</li>
                <li>Services</li>
                <li>team</li>
                <li>blog</li>
              </ul>
            </article>
            <article className="md:w-1/5 mb-5 md:mb-0">
              <h3 className="text-yellowy-900 uppercase font-semibold">
                partners
              </h3>
              <ul>
                <li>partner 1</li>
                <li>partner 2</li>
                <li>partner 3</li>
                <li>partner 4</li>
              </ul>
            </article>
            <article className="md:w-1/5 mb-5 md:mb-0">
              <h3 className="text-yellowy-900 uppercase font-semibold">
                working hours
              </h3>
              <ul>
                <li>Mondays - Fridays</li>
                <li>8:00 - 17:00</li>
              </ul>
            </article>
            <article className="md:w-2/5 mb-5 md:mb-0">
              <h3 className="text-yellowy-900 uppercase font-semibold">
                Visit us today
              </h3>
              <p>
                Beside National Library Jos Branch. Jay FM Radio Station Nukun
                Street Jos.
              </p>
            </article>
          </div>
          <div>
            <p className="pt-5 md:pt-10 border-yellow-100 border-t">
              Copyright © 2023 NBTI. All rights reserved.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Footer;
