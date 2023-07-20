import Testimony from "./Testimony";
import arrDwn from "../assets/arr-down.png";

import testi1 from "../assets/testi1.jpeg";

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
          name="Nicholas James Mundat"
          Img={testi1}
          position="business"
          testimony="My name is Nicholas James Mundat, the T A 1 of mindat language.
My encounter with the OBT through NBTI was a whole new transformation and reawakening of a whole new world to me in a new dimension. This encounter made me to view Christianity and discipleship in another broader and better perspective than the one I use to know.
It's makes me yearn for the word every day and it's triggers me to wanting to learn always.
What marveled me everyday is the way that God is using people at different level to expand the coverage of the OBT to various languages and how eager and passionate to be part of those people that will give themselves as instruments to propagate the word of God to the mindat community and the world.
I want to most sincerely thank Rev. Benjamin Matawal who has always stand firm for the purpose of the kingdom of God.
Sir your vision for the kingdom is something to emulate.
The global partners that are supporting this course, may God bless you all. Shalom"
        />
        <Testimony
          name="john maxwell"
          Img={testi1}
          position="lead-consultant inc"
          testimony="Support a Bible translation project by becoming a sponsor. You can help us in funding the translation of the Bible into a specific language. Support a Bible translation project by becoming a sponsor. You can help us in funding the translation of the Bible into a specific language.Support a Bible translation project by becoming a sponsor. You can help us in funding the translation of the Bible into a specific language."
        />
        <Testimony
          name="john maxwell"
          Img={testi1}
          position="lead-consultant inc"
          testimony="Support a Bible translation project by becoming a sponsor. You can help us in funding the translation of the Bible into a specific language. Support a Bible translation project by becoming a sponsor. You can help us in funding the translation of the Bible into a specific language.Support a Bible translation project by becoming a sponsor. You can help us in funding the translation of the Bible into a specific language. iko9andfnslf slfsofsof sfsofsofnsfn slfjsofsnoflksnf sfjsofnsofsnf slfjsofjs slfsof sfsl foslfsladkjf"
        />
      </div>
    </div>
  );
}

export default Testimonial;
