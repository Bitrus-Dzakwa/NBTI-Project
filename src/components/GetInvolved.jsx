import { Link } from "react-router-dom";
import { BsChevronRight } from "react-icons/bs";
import { RiHeartAddFill } from "react-icons/ri";
import { TbHeartHandshake } from "react-icons/tb";
import { MdVolunteerActivism } from "react-icons/md";

import bgImg from "../assets/image22.png";
import arrDwn from "../assets/arr-down.png";
import bannerImage from "../assets/group3.png";

function GetInvolved() {
  return (
    <header className="w-full bg-[#FFFBF2] md:grid flex flex-col md:grid-cols-2 relative md:py-20 md:px-16">
      <img
        src={bgImg}
        alt="backImage"
        className="w-full h-full bg-left bg-no-repeat bg-contain object-contain absolute z-1 backdrop-blur-lg"
      />
      <div className="p-8 order-last md:order-1 z-10 md:w-[90%]">
        <h3 className="text-yellowy-900 uppercase font-semibold flex items-center gap-4">
          Get Involved
          <span>
            <img src={arrDwn} alt="arrow" className="w-8 h-8" />
          </span>
        </h3>
        <h1 className="capitalize text-greengray-900 text-2xl md:text-3xl mb-4 font-semibold">
          Be part of this
        </h1>
        <div>
          <div className="ml-2 md:ml-4 flex flex-col gap-4">
            <Link to="/donate">
              <div className="bg-white p-4 hover:shadow-lg hover:scale-105 transition-all">
                <h3 className="text-greengray-900 font-semibold text-lg flex gap-4 items-center mb-2">
                  <RiHeartAddFill size={25} />
                  <span>Donate</span>
                </h3>
                <p className="text-sm">
                  Support us financially by donating to our cause. Your donation
                  will help us in translating the Bible into more languages.
                </p>
                <div className="flex items-center gap-4 text-yellowy-900 pt-2">
                  <p className="text-yellowy-900 font-semibold">Donate</p>
                  <BsChevronRight size={20} />
                </div>
              </div>
            </Link>
            <Link to="/volunteer">
              <div className="bg-white p-4 hover:shadow-lg hover:scale-105 transition-all">
                <h3 className="text-greengray-900 font-semibold text-lg flex gap-4 items-center mb-2">
                  <MdVolunteerActivism size={25} />
                  <span>Volunteer</span>
                </h3>
                <p className="text-sm">
                  Join us as a volunteer and help us in our mission to spread
                  the word of God. We need translators, writers, editors, and
                  more.
                </p>
                <div className="flex items-center gap-4 text-yellowy-900 pt-2">
                  <p className="text-yellowy-900 font-semibold">Volunteer</p>
                  <BsChevronRight size={20} />
                </div>
              </div>
            </Link>
            <Link to="/volunteer">
              <div className="bg-white p-4 hover:shadow-lg hover:scale-105 transition-all">
                <h3 className="text-greengray-900 font-semibold text-lg flex gap-4 items-center mb-2">
                  <TbHeartHandshake size={25} />
                  <span>Pray for Us</span>
                </h3>
                <p className="text-sm">
                  Your prayers can move moutains and change lives. Join our team
                  of prayer warriors and intercede for our organization, our
                  staff, and the communities we serve
                </p>

                <div className="flex items-center gap-4 text-yellowy-900 pt-2">
                  <p className="text-yellowy-900 font-semibold">
                    Join our prayer team
                  </p>
                  <BsChevronRight size={20} />
                </div>
              </div>
            </Link>
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

export default GetInvolved;
