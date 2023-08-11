
import { useCallback, useRef, useState, useMemo } from "react"
import { SupabaseFunctions } from "../db/supabase";


import { FaChevronRight } from "react-icons/fa";
import StripeLogoPNG from "../assets/stripe.png";
import OnItemSelectPNG from "../assets/selected.png";

import { ReactComponent as LanguageResearchSVG } from "../assets/language-img.svg";
import { ReactComponent as PUblicationSVG } from "../assets/publication-img.svg";
import { ReactComponent as TranslationSVG } from "../assets/translate-img.svg";
import { ReactComponent as AudioVideoSVG } from "../assets/audio-video-img.svg";
import { ReactComponent as TrainingCapacityBuildSVG } from "../assets/training-capacity-build-img.svg";
import { ReactComponent as ConsultationSVG } from "../assets/consultation-service-img.svg";
import { ReactComponent as CommunityOutreachSVG } from "../assets/community-outreach-img.svg";
import { ReactComponent as VolunteerOppurtunitySVG } from "../assets/volunteer-oppurtunity-img.svg";

import { ReactComponent as OnItemSelectSVG } from "../assets/selected.svg";





const ServiceDetails = [
    {
        text: "Language Research", icon_source: LanguageResearchSVG
    }, {
        text: "Publication Services", icon_source: PUblicationSVG
    }, {
        text: "Translation Services", icon_source: TranslationSVG
    }, {
        text: "Audio and Video Production", icon_source: AudioVideoSVG
    }, {
        text: "Training and Capacity Building", icon_source: TrainingCapacityBuildSVG
    }, {
        text: "Consultation Services", icon_source: ConsultationSVG
    }, {
        text: "Community Outreach", icon_source: CommunityOutreachSVG
    }, {
        text: "Volunteer Oppurtunities", icon_source: VolunteerOppurtunitySVG
    },
];


const DonationScheduleList =
    [
        {
            repr: "ONE TIME",
            interval: "",
            freq: 0
        },
        {
            repr: "MONTHLY",
            interval: "month",
            freq: 1
        },
        {
            repr: "QUARTERLY",
            interval: "month",
            freq: 4
        },
        {
            repr: "ANNUALLY",
            interval: "year",
            freq: 1
        }
    ];
// The interval at which to charge subscriptions on this plan. 
// Available options are hourly, daily, weekly, monthly, quarterly, biannually (every 6 months) and annually

const StripeSupportedCurrencies = ["NGN", "USD", "EUR", "GBP", "CND"];
const PaystackSupportedCurrencies = ["NGN", "USD", "RND"];
const Currency__To__DonationAmount__Map = {
    "NGN": [1000, 5000, 20000, 50000, 100000, 200000, 500000, 1000000],
    "RND": [1000, 5000, 20000, 50000, 100000, 200000, 500000, 1000000],
    "USD": [1, 5, 10, 20, 50, 100, 200, 500],
    "EUR": [1, 5, 10, 20, 50, 100, 200, 500],
    "GBP": [1, 5, 10, 20, 50, 100, 200, 500],
    "CAD": [1, 5, 10, 20, 50, 100, 200, 500],
}



const initialFormState = {
    amount: 100000, // Stripe enforces a $0.5 minimum transaction amount, (amount in cents).
    currency: {
        repr: "NGN",
        symbol: "NGN"
    },
    subscription: {
        repr: "",
        interval: "",
        freq: 1
    }
}


