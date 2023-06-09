import { Link } from "react-router-dom";
import Button from "./Button";
import { AiOutlineRight } from "react-icons/ai";
import { MdOutlineVolunteerActivism, MdVideoLibrary } from "react-icons/md";
import { FaBookOpen } from "react-icons/fa";
import { RiCommunityFill, RiServiceLine, RiTranslate } from "react-icons/ri";
import { IoLanguage } from "react-icons/io5";

import bgImg from "../assets/image22.png";
import bannerImage from "../assets/frame19.png";
import { BsFillBuildingsFill } from "react-icons/bs";

function OurWorks() {
  return (
    <section className="w-full bg-white md:grid flex flex-col md:grid-cols-2 relative md:py-20 md:px-16">
      <img
        src={bgImg}
        alt="backImage"
        className="w-full h-full bg-left bg-no-repeat bg-contain object-contain absolute left-0 top-0 z-1"
      />
      <div className=" z-10 p-10 md:p-24">
        <img
          src={bannerImage}
          alt="bannerImage"
          className="w-full h-full object-fill bg-contain"
        />
      </div>
      <div className="p-8 order-last md:order-1 z-10 ">
        <h3 className="text-yellowy-900 uppercase font-semibold">Our Works</h3>
        <h1 className="text-greengray-900 text-2xl font-semibold mt-4 md:mt-8">
          When properly managed the translation which was to take years can
          reduce to visible time possible to use the product for the public
          consumption.
        </h1>
        <p className="text-sm md:text-base text-greengray-900 mt-6 md:mt-8 ">
          We are non-profit, non-denominational organization, committed to bible
          translations. Our goal is to ensure that every nation, tribe, people
          and language have access to God{"'"}s word in their heart language.
        </p>
        <div className="grid gap-4 grid-cols-2 md:grid-cols-4 mt-6 md:w-full md:mt-8">
          <div className="flex flex-col justify-center items-center gap-4 p-4 border text-center border-greengray-900 rounded-sm bg-white shadow-sm mb-5 md:mb-0 hover:scale-95">
            <MdVideoLibrary size={30} className="text-greengray-900" />
            <p className="font-medium md:font-semibold text-greengray-900">
              Audio and Video Production
            </p>
          </div>
          <div className="flex flex-col justify-center items-center gap-4 p-4 border text-center border-greengray-900 rounded-sm bg-white shadow-sm mb-5 md:mb-0 hover:scale-95">
            <IoLanguage size={30} className="text-greengray-900" />
            <p className="font-medium md:font-semibold text-greengray-900">
              Language Research
            </p>
          </div>
          <div className="flex flex-col justify-center items-center gap-4 p-4 border text-center border-greengray-900 rounded-sm bg-white shadow-sm mb-5 md:mb-0 hover:scale-95">
            <FaBookOpen size={30} className="text-greengray-900" />
            <p className="font-medium md:font-semibold text-greengray-900">
              Publication Services
            </p>
          </div>
          <div className="flex flex-col justify-center items-center gap-4 p-4 border text-center border-greengray-900 rounded-sm bg-white shadow-sm mb-5 md:mb-0 hover:scale-95">
            <RiTranslate size={30} className="text-greengray-900" />
            <p className="font-medium md:font-semibold text-greengray-900">
              Translation Services
            </p>
          </div>
          <div className="flex flex-col justify-center items-center gap-4 p-4 border text-center border-greengray-900 rounded-sm bg-white shadow-sm mb-5 md:mb-0 hover:scale-95">
            <BsFillBuildingsFill size={30} className="text-greengray-900" />
            <p className="font-medium md:font-semibold text-greengray-900">
              Training and Capacity Building
            </p>
          </div>
          <div className="flex flex-col justify-center items-center gap-4 p-4 border text-center border-greengray-900 rounded-sm bg-white shadow-sm mb-5 md:mb-0 hover:scale-95">
            <RiServiceLine size={30} className="text-greengray-900" />
            <p className="font-medium md:font-semibold text-greengray-900">
              Consultation Service
            </p>
          </div>
          <div className="flex flex-col justify-center items-center gap-4 p-4 border text-center border-greengray-900 rounded-sm bg-white shadow-sm mb-5 md:mb-0 hover:scale-95">
            <RiCommunityFill size={30} className="text-greengray-900" />
            <p className="font-medium md:font-semibold text-greengray-900">
              Community Outreach
            </p>
          </div>
          <div className="flex flex-col justify-center items-center gap-4 p-4 border text-center border-greengray-900 rounded-sm bg-white shadow-sm mb-5 md:mb-0 hover:scale-95">
            <MdOutlineVolunteerActivism
              size={30}
              className="text-greengray-900"
            />
            <p className="font-medium md:font-semibold text-greengray-900">
              Volunteer Opportunities
            </p>
          </div>
        </div>
        <div className="mt-6 md:mt-8 w-fit">
          <Link to="/about">
            <Button title="READ MORE" isBg={true} icon={<AiOutlineRight />} />
          </Link>
        </div>
      </div>
    </section>
  );
}

export default OurWorks;
