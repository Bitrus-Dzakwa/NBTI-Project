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
      <NewsSection />
      <Footer />
    </div>
  );
}

export default Home;