function DonateForm() {
    const DonationFormState = useRef(initialFormState);

    const [paymentProcessor, updatePaymentProcessor] = useState("paystack");
    const [selectedServices, setSelectedServices] = useState(Array(ServiceDetails.length));
    const [donationSchedule, setDonationSchedule] = useState(Array(DonationScheduleList.length).fill(false));
    const [donationAmount, setDonationAmount] = useState(Array(Currency__To__DonationAmount__Map["NGN"].length + 1).fill(false));
    const [currency, setCurrency] = useState(initialFormState.currency);


    const OnPaymentProcessorChange = useCallback(() => {
        (paymentProcessor === "paystack") ?
            updatePaymentProcessor(() => "stripe")
            :
            updatePaymentProcessor(() => "paystack")
    }, [paymentProcessor]);



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



    const OnDonationFrequencyItemClick = useCallback((item_id, schedule) => {
        donationSchedule.fill(false);
        donationSchedule[item_id] = true;
        setDonationSchedule(() => [...donationSchedule]);
        DonationFormState.current.subscription = schedule;
        console.log("Form State [Freq]: ", DonationFormState);
    }, [donationSchedule, setDonationSchedule, DonationFormState]);



    const OnDonationAmountSelect = useCallback((item_id, amount) => {
        donationAmount.fill(false);
        if (item_id < donationAmount.length - 1) donationAmount[item_id] = true;
        setDonationAmount(() => [...donationAmount]);
        DonationFormState.current.amount = amount * 100;
        console.log("Form State [Amount]: ", DonationFormState);
    }, [donationAmount, setDonationAmount, DonationFormState]);



    const OnCustomDonationAmountChange = useCallback((event) => {
        const text = event.target.value.trim();
        console.log("EvenT:", text, "<>", currency);
        if (!text.match("^[0-9,]+$")) {
            event.target.value = PriceFormat(DonationFormState.current.amount / 100, currency.symbol).match("[0-9,]+$")[0];
            return;
        }
        // console.log("PASSTHROUGH: ", text);
        const new_amount = parseInt(text.replaceAll(",", ""));
        const display_price = PriceFormat(new_amount, currency.symbol).match("[0-9,]+$")[0];
        DonationFormState.current.amount = new_amount * 100;
        event.target.value = display_price;
        console.log("display_price: ", display_price);
    }, [DonationFormState, currency])



    async function OnDonationFormSubmit() {
        // const Guest_User_Donation_Info = {};
        console.log("SUBMITTING FORM =================");
        // interface IGuestUserDonationInfo {
        //   sponsored_services: string,
        //   details: string,
        //   currency: string,
        //   amount: number,
        //   is_reccuring_donation: boolean,
        //   subscription: {
        //     interval: "day" | "week" | "month" | "year",
        //     freq: number
        //   } | null,

        // }
        let sponsored_services = "Donation towards "
        let details = "A detailed list of donation items";

        for (const service of selectedServices) {
            if (service === undefined) continue;
            console.log("Service: ", service);
            sponsored_services += service + ", ";
        }

        console.log({
            ...DonationFormState.current,
            currency: DonationFormState.current.currency.symbol,
            sponsored_services: sponsored_services,
            details: details,
            is_reccuring_donation: DonationFormState.current.subscription.interval === "" ? false : true
        });
        // return; 
        const { error, data } = await Create__StripeCheckout({
            ...DonationFormState.current,
            currency: currency.symbol,
            sponsored_services: sponsored_services,
            details: details,
            is_reccuring_donation: DonationFormState.current.subscription.interval === "" ? false : true
        });

        if (data) {
            console.log("Function - Call - Data: ", data);
            window.location = data.message;
        }
        else {
            console.log("Function - Call - Error: ", error);
        }
    }

    return (
        <>
            <h3 className="mt-6 text-sm leading-6 font-semibold text-darkishtext-100">Where Would You Like To Give:</h3>
            <section className="grid grid-cols-2 md:grid md:grid-cols-4 gap-4 md:px-0 md:flex-row md:gap-14 justify-evenly">
                {

                    ServiceDetails.map((service, index) =>
                        <ServiceCard
                            key={index} id={index} text={service.text} icon_source={service.icon_source} onCardClicked={OnServiceCardClicked}
                        />
                    )
                }
            </section>

            <section className="mt-5 flex flex-col md:flex-row gap-x-14">

                <section className="mt-5 md:mt-0 flex flex-col gap-y-1 md:order-none order-2">
                    <label className="text-sm leading-[22px] font-semibold text-darkishtext-100" htmlFor="currency">Choose Currency:</label>
                    <select className="appearance-none md:mr-6 p-[10px] border-[1px] rounded-md border-greengray-500 bg-dropdown_chevron bg-no-repeat bg-right text-greengray-900 text-sm leading-normal font-semibold"
                        name="currency" id="currency" defaultValue={currency.symbol}
                        onChange={(event) => {
                            const new_currency = { repr: event.target.value, symbol: event.target.value };
                            setCurrency(() => (new_currency));
                            DonationFormState.current.currency = new_currency;
                            console.log("NEW-CURRENCY: ", new_currency, DonationFormState.current);
                        }}
                    >
                        {
                            paymentProcessor === "paystack"
                                ?
                                PaystackSupportedCurrencies.map((currency, index) => <option key={index} value={currency}>{currency}</option>)
                                :
                                StripeSupportedCurrencies.map((currency, index) => <option key={index} value={currency}>{currency}</option>)

                        }
                    </select>

                </section>

                <section className="flex flex-col">
                    <label className="text-sm leading-[22px] font-semibold text-darkishtext-100" htmlFor="frequency">How Often:</label>
                    <section id="frequency" className="grid grid-cols-2 md:grid md:grid-cols-4 max-[350px]:gap-x-0 gap-x-4 gap-y-0 md:gap-x-3 md:px-0 md:flex-row  justify-evenly">
                        {
                            DonationScheduleList.map((schedule, index) => (
                                <DonationFrequencyRadioItem key={index}
                                    item_id={index}
                                    schedule={schedule}
                                    is_selected={donationSchedule[index]}
                                    OnItemClick={OnDonationFrequencyItemClick} />
                            ))
                        }
                    </section>
                </section>

            </section>


            <h3 className="text-sm font-semibold text-darkishtext-100 mb-1 mt-5">I Will Like To Give</h3>
            <section className="grid grid-cols-2 md:grid md:grid-cols-4 grid-flow-row gap-4 md:px-0 md:flex-row md:gap-6 justify-evenly">
                {
                    Currency__To__DonationAmount__Map[currency.repr].map((amount, index) => (
                        <DonationAmountRadioItem key={index}
                            item_id={index}
                            amount={amount}
                            currency={currency.symbol}
                            is_selected={donationAmount[index]}
                            OnItemClick={OnDonationAmountSelect} />
                    ))
                }
                <div className="group min-h-[40px] flex flex-row rounded-md border-[1px] border-greengray-900 focus-within:border-yellowy-900 items-center justify-between">
                    <span className={`w-1/4 h-full flex justify-center items-center text-base font-bold text-greengray-900 bg-greengray-200 rounded-l group-focus-within:bg-yellowy-900`}>
                        {currency.symbol}
                    </span>
                    <input className="peer w-3/4 h-full bg-[#70707021] text-[#232723] text-base font-bold text-center border-l-0 outline-0 placeholder:text-xs"
                        type="text" placeholder="Enter Amount"
                        onChange={OnCustomDonationAmountChange}
                        onFocus={() => {
                            donationAmount.fill(false);
                            setDonationAmount(() => [...donationAmount]);
                        }}
                    />
                </div>
            </section>



            <h3 className="text-sm font-semibold text-darkishtext-100 mt-5">Pay Via:</h3>

            <section className="inline-flex flex-row items-center mt-1"
                onClick={OnPaymentProcessorChange}
            >
                <div className={`w-6 h-6 mr-1 rounded-full border-2 border-greengray-200 ${paymentProcessor === "stripe" ? "bg-yellowy-900" : ""}`}></div>
                <img src={StripeLogoPNG} alt="Stripe Logo" />
            </section>

            <section className="inline-flex flex-row items-center mt-1 ml-6"
                onClick={OnPaymentProcessorChange}
            >
                <div className={`w-6 h-6 mr-1 rounded-full border-2 border-greengray-200 ${paymentProcessor === "paystack" ? "bg-yellowy-900" : ""}`}></div>
                <img src={StripeLogoPNG} alt="Paystack Logo" />
            </section>



            <hr className="h-[6px] mt-4 border-t-2 px-14 text-greengray-200" />


            <button className="flex justify-center items-center mt-4 mb-14 mx-auto max-w-sm w-72 py-4 px-4 text-center bg-[#475443] text-white text-xl leading-6"
                type="submit" value="Donate Now" onClick={OnDonationFormSubmit}>
                Donate Now
                <FaChevronRight className="inline ml-3" size={20} />
            </button>

        </>
    )
}

