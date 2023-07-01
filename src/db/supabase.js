// https://supabase.com/docs/reference/javascript/installing
import { createClient } from '@supabase/supabase-js'
// import Stripe from 'stripe';

// Create a single supabase client for interacting with your database
const supabase = createClient(import.meta.env.VITE_SUPABASE_URL, import.meta.env.VITE_SUPABASE_ANON_KEY);

// const stripe = new Stripe('rk_test_51NMhpOEIHfFonhct7wrdIo3rGThcpKDOBFCDFevuXBTUx9kXQIUxaTSZNhWhMZEIDH46uokATsmMoHegALYYRZmN00CIpdPZZu', {
//     apiVersion: '2022-11-15',
//     httpClient: Stripe.createFetchHttpClient()
// });

console.log("REACT - SUPABASE - INIT: ");

// const { data, error } = await supabase.functions.invoke('stripe-checkout', {
//     body: {
//         name: 'NBTI',
//         stripe_payload: {
//             client_ref: 987654321,
//             amount: 90000,
//             currency: "ngn",
//             details: "Bible Translation from English to Yoruba",
//             is_reccuring_donation: false,
//             sponsored_services: "Bible Translation",
//             subscription: null
//         }
//     },
// });


// console.log(data, error);


export const SupabaseFunctions = supabase.functions;

// stripe.checkout.sessions.retrieve("cs_test_a1NKVVyqsXT3CCXN2kf4A5FEaFLyAqqQGJ1V8PCzICp0bsdWaV0dFFfJnw").then(res => {
//     console.log("Retrieved: ", res);
// }).catch(error => {
//     console.log("Retrieve Error: ", error);
// });