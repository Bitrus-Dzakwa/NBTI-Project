import NewsCard from "./NewsCard";
import bannerImage from "../assets/image19.png";
import banner from "../assets/1.jpg";
import arrDwn from "../assets/arr-down.png";
import Button from "./Button";
import { BsArrowUpRight } from "react-icons/bs";

function NewsSection() {
  return (
    <div className="bg-[#FFFBF2] md:pb-20">
      <article className="flex flex-col md:flex-row justify-between items-start px-4 md:px-16 pt-12 md:pt-20 pb-4">
        <div>
          <h3 className="text-yellowy-900 uppercase font-semibold flex items-center gap-4">
            News
            <span>
              <img src={arrDwn} alt="arrow" className="w-8 h-8" />
            </span>
          </h3>
          <h1 className="capitalize text-greengray-900 text-2xl md:text-3xl mb-4 font-semibold">
            News and Updates
          </h1>
        </div>
        <div className="px-4 md:w-[28vw]">
          <p className="mb-3 font-normal text-sm text-greengray-900">
            Stay informed with our latest development on Bible translation
            project and other community gospel outreach
          </p>
          <Button title="See All News" icon={<BsArrowUpRight />} />
        </div>
      </article>
      <div className="grid grid-cols-1 md:grid-cols-3 px-8 md:px-24 gap-10 place-content-center">
        <NewsCard img={bannerImage} />
        <NewsCard img={banner} />
        <NewsCard img={bannerImage} />
        {/* <NewsCard img={banner} /> */}
      </div>
    </div>
  );
}

export default NewsSection;