export default DonateForm;






async function Create__StripeCheckout(checkout_payload) {

    console.log("Create_Stripe_Checkout Called =================== ");

    return await SupabaseFunctions.invoke('stripe-checkout', {
        body: {
            name: 'donate_form_call',
            stripe_payload: checkout_payload
        }
    });

}


async function Create__PaystackCheckout(checkout_payload) {

    console.log("Create_Paystack_Checkout Called =================== ");

    return await SupabaseFunctions.invoke('paystack-checkout', {
        body: {
            name: 'donate_form_call',
            paystack_payload: checkout_payload
        }
    });

}





// const CURRENCY_AMOUNT_REGEX = RegExp(`^[0-9,]+$`);
const PriceFormat = (amount, currency) => (new Intl.NumberFormat(undefined, {
    style: "currency",
    currency: currency,
    maximumFractionDigits: 0,
})).format(amount);


function DonationFrequencyRadioItem({ item_id, is_selected, schedule, OnItemClick }) {
    // console.log("Freq State: ", is_selected);
    return (
        <div className={
            `p-3 flex flex-row flex-wrap gap-2 rounded-[5px] border-[1px] border-transparent items-center cursor-pointer hover:border-greengray-900 
                ${is_selected ? "bg-greengray-900" : ""}
            `}
            onClick={() => OnItemClick(item_id, schedule)}
        >
            {
                is_selected ?
                    <img src={OnItemSelectPNG} />
                    :
                    <div className={` w-5 h-5 rounded-full border-2 border-greengray-900 ${is_selected ? "bg-yellowy-900 border-greengray-100" : ""}`}></div>
            }
            <h3 className={`text-sm leading-normal font-bold text-[#707070] ${is_selected ? "text-white" : ""} `}>{schedule.repr}</h3>
        </div>
    )
}


