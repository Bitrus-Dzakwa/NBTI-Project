import NewsCard from "./NewsCard";
import blogImg1 from "../assets/blogImg1.jpeg";
import blogImg2 from "../assets/blogImg2.jpeg";
import blogImg3 from "../assets/blogImg3.png";
import arrDwn from "../assets/arr-down.png";

function NewsSection() {
  return (
    <div className="bg-[#FFFBF2] pb-10 md:pb-20">
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
          {/* <Button title="See All News" icon={<BsArrowUpRight />} /> */}
        </div>
      </article>
      <div className="grid grid-cols-1 md:grid-cols-3 px-8 md:px-24 gap-10 place-content-center">
        <NewsCard
          img={blogImg1}
          title="NBTI partners with local community to translate Bible into indigenous language"
          content="NBTI is a Bible Translation agency that guides mother tongues to own its project for self sustenance, self governance and self sponsored for the owners to take pride in owning the project.
"
          date="July 01, 2023"
        />
        <NewsCard
          img={blogImg2}
          title="Translation Workshop Completed"
          content=" Every mother tongue that is guided by NBTI will undergo ICTP to open the crude mind and widen the scope of the mother tongue owners by inductive awareness to know what is all about translation and is tied to time to deliver for public consumption"
          date="June 01, 2023"
        />
        <NewsCard
          img={blogImg3}
          title="Community based team checking event a success"
          content="When properly managed the translation which was to take years can reduce to visible time possible to use the product for the public consumption."
          date="June 19, 2023"
        />
        {/* <NewsCard img={banner} /> */}
      </div>
    </div>
  );
}

export default NewsSection;
