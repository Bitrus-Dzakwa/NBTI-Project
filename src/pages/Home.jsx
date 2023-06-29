import {
  OurWorks,
  Banner,
  Footer,
  JoinUs,
  NewsSection,
  Testimonial,
  AboutSection,
} from "../components";

function Home() {
  return (
    <div>
      <Banner />
      <OurWorks />
      <JoinUs />
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