function DonationAmountRadioItem({ item_id, is_selected, amount, currency, OnItemClick }) {
    // console.log("Amount State: ", is_selected);
    return (
        <div className={
            `px-[8px] py-[15px] flex flex-row flex-wrap gap-2 rounded-md border-[1px] border-greengray-900 items-center justify-start md:justify-between cursor-pointer transition-all
                ${is_selected ? "bg-greengray-900 hover:scale-[1.02]" : "hover:bg-greengray-200 "}
        `}
            onClick={() => OnItemClick(item_id, amount)}
        >
            {
                is_selected ?
                    <img src={OnItemSelectPNG} />
                    :
                    <div className="w-5 h-5 rounded-full border-2 border-greengray-900"></div>
            }
            <h3 className={`text-sm leading-normal font-bold text-greengray-900 ${is_selected ? "text-white" : ""} `}>{PriceFormat(amount, currency)}</h3>
        </div >
    )
}


function ServiceCard({ id, text, icon_source, onCardClicked }) {

    const [isCardClicked, setIsCardClicked] = useState(false);

    return (
        <div className={
            `relative flex flex-col justify-center items-center gap-5 pt-5 px-[10px] pb-4 border text-center border-greengray-900 rounded-md shadow-xl cursor-pointer hover:border-transparent hover:scale-105 transition-all
            ${isCardClicked ? " bg-greengray-900" : "hover:bg-[#FFFBF2] "}
        `}
            onClick={() => {
                setIsCardClicked(oldState => !oldState);
                onCardClicked(id, text);
            }} >

            {
                isCardClicked ?
                    <OnItemSelectSVG className="absolute right-1 top-1 w-5 h-5 hover:bg-greengray-900 hover:text-greengray-900" />
                    :
                    <div className={`absolute right-1 top-1 w-5 h-5 rounded-full border-2 hover:border-greengray-900 ${isCardClicked ? "bg-yellowy-900 border-greengray-100" : "border-greengray-500"}`}></div>
            }

            {/* LOC below is assisted by a custom css rule in [index.css] */}
            {icon_source({ id: "donation-service-card", fill: isCardClicked ? "white" : "#475443" })}

            <p className={` max-w-[106px] text-xs leading-normal font-bold md:font-semibold ${isCardClicked ? " text-white " : "text-greengray-900 "} `} dangerouslySetInnerHTML={{ __html: text }}>
            </p>
        </div>
    )
}
