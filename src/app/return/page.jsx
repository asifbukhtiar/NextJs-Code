"use client"
import Header from "@/app/components/header/header";
import {EmbeddedCheckout, EmbeddedCheckoutProvider} from "@stripe/react-stripe-js";
import About from "@/app/components/about/about";
import Contact from "@/app/components/contact/contact";
import Faq from "@/app/components/faq/faq";
import Footer from "@/app/components/footer/footer";
import Image from "next/image";
import paymentSuccess from '../assets/payment_success.png'
import {useEffect, useState} from "react";
import {navigate} from '../helpers/actions'

export default function Return() {

    const [sessionId, setSessionId] = useState('');


    useEffect( () => {
        const urlParams = new URLSearchParams(window.location.search);
        const sessionIdFromUrl = urlParams.get('session_id');

        const checkSession = async ()=>{
            if (!sessionIdFromUrl)
            {
                alert("Invalid sessionId")
                await navigate('/')
            }
            else setSessionId(sessionIdFromUrl)
        }
        const timeout = setTimeout(() => {
            checkSession();
        }, 0);
        return () => {
            clearTimeout(timeout);
        }
    }, []);
    
    return(
        <>
            {
                sessionId?
                    <>
                        <Header/>
                        <br/>
                        <p className="text-center"><Image src={paymentSuccess} alt={"payment-success"} /></p>
                        <br/>
                        <About/>
                        <Contact/>
                        <Faq/>
                        <Footer/>
                    </>
                    :
                    ""
            }
        </>
    )
}