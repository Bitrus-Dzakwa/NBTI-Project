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
      <AboutSection />
      <OurWorks />
      <JoinUs />
      <Testimonial />
      <NewsSection />
      <Footer />
    </div>
  );
}

export default Home;
