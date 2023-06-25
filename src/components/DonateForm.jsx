import { useCallback, useState } from "react"

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
        icon_source: FaBookOpen``
    },
    {
        text: "Translation Services",
        icon_source: RiTranslate
    }
];


function DonateForm() {
    // let [giveTowards, setGivetowards] = useState("");
    // const [selectedServices, setSelectedServices] = useState(Array(ServiceDetails.length).fill(false));
    // const [selectedServicesIndex, setSelectedServicesIndex] = useState(new Uint8Array(ServiceDetails.length));
    const [selectedServices , setSelectedServices] = useState(Array(ServiceDetails.length));

    const OnServiceCardClicked = useCallback((card_id, text) => {
        if (card_id >= selectedServices.length) return;

        if (selectedServices[card_id] === undefined) {
            selectedServices[card_id] = text;
            setSelectedServices(() => selectedServices);
        } else {
            selectedServices[card_id] = undefined;
            setSelectedServices(() => selectedServices);
        }

        console.log(card_id, text, "\n", selectedServices);

    }, [selectedServices]);

    return (
        <>
            <h3 className="mt-6 text-sm leading-6 font-semibold">Where Would You Like To Give:</h3>
            <section className="grid grid-cols-2 md:grid md:grid-cols-4  gap-4 md:px-0 md:flex-row md:gap-14 justify-evenly">
                {

                    ServiceDetails.map((service, index) => {
                        let serviceCard;
                        typeof service.icon_source === "function" ?
                            serviceCard = <ServiceCard
                                key={index} id={index} text={service.text} icon_source={<service.icon_source size={30}/>} onCardClicked={OnServiceCardClicked}
                            />
                            :
                            serviceCard = <ServiceCard
                                key={index} id={index} text={service.text} icon_source={service.icon_source} onCardClicked={OnServiceCardClicked}
                            />

                        return serviceCard;
                    }
                    )
                }
            </section>
        </>
    )
}

export default DonateForm;




const ServiceCard = function ServiceCard({ id, text, icon_source, onCardClicked }) {

    // console.log("Type: ", typeof icon_source, icon_source);

    const [isCardClicked, setIsCardClicked] = useState(false);

    return (
        <div className="relative flex flex-col justify-center items-center gap-4 pt-5 p-2 border text-center border-greengray-900 rounded-sm bg-white shadow-sm md:mb-0 hover:scale-95"
            onClick={() => {
                setIsCardClicked(oldState => !oldState);
                onCardClicked(id, text);
            }} >
            <div className={` absolute right-1 top-1 w-5 h-5 rounded-full border-2 ${isCardClicked ? "bg-yellowy-900 border-greengray-100" : "border-black-500"}`}></div>

            {
                typeof icon_source === "object" ? icon_source
                    :
                    <img width={30} height={30} className="object-contain" src={icon_source} alt="service icon" />
            }

            <p className="font-medium md:font-semibold text-greengray-900">
                {text}
            </p>
        </div>
    )
}