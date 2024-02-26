"use client"

import { useState, useEffect } from "react";
import {loadStripe} from '@stripe/stripe-js';
import {EmbeddedCheckoutProvider, EmbeddedCheckout} from '@stripe/react-stripe-js';
import Helpers from "@/app/helpers/functions";

import Header from "@/app/components/header/header";
import About from "@/app/components/about/about";
import Contact from "@/app/components/contact/contact";
import Faq from "@/app/components/faq/faq";
import Footer from "@/app/components/footer/footer";

const environment = Helpers.getEnviourment()
const public_key=(environment == 'true')?process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY_LIVE:process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY_TEST;
const backend_url=(environment == 'true')?process.env.NEXT_PUBLIC_BACKEND_URL_LIVE:process.env.NEXT_PUBLIC_BACKEND_URL_TEST;
const stripePromise = loadStripe(public_key);

export default function Payment() {

    const [clientSecret, setClientSecret] = useState('');

    useEffect(() => {
        // Create a Checkout Session as soon as the page loads
        const fetchData = async () => {
            try {
                const response = await fetch(backend_url + "stripe", {
                    method: "POST",
                });

                if (!response.ok) {
                    throw new Error("Look like your dont have stable internet! please try again");
                }

                const data = await response.json();
                setClientSecret(data.clientSecret);
            } catch (error) {
                console.error("Error fetching data:", error);
                alert("Look like your dont have stable internet! please try again");
            }
        };

        const timeout = setTimeout(() => {
            fetchData();
        }, 0);
        return () => {
            clearTimeout(timeout);
        }
    }, []);

    return(
        <>
            <Header/>
            <br/>
            <div id="checkout">
                {clientSecret && (
                    <EmbeddedCheckoutProvider
                        stripe={stripePromise}
                        options={{clientSecret}}
                    >
                        <EmbeddedCheckout />
                    </EmbeddedCheckoutProvider>
                )}
            </div>
            <br/>
            <About/>
            <Contact/>
            <Faq/>
            <Footer/>
        </>
    )
}