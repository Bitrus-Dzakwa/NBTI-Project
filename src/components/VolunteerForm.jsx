import { memo, useCallback } from "react"



const VolunteerForm = memo(function VolunteerForm() {

  const OnFormSubmit = useCallback(
    (e) => {
      console.log("[Volunteer Form Submitted]:", e);
      e.preventDefault();
    },
    []);


  return (
    <>
      <h3 className="text-xl leading-6 text-darkishtext-100 font-normal mt-[1.875rem]">Please fill the Form</h3>
      <section className="mt-5">
        <form className="flex flex-col gap-5" action="" method="post">

          <div className="w-full">
            <label className="text-base text-darkishtext-100" id="fullname">Full Name</label> <br />
            <input className="w-full rounded-md mt-2 py-2 px-4 bg-[#103f021a]"
              type="text" name="fullname" id="fullname"
              placeholder="Full name goes here"
            />
          </div>

          <div className="w-full">
            <label className="text-base text-darkishtext-100" id="email">Email</label> <br />
            <input className="w-full rounded-md mt-2  py-2 px-4 bg-[#103f021a]"
              type="text" name="email" id="email"
              placeholder="e.g YourEmail@gmail.com"
            />
          </div>

          <div className="w-full">
            <label className="text-base text-darkishtext-100" id="phone_number">Phone Number</label> <br />
            <input className="w-full rounded-md mt-2 py-2 px-4 bg-[#103f021a]"
              type="text" name="phone_number" id="phone_number"
              placeholder="Mobile Number e.g +234812345678"
            />
          </div>

          <div className="w-full">
            <label className="text-base text-darkishtext-100" id="skills">Skills</label> <br />
            <input className="w-full h-12 max-h-14 rounded-md mt-2 py-2 px-4 bg-[#103f021a]"
              type="text" name="skills" id="skills"
              placeholder="Skills e.g Event-Center-Sourcing, Cold-Emailing, etc."
            />
          </div>

          <div className="w-full">
            <label className="text-base text-darkishtext-100" id="volunteer_area">Area Volunteering</label> <br />
            <select className="w-full rounded-md mt-2 py-2 px-4 bg-[#103f021a]"
              type="text" name="volunteer_area" id="volunteer_area"
              placeholder="Full name goes here"
            >
              <option>Event Setting</option>
              <option>Outreaches</option>
              <option>Translation (Text)</option>
              <option>Translation (Audio)</option>
            </select>
          </div>

          <div className="w-full">
            <label className="text-base text-darkishtext-100" id="availability">Availability</label> <br />
            <textarea className="w-full rounded-md mt-2 py-2 px-4 bg-[#103f021a]"
              placeholder="Explain your availability" cols={6} autoComplete="true" autoCorrect="true" autoSave="true"
            />
          </div>

          <button className="mt-6 mx-auto max-w-sm w-80 py-4 px-4 text-center bg-[#475443] text-white text-xl leading-6"
            type="submit" value="Volunteer Now" onSubmit={OnFormSubmit}
          >
            Volunteer Now
          </button>

        </form>

      </section>

    </>
  )
})

export default VolunteerForm

/*
import ReactCountryFlag from "react-country-flag"

<div>
            <ReactCountryFlag countryCode="US" />

            <ReactCountryFlag
                className="emojiFlag"
                countryCode="US"
                style={{
                    fontSize: '2em',
                    lineHeight: '2em',
                }}
                aria-label="United States"
            />

            <ReactCountryFlag countryCode="US" svg />

            <ReactCountryFlag
                countryCode="US"
                svg
                style={{
                    width: '2em',
                    height: '2em',
                }}
                title="US"
            />

            <ReactCountryFlag
                countryCode="US"
                svg
                cdnUrl="https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/3.4.3/flags/1x1/"
                cdnSuffix="svg"
                title="US"
            />
        </div>
*/