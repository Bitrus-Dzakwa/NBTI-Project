import VolunteerPageIMG from "../assets/volunteer-page-img.png";
import VolunteerForm from "./VolunteerForm";
import VolunteerHeader from "./VolunteerHeader";

function VolunteerSection() {
  return (
    <div className="flex overflow-hidden">
      <section className="w-2/5 hidden md:block">
        <img
          src={VolunteerPageIMG}
          alt="Generic Image of people holding hands"
        />
      </section>

      <section className="pt-10 px-5 md:px-[3.75rem]">
        <VolunteerHeader />
        <VolunteerForm />
      </section>
    </div>
  );
}

export default VolunteerSection;
