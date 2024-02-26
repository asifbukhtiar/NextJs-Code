import {NextResponse} from "next/server";
const stripe = require('stripe')((process.env.NEXT_PUBLIC_ENVIRONMENT == 'false')?process.env.STRIPE_SECRET_KEY_TEST:process.env.STRIPE_SECRET_KEY_LIVE);

export async function POST() {

    const session = await stripe.checkout.sessions.create({
        ui_mode: 'embedded',
        line_items: [
            {
                // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
                price: (process.env.NEXT_PUBLIC_ENVIRONMENT == 'false')?process.env.PRODUCT_ID_TEST:process.env.PRODUCT_ID_LIVE,
                quantity: 1,
            },
        ],
        mode: 'payment',
        // redirect_on_completion: 'never',
        return_url: (process.env.NEXT_PUBLIC_ENVIRONMENT == 'false')?process.env.REDIRECT_TEST+'return?session_id={CHECKOUT_SESSION_ID}':process.env.REDIRECT_LIVE+'return?session_id={CHECKOUT_SESSION_ID}'
    });
    return NextResponse.json({ clientSecret: session.client_secret });
}

