
import { memo } from "react";
import { BsChevronLeft } from "react-icons/bs";
import { Link } from "react-router-dom";



const DonateHeader = memo(function DonateHeader() {
  return (
    <>
      <Link to="/">
        <h3 className="text-greengray-100 font-semibold flex items-center gap-3">
          <BsChevronLeft size={20} />
          Back To Home
        </h3>
      </Link>
      <header className="flex flex-col gap-3 px-10 mt-8 text-center">
        <h3 className="text-center text-darkishtext-100 text-[1.75rem] leading-10 font-bold" > Make a Difference Today </h3>
        <p className="text-sm font-normal text-[#001e16cc]">Lorem ipsum dolor sit amet consectetur adipescent elit dolor posuere vel venenatis eusit massa volutpat. </p>
      </header>
    </>
  )
})

export default DonateHeader