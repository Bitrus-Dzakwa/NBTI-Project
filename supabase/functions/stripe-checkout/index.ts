// Follow this setup guide to integrate the Deno language server with your editor:
// https://deno.land/manual/getting_started/setup_your_environment
// This enables autocomplete, go to definition, etc.

import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "supabase";
import Stripe from 'stripe';




console.log("Hello from Functions!");
console.log("CHECKOUT: ", Deno.env.get('STRIPE_CHECKOUT_SECRET_KEY'));

// Create a single supabase client for interacting with your database
const supabase = createClient(Deno.env.get('SUPABASE_URL'), Deno.env.get('SUPABASE_ANON_KEY'), {
  global: {
    headers: {
      'x-nbti-func-key': Deno.env.get('CHECKOUT_TABLE_AUTH_KEY') || "",
    }
  }
});

const stripe = new Stripe(Deno.env.get('STRIPE_CHECKOUT_SECRET_KEY'), {
  apiVersion: '2022-11-15',
  httpClient: Stripe.createFetchHttpClient()
});



serve(async (req: Request) => {

  // const stripe_payload: IGuestUserDonationInfo = {
  //   amount: 20,
  //   currency: "usd",
  //   details: "Bible Translation from English to Swahili",
  //   is_reccuring_donation: false,
  //   sponsored_services: "Bible Translation",
  //   subscription: null
  // }

  const { stripe_payload, name } = await req.json();
  console.log("Name:", name,"\nREQ: ", stripe_payload);

  if (Object.keys(stripe_payload).length === 0) return; // end early if no payload sent

  const checkout_url = await Create__StripeCheckoutSession(stripe_payload, stripe_payload.is_reccuring_donation);

  const data = {
    message: checkout_url
  }

  console.log(data);

  return new Response(
    JSON.stringify(data),
    { headers: { "Content-Type": "application/json" } },
  )
})


interface IGuestUserDonationInfo {
  sponsored_services: string,
  details: string,
  currency: string,
  amount: number,
  is_reccuring_donation: boolean,
  subscription: {
    interval: "day" | "week" | "month" | "year" | "",
    freq: number
  } | null,

}

async function Create__StripeCheckoutSession(donation_info: IGuestUserDonationInfo, is_reccuring_payment: boolean) {
  let checkout_payload;

  if (is_reccuring_payment) {

    checkout_payload = {
      mode: "subscription",
      line_items: [
        {
          quantity: 1,
          price_data: {
            unit_amount: donation_info.amount,
            product_data: {
              name: donation_info.sponsored_services,
              description: donation_info.details,
            },
            currency: donation_info.currency,
            recurring: {
              interval: donation_info.subscription!.interval,
              interval_count: donation_info.subscription!.freq
            }
          }
        }
      ],
      success_url: "https://localhost:5574/thank-you",
    }

  } else {

    checkout_payload = {

      mode: "payment",
      line_items: [
        {
          quantity: 1,
          price_data: {
            unit_amount: donation_info.amount,
            product_data: {
              name: donation_info.sponsored_services,
              description: donation_info.details,
            },
            currency: donation_info.currency,
          }
        }
      ],
      success_url: "https://localhost:5574/thank-you",
    }
  }

  const sessionObject = await stripe.checkout.sessions.create(checkout_payload, { timeout: 5000 });
  return sessionObject.url || sessionObject.id

}

// checkout_payload.line_items.price_data.recurring = {
//   interval: donation_info.subscription!.interval,
//   interval_count: donation_info.subscription!.freq
// }
// To invoke:
// curl -i --location --request POST 'http://localhost:54321/functions/v1/' \
//   --header 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZS1kZW1vIiwicm9sZSI6ImFub24iLCJleHAiOjE5ODM4MTI5OTZ9.CRXP1A7WOeoJeXxjNni43kdQwgnWNReilDMblYTn_I0' \
//   --header 'Content-Type: application/json' \
//   --data '{"name":"Functions"}'


// Follow this setup guide to integrate the Deno language server with your editor:
// https://deno.land/manual/getting_started/setup_your_environment
// This enables autocomplete, go to definition, etc.

// import { serve } from 'std/server'

// // Import via bare specifier thanks to the import_map.json file.
// import Stripe from 'stripe'

// const stripe = new Stripe(Deno.env.get('STRIPE_API_KEY') as string, {
//   // This is needed to use the Fetch API rather than relying on the Node http
//   // package.
//   apiVersion: '2022-11-15',
//   httpClient: Stripe.createFetchHttpClient(),
// })
// // This is needed in order to use the Web Crypto API in Deno.
// const cryptoProvider = Stripe.createSubtleCryptoProvider()

// console.log('Hello from Stripe Webhook!')

// serve(async (request) => {
//   const signature = request.headers.get('Stripe-Signature')

//   // First step is to verify the event. The .text() method must be used as the
//   // verification relies on the raw request body rather than the parsed JSON.
//   const body = await request.text()
//   let receivedEvent
//   try {
//     receivedEvent = await stripe.webhooks.constructEventAsync(
//       body,
//       signature!,
//       Deno.env.get('STRIPE_WEBHOOK_SIGNING_SECRET')!,
//       undefined,
//       cryptoProvider
//     )
//   } catch (err) {
//     return new Response(err.message, { status: 400 })
//   }
//   console.log(`🔔 Event received: ${receivedEvent.id}`)
//   return new Response(JSON.stringify({ ok: true }), { status: 200 })
// })








// import Stripe from 'stripe';
// const stripe = new Stripe('sk_test_...');

// const customer = await stripe.customers.create({
//   email: 'customer@example.com',
// });

// console.log(customer.id);