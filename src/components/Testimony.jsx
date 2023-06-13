import { FaQuoteRight } from "react-icons/fa";

import Img from "../assets/placeholder.jpg";

function Testimony({ name, position, testimony }) {
  return (
    <div className="bg-white">
      <div className="my-4">
        <FaQuoteRight size={30} className="text-greengray-100" />
      </div>

      <p className="mb-3 py-4 font-normal text-sm text-greengray-900 border-t border-b border-b-greengray-900 overflow-y-scroll no-scrollbar h-52  border-t-yellowy-900">
        {testimony}
      </p>
      <div className="flex gap-3 items-center">
        <img
          src={Img}
          alt="photo"
          className="w-16 h-16 rounded-full object-cover "
        />
        <div className="flex flex-col justify-between">
          <h3 className="text-yellowy-900 uppercase font-semibold flex items-center gap-4">
            {name}
          </h3>
          <p className="capitalize font-medium text-sm">{position}</p>
        </div>
      </div>
    </div>
  );
}

export default Testimony;
