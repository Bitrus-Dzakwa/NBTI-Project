import { Link } from "react-router-dom";
import Button from "./Button";
import { AiOutlineRight } from "react-icons/ai";
import { MdVideoLibrary } from "react-icons/md";
import { FaBookOpen } from "react-icons/fa";
import { RiTranslate } from "react-icons/ri";
import { IoLanguage } from "react-icons/io5";

import bgImg from "../assets/image22.png";
import bannerImage from "../assets/frame19.png";

function Banner() {
  return (
    <section className="w-full bg-stone-50 md:grid flex flex-col md:grid-cols-2 relative md:py-20 md:px-16">
      <img
        src={bgImg}
        alt="backImage"
        className="w-full h-full bg-left bg-no-repeat bg-contain object-contain absolute left-0 top-0 z-1 backdrop-blur-lg"
      />
      <div className=" z-10 p-10 md:p-24">
        <img
          src={bannerImage}
          alt="bannerImage"
          className="w-full h-full object-fill bg-contain"
        />
      </div>
      <div className="p-8 order-last md:order-1 z-10 ">
        <h3 className="text-yellowy-900 uppercase font-semibold">about us</h3>
        <h1 className="text-greengray-900 text-3xl md:text-4xl font-semibold mt-4 md:mt-8">
          We believe Bible translation is central to spreading the Gospel
        </h1>
        <p className="text-sm md:text-base text-greengray-900 mt-6 md:mt-8 ">
          Every nation, tribe, people, and language should have access to God
          {"'"}s word in their heart language. We hope to eliminate any barriers
          that may prevent people from understanding and accepting the message
          of the Bible.
        </p>
        <div className="md:grid gap-4 grid-cols-4 mt-6 md:w-full md:mt-8">
          <div className="flex flex-col justify-center items-center gap-4 p-4 border text-center border-greengray-900 rounded-sm bg-stone-50 mb-5 md:mb-0 hover:scale-95">
            <MdVideoLibrary size={30} />
            <p className="font-medium md:font-semibold text-greengray-900">
              Audio and Video Production
            </p>
          </div>
          <div className="flex flex-col justify-center items-center gap-4 p-4 border text-center border-greengray-900 rounded-sm bg-stone-50 mb-5 md:mb-0 hover:scale-95">
            <IoLanguage size={30} />
            <p className="font-medium md:font-semibold text-greengray-900">
              Language Research
            </p>
          </div>
          <div className="flex flex-col justify-center items-center gap-4 p-4 border text-center border-greengray-900 rounded-sm bg-stone-50 mb-5 md:mb-0 hover:scale-95">
            <FaBookOpen size={30} />
            <p className="font-medium md:font-semibold text-greengray-900">
              Publication Services
            </p>
          </div>
          <div className="flex flex-col justify-center items-center gap-4 p-4 border text-center border-greengray-900 rounded-sm bg-stone-50 mb-5 md:mb-0 hover:scale-95">
            <RiTranslate size={30} />
            <p className="font-medium md:font-semibold text-greengray-900">
              Translation Services
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

export default Banner;
