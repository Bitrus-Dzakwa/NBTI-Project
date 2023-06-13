import Testimony from "./Testimony";
import arrDwn from "../assets/arr-down.png";

function Testimonial() {
  return (
    <div className="bg-white py-16 md:py-24">
      <div className="flex justify-end px-6 md:px-20">
        <div className="flex items-end flex-col">
          <h3 className="text-yellowy-900 uppercase font-semibold flex items-center gap-4">
            <span>
              <img src={arrDwn} alt="arrow" className="w-8 h-8" />
            </span>
            Testimonials
          </h3>
          <h1 className="capitalize text-greengray-900 text-2xl md:text-3xl mb-4 font-semibold">
            What they say
          </h1>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 px-8 md:px-24 gap-16 place-content-center">
        <Testimony
          name="jane Doe"
          position="business"
          testimony="Support a Bible translation project by becoming a sponsor. You can help us in funding the translation of the Bible into a specific language. Support a Bible translation project by becoming a sponsor. You can help us in funding the translation of the Bible into a specific language.Support a Bible translation project by becoming a sponsor. You can help us in funding the translation of the Bible into a specific language."
        />
        <Testimony
          name="john maxwell"
          position="lead-consultant inc"
          testimony="Support a Bible translation project by becoming a sponsor. You can help us in funding the translation of the Bible into a specific language. Support a Bible translation project by becoming a sponsor. You can help us in funding the translation of the Bible into a specific language.Support a Bible translation project by becoming a sponsor. You can help us in funding the translation of the Bible into a specific language."
        />
        <Testimony
          name="john maxwell"
          position="lead-consultant inc"
          testimony="Support a Bible translation project by becoming a sponsor. You can help us in funding the translation of the Bible into a specific language. Support a Bible translation project by becoming a sponsor. You can help us in funding the translation of the Bible into a specific language.Support a Bible translation project by becoming a sponsor. You can help us in funding the translation of the Bible into a specific language. iko9andfnslf slfsofsof sfsofsofnsfn slfjsofsnoflksnf sfjsofnsofsnf slfjsofjs slfsof sfsl foslfsladkjf"
        />
      </div>
    </div>
  );
}

export default Testimonial;
