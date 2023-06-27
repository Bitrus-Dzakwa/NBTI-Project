import { BiLowVision } from "react-icons/bi";
import { RiRefund2Line } from "react-icons/ri";
import { AiFillSignal } from "react-icons/ai";

function AboutSection() {
  return (
    <div>
      <section className="grid grid-cols-1 md:grid-cols-3 px-5 md:px-20">
        <div className="bg-white rounded-md shadow-md p-5">
          <div className="flex items-center gap-5 text-greengray-900">
            <h4 className="text-greengray-900 text-2xl font-bold">Vision</h4>
            <BiLowVision />
          </div>
          <p className="feature__text">
            Our vision is to see God{"'"}s word translated into the languages of
            all nations to transform lives and unite people.
          </p>
        </div>
        <div className="bg-white rounded-md shadow-md p-5">
          <div className="flex items-center gap-5 text-greengray-900">
            <h4 className="text-greengray-900 text-2xl font-bold">Mission</h4>
            <BiLowVision />
          </div>
          <p className="feature__text">
            Our mission is to use Scripture to help tribes and nations
            experience God{"'"}s love and remain united and indivisible.
          </p>
        </div>
        <div className="bg-white rounded-md shadow-md p-5">
          <div className="flex items-center gap-5 text-greengray-900">
            <h4 className="text-greengray-900 text-2xl font-bold">
              Core Values
            </h4>
            <BiLowVision />
          </div>
          <p className="feature__text">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur
            distinctio necessitatibus pariatur voluptatibus.
          </p>
        </div>
        <div className="bg-white rounded-md shadow-md p-5">
          <div className="flex items-center gap-5 text-greengray-900">
            <h4 className="text-greengray-900 text-2xl font-bold">
              Source of Funds
            </h4>
            <RiRefund2Line />
          </div>
          <p className="feature__text">
            Neighborhood Bible Translation Initiative is entirely a faith-based
            organization. Our resources come from men and women who feel the
            Spirit of God is urging them to partner with us through:
            <ul>
              <li>Donation</li>
              <li>Sales of Materials</li>
              <li>Grants, Aids and Gift</li>
              <li>Fees for training</li>
            </ul>
          </p>
        </div>
        <div className="bg-white rounded-md shadow-md p-5">
          <div className="flex items-center gap-5 text-greengray-900">
            <h4 className="text-greengray-900 text-2xl font-bold">
              Our Strategies
            </h4>
            <AiFillSignal />
          </div>
          <p className="feature__text">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur
            distinctio necessitatibus pariatur voluptatibus.
          </p>
        </div>
      </section>
    </div>
  );
}

export default AboutSection;
