import { Link } from "react-router-dom";
import Button from "./Button";
import { AiOutlinePlus } from "react-icons/ai";

import bgImg from "../assets/image11.png";
import bannerImage from "../assets/image9.png";

function Banner() {
  return (
    <header className="w-full bg-amber-100 md:grid flex flex-col md:grid-cols-2 relative md:py-20 md:px-16">
      <img
        src={bgImg}
        alt="backImage"
        className="w-full h-full bg-left bg-no-repeat bg-contain object-contain absolute z-1 backdrop-blur-lg"
      />
      <div className="p-8 order-last md:order-1 z-10 md:w-[90%]">
        <h1 className="capitalize text-greengray-900 text-4xl md:text-5xl  font-semibold">
          Bringing <span className="text-yellowy-900">the word</span> of God to
          every language.
        </h1>
        <p className="text-sm md:text-base text-greengray-900 mt-6 md:mt-8 ">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed commodo
          lorem vitae urna malesuada hendrerit. Ut in nulla enidolor sit amet,
          consectetur adipiscing elit.
        </p>
        <div className="mt-6 md:mt-8 w-fit">
          <Link to="/bePart">
            <Button
              title="BE A PART OF THIS"
              isBg={true}
              icon={<AiOutlinePlus />}
            />
          </Link>
        </div>
        <div className="flex justify-between items-center md:w-[90%] mt-6 md:mt-8">
          <div className="flex flex-col justify-center items-center">
            <h3 className="text-yellowy-900 font-bold text-lg">900+</h3>
            <p className="text-greengray-900">Donors</p>
          </div>
          <div className="flex flex-col justify-center items-center">
            <h3 className="text-yellowy-900 font-bold text-lg">15K</h3>
            <p className="text-greengray-900">Volunteers</p>
          </div>
          <div className="flex flex-col justify-center items-center">
            <h3 className="text-yellowy-900 font-bold text-lg">$10K</h3>
            <p className="text-greengray-900">Raised</p>
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
