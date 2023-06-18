import { memo, useState } from "react"

import { BsCircle } from "react-icons/bs";
import { MdVideoLibrary } from "react-icons/md";
import { FaBookOpen } from "react-icons/fa";
import { RiTranslate } from "react-icons/ri";
import { IoLanguage } from "react-icons/io5";

const ServiceDetails = [
    {
        text: "Audio and Video Production",
        icon_source: MdVideoLibrary
    },
    {
        text: "Language Research",
        icon_source: IoLanguage
    },
    {
        text: "Publication Services",
        icon_source: FaBookOpen
    },
    {
        text: "Translation Services",
        icon_source: RiTranslate
    }
];


function DonateForm() {
    // let [giveTowards, setGivetowards] = useState("");

    return (
        <>
            <h3 className="mt-6 text-sm leading-6 font-semibold">Where Would You Like To Give:</h3>
            <section className="flex flex-row gap-14 justify-evenly">
                {

                    ServiceDetails.map((service, index) => {
                        let serviceCard;
                        typeof service.icon_source === "function" ?
                            serviceCard = <ServiceCard key={index} text={service.text} icon_source={<service.icon_source size={36} />} />
                            :
                            serviceCard = <ServiceCard key={index} text={service.text} icon_source={service.icon_source} />

                        return serviceCard;
                    }
                    )
                }
            </section>
        </>
    )
}

export default DonateForm




const ServiceCard = memo(function ServiceCard({ text, icon_source, onCardClicked }) {

    console.log("Type: ", typeof icon_source, icon_source);

    const [isCardClicked, setIsCardClicked] = useState(false);

    return (
        <div className="w-[7.875rem] px-2 pb-4 relative rounded-[0.25rem] border-[1px] border-greengray-500"
            onClick={() => {
                setIsCardClicked(oldState => !oldState);
                onCardClicked(text);
            }} >

            <div className={"w-5 h-5 rounded-full border-2" + isCardClicked ? "bg-yellowy-900 border-yellowy-900" : "border-gray-500"}></div>
            <div className="mt-5 m-auto w-9 h-9">
                {
                    typeof icon_source === "object" ? icon_source
                        :
                        <img className="object-contain" src={icon_source} alt="service icon" />
                }
            </div>
            <h3 className="mt-5 text-center text-xs text-greengray-900 font-bold">{text}</h3>
        </div>
    )

}, []);