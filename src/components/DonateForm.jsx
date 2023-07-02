
import { useCallback, useRef, useState } from "react"
import { SupabaseFunctions } from "../db/supabase";

import { MdVideoLibrary } from "react-icons/md";
import { FaBookOpen, FaChevronRight } from "react-icons/fa";
import { RiTranslate } from "react-icons/ri";
import { IoLanguage } from "react-icons/io5";

import StripeLogoPNG from "../assets/stripe.png";
// import DropDownArrowPNG from "../assets/arrow-down.png";


const ServiceDetails = [
    {
        text: "Audio and Video <br/> Production", icon_source: MdVideoLibrary
    }, {
        text: "Language <br/> Research", icon_source: IoLanguage
    }, {
        text: "Publication <br/> Services", icon_source: FaBookOpen``
    }, {
        text: "Translation <br/> Services", icon_source: RiTranslate
    }
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


const Currency__To__DonationAmount__Map = {
    "NGN": [1000, 5000, 20000, 50000, 100000, 200000, 500000, 1000000],
    "USD": [1, 5, 10, 20, 50, 100, 200, 500],
    "EUR": [1, 5, 10, 20, 50, 100, 200, 500],
    "GBP": [1, 5, 10, 20, 50, 100, 200, 500],
    "CND": [1, 5, 10, 20, 50, 100, 200, 500],
}

const SupportedCurrencies = ["NGN", "USD", "EUR", "GBP", "CND"];


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

function DonateForm() {
    const DonationFormState = useRef(initialFormState);

    const [selectedServices, setSelectedServices] = useState(Array(ServiceDetails.length));
    const [donationSchedule, setDonationSchedule] = useState(Array(DonationScheduleList.length).fill(false));
    const [donationAmount, setDonationAmount] = useState(Array(Currency__To__DonationAmount__Map["NGN"].length + 1).fill(false));
    const [currency, setCurrency] = useState(initialFormState.currency);


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
            sponsored_services: sponsored_services.replaceAll("<br/>", ""),
            details: details,
            is_reccuring_donation: DonationFormState.current.subscription.interval === "" ? false : true
        });
        // return; 
        const { error, data } = await Create__StripeCheckout({
            ...DonationFormState.current,
            currency: currency.symbol,
            sponsored_services: sponsored_services.replaceAll("<br/>", ""),
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

            <section className="mt-5 flex flex-col md:flex-row gap-x-16">

                <section className="mt-5 md:mt-0 flex flex-col gap-y-1 md:order-none order-2">
                    <label className="text-sm leading-[22px] font-semibold text-darkishtext-100" htmlFor="currency">Choose Currency:</label>
                    <select className="appearance-none p-[10px] border-[1px] rounded-md border-greengray-500 bg-dropdown_chevron bg-no-repeat bg-right text-greengray-900 text-sm leading-normal font-semibold"
                        name="currency" id="currency" defaultValue={currency.symbol}
                        onChange={(event) => {
                            const new_currency = { repr: event.target.value, symbol: event.target.value };
                            setCurrency(() => (new_currency));
                            DonationFormState.current.currency = new_currency;
                            console.log("NEW-CURRENCY: ", new_currency, DonationFormState.current);
                        }}
                    >
                        {
                            SupportedCurrencies.map((currency, index) => <option key={index} value={currency}>{currency}</option>)
                        }
                    </select>

                </section>

                <section className="flex flex-col">
                    <label className="text-sm leading-[22px] font-semibold text-darkishtext-100" htmlFor="frequency">How Often:</label>
                    <section id="frequency" className="grid grid-cols-2 md:grid md:grid-cols-4 gap-x-4 gap-y-0 md:px-0 md:flex-row md:gap-8 justify-evenly">
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
            <section className="grid grid-cols-2 md:grid md:grid-cols-4 gap-4 md:px-0 md:flex-row md:gap-6 justify-evenly">
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
            <section className="flex flex-row items-center mt-1">
                <div className={`w-6 h-6 mr-1 rounded-full border-2 border-greengray-200 bg-yellowy-900`}></div>
                <img src={StripeLogoPNG} alt="Stripe Logo" />
            </section>


            <hr className="h-[6px] mt-4 border-t-2 px-14 text-greengray-200" />


            <button className=" flex justify-center items-center mt-4 mb-14 mx-auto max-w-sm w-80 py-4 px-4 text-center bg-[#475443] text-white text-xl leading-6"
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
            // stripe_payload: {
            //     ...checkout_payload,

            //     // client_ref: 987654321,
            //     // amount: checkout_payload.amount,
            //     // currency: checkout_payload.currency.symbol,
            //     // details: checkout_payload.detai "Bible Translation from English to Yoruba",
            //     // is_reccuring_donation: false,
            //     // sponsored_services: "Bible Translation",
            //     // subscription: null
            // }
        },
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
        <div className="p-3 flex flex-row flex-wrap gap-2 rounded-md border-greengray-900 items-center cursor-pointer"
            onClick={() => OnItemClick(item_id, schedule)}
        >
            <div className={` w-5 h-5 rounded-full border-2 border-greengray-900 ${is_selected ? "bg-yellowy-900 border-greengray-100" : ""}`}></div>
            <h3 className="text-sm leading-normal font-bold text-[#707070]">{schedule.repr}</h3>
        </div>
    )
}


function DonationAmountRadioItem({ item_id, is_selected, amount, currency, OnItemClick }) {
    // console.log("Amount State: ", is_selected);
    return (
        <div className="p-2 md:p-3 flex flex-row flex-wrap gap-2 rounded-md border-[1px] border-greengray-900 items-center justify-start md:justify-between cursor-pointer"
            onClick={() => OnItemClick(item_id, amount)}
        >
            <div className={` hidden md:inline-block w-5 h-5 rounded-full border-2 border-greengray-900 ${is_selected ? "bg-yellowy-900 border-greengray-100" : ""}`}></div>
            <h3 className="text-base font-bold text-greengray-900">{PriceFormat(amount, currency)}</h3>
        </div>
    )
}


function ServiceCard({ id, text, icon_source, onCardClicked }) {

    // console.log("Type: ", typeof icon_source, icon_source);

    const [isCardClicked, setIsCardClicked] = useState(false);

    return (
        <div className="relative flex flex-col justify-center items-center gap-5 pt-5 p-2 border text-center border-greengray-900 rounded-sm bg-white shadow-sm md:mb-0 cursor-pointer hover:scale-95 transition-all"
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

            <p className="font-medium md:font-semibold text-greengray-900" dangerouslySetInnerHTML={{ __html: text }}>
            </p>
        </div>
    )
}
