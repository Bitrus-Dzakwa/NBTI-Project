import DonatePageIMG from "../assets/Donate-page-img.png";
import DonateForm from "./DonateForm";
import DonateHeader from "./DonateHeader";

function DonateSection() {
  return (
    <div className="flex justify-center">
      <section className="pt-5 md:pt-10 px-5 md:px-[3rem] overflow-hidden">
        <DonateHeader />
        <DonateForm />
      </section>

      <div className="w-[45%] bg-donate h-[1024px] bg-cover bg-center bg-no-repeat hidden lg:block">
        {/* <div className="bg-donate w-full h-[1024px] bg-contain bg-no-repeat"></div> */}
        {/* <img src={DonatePageIMG} alt="Generic Image of people holding hands" /> */}
      </div>
    </div>
  );
}

export default DonateSection;
