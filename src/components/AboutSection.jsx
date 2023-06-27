import { BiLowVision } from "react-icons/bi";
import { RiRefund2Line } from "react-icons/ri";
import { AiFillSignal } from "react-icons/ai";
import { RxValue } from "react-icons/rx";

import arrDwn from "../assets/arr-down.png";
import { MdDescription } from "react-icons/md";

function AboutSection() {
  return (
    <div className="my-10 md:my-20">
      <div className="py-5 px-8 md:py-10 md:px-15 flex flex-col text-center justify-center items-center">
        <h3 className="text-yellowy-900 uppercase font-semibold flex items-center gap-4">
          About Us
          <span>
            <img src={arrDwn} alt="arrow" className="w-8 h-8" />
          </span>
        </h3>
        <h1 className="capitalize text-greengray-900 text-2xl md:text-3xl mb-4 font-semibold">
          Committed to Bible translation
        </h1>
      </div>
      <section className="grid grid-cols-1 gap-5 md:grid-cols-3 px-5 md:px-20">
        <div className="bg-white rounded-md shadow-md p-5">
          <div className="flex items-center gap-5 md:gap-10 text-greengray-900">
            <h4 className="text-greengray-900 text-2xl font-bold">Vision</h4>
            <BiLowVision size={25} />
          </div>
          <p className="text-sm md:text-base">
            Our vision is to see God{"'"}s word translated into the languages of
            all nations to transform lives and unite people.
          </p>
        </div>
        <div className="bg-white rounded-md shadow-md p-5">
          <div className="flex items-center gap-5 md:gap-10 text-greengray-900">
            <h4 className="text-greengray-900 text-2xl font-bold">Mission</h4>
            <MdDescription size={25} />
          </div>
          <p className="text-sm md:text-base">
            Our mission is to use Scripture to help tribes and nations
            experience God{"'"}s love and remain united and indivisible.
          </p>
        </div>
        <div className="bg-white rounded-md shadow-md p-5">
          <div className="flex items-center gap-5 md:gap-10 text-greengray-900">
            <h4 className="text-greengray-900 text-2xl font-bold">
              Our Core Values
            </h4>
            <RxValue size={25} />
          </div>
          <p className="text-sm md:text-base">
            <ul className="list-disc">
              <li>
                Scripture is God’s message to every individual, Church and
                nation.
              </li>
              <li>
                To work and serve with faithfulness, integrity with sincerity.
              </li>
              <li>Accountability is our watch word as God’s stewards.</li>
              <li>To maintain God’s standard in a changing world.</li>
              <li>
                Evangelization and discipleship using Mother Tongue; the heart
                language.
              </li>
            </ul>
          </p>
        </div>
        <div className="bg-white rounded-md shadow-md p-5">
          <div className="flex items-center gap-5 md:gap-10 text-greengray-900">
            <h4 className="text-greengray-900 text-2xl font-bold">
              Source of Funds
            </h4>
            <RiRefund2Line size={25} />
          </div>
          <p className="text-sm md:text-base">
            Neighborhood Bible Translation Initiative is entirely a faith-based
            organization. Our resources come from men and women who feel the
            Spirit of God is urging them to partner with us through:
            <ul className="list-disc">
              <li>Donation</li>
              <li>Sales of Materials</li>
              <li>Grants, Aids and Gift</li>
              <li>Fees for training</li>
            </ul>
          </p>
        </div>
        <div className="bg-white rounded-md shadow-md p-5">
          <div className="flex items-center gap-5 md:gap-10 text-greengray-900">
            <h4 className="text-greengray-900 text-2xl font-bold">
              Our Strategies
            </h4>
            <AiFillSignal size={25} />
          </div>
          <p className="text-sm md:text-base">
            <ul className="list-disc">
              <li>Mobilization through Churches and community leaders.</li>
              <li>Produce primers in local languages.</li>
              <li>Conduct Literacy training.</li>
              <li>
                Promote and sustain use of Literacy by producing educational and
                spiritual instructional materials.
              </li>
              <li>
                Engage Christian elites in Bible translation within the
                neighborhood.
              </li>
              <li>
                Engage language groups in its translated Bible/Scripture use
                within the neighborhood.
              </li>
              <li>
                We organized and send trained translators to people’s group.
              </li>
            </ul>
          </p>
        </div>
      </section>
    </div>
  );
}

export default AboutSection;
