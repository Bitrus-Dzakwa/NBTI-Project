import { BiLowVision } from "react-icons/bi";

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
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur
            distinctio necessitatibus pariatur voluptatibus.
          </p>
        </div>
        <div className="bg-white rounded-md shadow-md p-5">
          <div className="flex items-center gap-5 text-greengray-900">
            <h4 className="text-greengray-900 text-2xl font-bold">Mission</h4>
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
            <h4 className="text-greengray-900 text-2xl font-bold">Core</h4>
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
              Our Strategies
            </h4>
            <BiLowVision />
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
