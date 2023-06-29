import DonatePageIMG from "../assets/Donate-page-img.png";
import DonateForm from "./DonateForm";
import DonateHeader from "./DonateHeader";

function DonateSection() {
  return (
    <div className="flex mb-10">
      <section className="pt-5 md:pt-10 px-5 md:px-[3.75rem]">
        <DonateHeader />
        <DonateForm />
      </section>

      <section className="w-[45%] h-full object-cover hidden md:block">
        <img src={DonatePageIMG} alt="Generic Image of people holding hands" />
      </section>
    </div>
  );
}

export default DonateSection;
