import { memo, useCallback } from "react"



const VolunteerForm = memo(function VolunteerForm() {

  const OnFormSubmit = useCallback(
    (e) => {
      console.log(e);
      e.preventDefault();
    },
    [])


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
              placeholder="Full name goes here"
            />
          </div>

          <div className="w-full">
            <label className="text-base text-darkishtext-100" id="phone_number">Phone Number</label> <br />
            <input className="w-full rounded-md mt-2 py-2 px-4 bg-[#103f021a]"
              type="text" name="phone_number" id="phone_number"
              placeholder="Full name goes here"
            />
          </div>

          <div className="w-full">
            <label className="text-base text-darkishtext-100" id="skills">Skills</label> <br />
            <input className="w-full h-12 max-h-14 rounded-md mt-2 py-2 px-4 bg-[#103f021a]"
              type="text" name="skills" id="skills"
              placeholder="Full name goes here"
            />
          </div>

          <div className="w-full">
            <label className="text-base text-darkishtext-100" id="area">Area Volunteering</label> <br />
            <select className="w-full rounded-md mt-2 py-2 px-4 bg-[#103f021a]"
              type="text" name="area" id="area"
              placeholder="Full name goes here"
            >
              <option></option>
              <option></option>
              <option></option>
            </select>
          </div>

          <div className="w-full">
            <label className="text-base text-darkishtext-100" id="availability">Availability</label> <br />
            <textarea className="w-full rounded-md mt-2 py-2 px-4 bg-[#103f021a]"
            placeholder="Explain your availability" cols={6} autoComplete="true" autoCorrect="true" autoSave="true"
             />
          </div>


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