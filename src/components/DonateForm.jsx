import { useCallback, useRef, useState } from "react"

import { MdVideoLibrary } from "react-icons/md";
import { FaBookOpen, FaChevronRight } from "react-icons/fa";
import { RiTranslate } from "react-icons/ri";
import { IoLanguage } from "react-icons/io5";
import StripeLogoPNG from "../assets/stripe.png";

// https://stripe.com/docs/currencies#presentment-currencies
const stripe_supported_currencies = ["USD", "AED", "AFN*", "ALL", "AMD", "ANG", "AOA*", "ARS*", "AUD", "AWG", "AZN", "BAM", "BBD", "BDT", "BGN", "BIF", "BMD", "BND", "BOB*", "BRL*", "BSD", "BWP", "BYN", "BZD", "CAD", "CDF", "CHF", "CLP*", "CNY", "COP*", "CRC*", "CVE*", "CZK", "DJF*", "DKK", "DOP", "DZD", "EGP", "ETB", "EUR", "FJD", "FKP*", "GBP", "GEL", "GIP", "GMD", "GNF*", "GTQ*", "GYD", "HKD", "HNL*", "HTG", "HUF", "IDR", "ILS", "INR", "ISK", "JMD", "JPY", "KES", "KGS", "KHR", "KMF", "KRW", "KYD", "KZT", "LAK*", "LBP", "LKR", "LRD", "LSL", "MAD", "MDL", "MGA", "MKD", "MMK", "MNT", "MOP", "MRO", "MUR*", "MVR", "MWK", "MXN", "MYR", "MZN", "NAD", "NGN", "NIO*", "NOK", "NPR", "NZD", "PAB*", "PEN*", "PGK", "PHP", "PKR", "PLN", "PYG*", "QAR", "RON", "RSD", "RUB", "RWF", "SAR", "SBD", "SCR", "SEK", "SGD", "SHP*", "SLE", "SOS", "SRD*", "STD*", "SZL", "THB", "TJS", "TOP", "TRY", "TTD", "TWD", "TZS", "UAH", "UGX", "UYU*", "UZS", "VND", "VUV", "WST", "XAF", "XCD", "XOF*", "XPF*", "YER", "ZAR", "ZMW"];

const ServiceDetails = [
    {
        text: "Audio and Video Production", icon_source: MdVideoLibrary
    }, {
        text: "Language Research", icon_source: IoLanguage
    }, {
        text: "Publication Services", icon_source: FaBookOpen``
    }, {
        text: "Translation Services", icon_source: RiTranslate
    }
];

const DonationFrequencyList = ["ONE TIME", "MONTHLY", "QUARTERLY", "ANNUALLY"];
const DonationAmountList = [1, 5, 10, 20, 50, 100, 200, 500, 1000]
const initialFormState = {
    amount: 1
}

