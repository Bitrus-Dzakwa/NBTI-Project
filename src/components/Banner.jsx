import { Link } from "react-router-dom";
import Button from "./Button";
import { AiOutlinePlus } from "react-icons/ai";

import bgImg from "../assets/image11.png";
import bannerImage from "../assets/image9.png";

function Banner() {
  return (
    <header className="w-full bg-[#FFFBF2] md:grid flex flex-col md:grid-cols-2 relative md:py-20 md:px-16">
      <img
        src={bgImg}
        alt="backImage"
        className="w-full h-full bg-left bg-no-repeat bg-contain object-contain absolute z-1 backdrop-blur-lg"
      />
      <div className="p-8 order-last md:order-1 z-10 md:w-[90%]">
        <h1 className="capitalize text-greengray-900 text-4xl md:text-5xl md:w-[95%] font-semibold">
          Neighborhood <span className="text-yellowy-900"> Bible </span>
          Translation initiative.
        </h1>
        <p className="text-sm md:text-base text-greengray-900 mt-6 md:mt-8 ">
          Bringing the word of God to every language. We believe Bible
          translation is the central to spreading the gospel.
        </p>
        <div className="mt-6 md:mt-8 w-fit">
          <Link to="/volunteer">
            <Button
              title="BE A PART OF THIS"
              isBg={true}
              icon={<AiOutlinePlus />}
            />
          </Link>
        </div>
        <div className="flex justify-between items-center md:w-[90%] mt-6 md:mt-8">
          <div className="flex flex-col justify-center items-center">
            <h3 className="text-yellowy-900 font-bold text-lg">7,117</h3>
            <p className="text-greengray-900">Languages spoken worldwide</p>
          </div>
          <div className="flex flex-col justify-center items-center">
            <h3 className="text-yellowy-900 font-bold text-lg">3,386</h3>
            <p className="text-greengray-900">
              Languages with at least one book of the Bible translation
            </p>
          </div>
          <div className="flex flex-col justify-center items-center">
            <h3 className="text-yellowy-900 font-bold text-lg">2731</h3>
            <p className="text-greengray-900">
              Languages without any Portion of the Bible Translated
            </p>
          </div>
        </div>
      </div>
      <div className="md:order-2 z-10">
        <img
          src={bannerImage}
          alt="bannerImage"
          className="w-full h-full object-fill bg-contain"
        />
      </div>
    </header>
  );
}

export default Banner;
