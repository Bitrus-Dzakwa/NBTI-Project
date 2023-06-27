// import { Link } from "react-router-dom";
// import { BsChevronRight } from "react-icons/bs";

function NewsCard({ img, content }) {
  return (
    // <Link to="/blog">
    <div className="max-w-sm bg-white  rounded-lg shadow-lg hover:shadow-md  transform transition duration-500 hover:scale-95 p-6">
      <img
        className="rounded-lg object-cover w-full h-48"
        src={img}
        alt="blog Image"
      />
      <div className="px-3 py-2 text-greengray-900 my-2 bg-[#FFFBF2] max-w-fit">
        <p>June 01, 2023</p>
      </div>
      <h5 className="mb-2 text-2xl font-bold tracking-tight text-greengray-900">
        Chibok community now has it own translation
      </h5>
      <p className="mb-3 font-normal text-greengray-900">{content}</p>
      {/* <Link
          to="/about"
          className="flex items-center gap-4 text-yellowy-900 pt-2"
        >
          <p className="text-yellowy-900 font-semibold">Process</p>
          <BsChevronRight size={20} />
        </Link> */}
    </div>
    // </Link>
  );
}

export default NewsCard;