function DonateForm() {
    const DonationFormState = useRef(initialFormState);

    const [selectedServices, setSelectedServices] = useState(Array(ServiceDetails.length));
    const [donationFrequency, setDonationFrequency] = useState(Array(DonationFrequencyList.length).fill(false));
    const [donationAmount, setDonationAmount] = useState(Array(DonationAmountList.length).fill(false));
    const [currency, setCurrency] = useState({
        repr: "USD",
        symbol: "$"
    });


    const OnServiceCardClicked = useCallback((card_id, text) => {
        if (card_id >= selectedServices.length) return;

        if (selectedServices[card_id] === undefined) {
            selectedServices[card_id] = text;
            setSelectedServices(() => selectedServices);
        } else {
            selectedServices[card_id] = undefined;
            setSelectedServices(() => selectedServices);
        }

        // console.log(card_id, text, "\n", selectedServices);
    }, [selectedServices, setSelectedServices]);


    const OnDonationFrequencyItemClick = useCallback((item_id, text) => {
        donationFrequency.fill(false);
        donationFrequency[item_id] = true;
        setDonationFrequency(() => [...donationFrequency]);
        // console.log(donationFrequency);
    }, [donationFrequency, setDonationFrequency])


    const OnDonationAmountSelect = useCallback((item_id, amount) => {

    });


    function OnDonationFormSubmit() {
        console.log("SUBMITTING FORM =================");
    }

    return (
        <>
            <h3 className="mt-6 text-sm leading-6 font-semibold">Where Would You Like To Give:</h3>
            <section className="grid grid-cols-2 md:grid md:grid-cols-4  gap-4 md:px-0 md:flex-row md:gap-14 justify-evenly">
                {

                    ServiceDetails.map((service, index) => {
                        let serviceCard;
                        typeof service.icon_source === "function" ?
                            serviceCard = <ServiceCard
                                key={index} id={index} text={service.text} icon_source={<service.icon_source size={30} />} onCardClicked={OnServiceCardClicked}
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

            <h3 className="text-sm font-semibold mb-1 mt-5">How Often?</h3>
            <section className="grid grid-cols-2 md:grid md:grid-cols-4  gap-4 md:px-0 md:flex-row md:gap-14 justify-evenly">
                {
                    DonationFrequencyList.map((freq, index) => (
                        <DonationFrequencyRadioItem key={index}
                            item_id={index}
                            text={freq}
                            radio_group_state={donationFrequency}
                            OnItemClick={OnDonationFrequencyItemClick} />
                    ))
                }
            </section>

            <h3 className="text-sm font-semibold mb-1 mt-5">I Will Like To Give</h3>
            <section className="grid grid-cols-2 md:grid md:grid-cols-4  gap-4 md:px-0 md:flex-row md:gap-14 justify-evenly">
                {
                    DonationAmountList.map((amount, index) => (
                        <DonationAmountRadioItem key={index}
                            item_id={index}
                            amount={amount}
                            radio_group_state={donationAmount}
                            OnItemClick={OnDonationAmountSelect} />
                    ))
                }
                <div className=" flex flex-row flex-wrap gap-2 rounded-md border-[1px] border-greengray-900 items-center justify-between">
                    <span className={`w-1/4 bg-greengray-900 rounded-l active:bg-yellowy-900`}>
                        {currency.symbol}
                    </span>
                    <input className="w-3/4 my-3 mr-3 bg-greengray-100 text-base font-bold" 
                    type="number" placeholder="Enter Amount" value={DonationFormState.current.amount}
                        onChange={(amount) => OnDonationAmountSelect(DonationAmountList.length - 1, amount)}
                    />
                </div>
            </section>

            <h3 className="text-sm font-semibold mb-1 mt-5">Pay Via:</h3>
            <div className={`w-6 h-6 mr-2 rounded-full border-2 border-black bg-yellowy-900`}></div>
            <img src={StripeLogoPNG} alt="Stripe Logo" />

            <hr className="h-[3px] mt-4 px-14 text-greengray-200"/>

            <button className="mt-4 mx-auto max-w-sm w-80 py-4 px-4 text-center bg-[#475443] text-white text-xl leading-6"
            type="submit" value="Donate Now" onClick={OnDonationFormSubmit}>
            Donate Now
            <FaChevronRight size={20}/>
          </button>

        </>
    )
}

export default DonateForm;



function DonationFrequencyRadioItem({ item_id, radio_group_state, text, OnItemClick }) {
    console.log("state: ", radio_group_state);
    return (
        <div className="p-3 flex flex-row flex-wrap gap-2 rounded-md border-[1px] border-greengray-900 items-center justify-evenly"
            onClick={() => OnItemClick(item_id, text)}
        >
            <div className={` w-6 h-6 rounded-full border-2 border-black ${radio_group_state[item_id] ? "bg-yellowy-900 border-greengray-100" : ""}`}></div>
            <h3 className="text-base font-bold">{text}</h3>
        </div>
    )
}


function DonationAmountRadioItem({ item_id, radio_group_state, amount, OnItemClick }) {
    console.log("state: ", radio_group_state);
    return (
        <div className="p-3 flex flex-row flex-wrap gap-2 rounded-md border-[1px] border-greengray-900 items-center justify-evenly"
            onClick={() => OnItemClick(item_id, amount)}
        >
            <div className={` w-6 h-6 rounded-full border-2 border-black ${radio_group_state[item_id] ? "bg-yellowy-900 border-greengray-100" : ""}`}></div>
            <h3 className="text-base font-bold">{amount}</h3>
        </div>
    )
}


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
