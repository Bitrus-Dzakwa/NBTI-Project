import {
  OurWorks,
  Banner,
  Footer,
  GetInvolved,
  NewsSection,
  Testimonial,
  AboutSection,
} from "../components";

function Home() {
  return (
    <div>
      <Banner />
      <OurWorks />
      <section id="getInvolved">
        <GetInvolved />
      </section>
      <AboutSection />
      <Testimonial />
      <section id="news">
        <NewsSection />
      </section>
      <section id="contact">
        <Footer />
      </section>
    </div>
  );
}

export default Home;
