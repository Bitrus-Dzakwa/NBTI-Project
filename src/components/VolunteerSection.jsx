
import VolunteerPageIMG from "../assets/volunteer-page-img.png"

function VolunteerSection() {
  return (
    <div className="flex ">
        <div className="w-2/5">
            <img src={VolunteerPageIMG} alt="Generic Image of people holding hands" />
        </div>
        <div className="px-[3.75rem]">
        </div>
    </div>
  )
}

export default VolunteerSection