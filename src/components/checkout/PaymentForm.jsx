import { PaymentElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useState } from "react";
import Skeleton from "../shared/Skeleton";

function PaymentForm({clientSecret, totalAmount}) {
    const stripe = useStripe();
    const elements = useElements();
    const [errorMessage, setErrorMessage] = useState("");

    const handleSubmit = async (event) => {
        event.preventDefault();
        if(!stripe || !elements){
            return;
        }
        const {error: submitError} = await elements.submit(); 

        const {error} = await stripe.confirmPayment({
            elements, clientSecret, confirmParams:{
                return_url: `${import.meta.env.VITE_FRONT_END_URL}/order-confirm`,
            },
        });

        if(error){
            setErrorMessage(error.message);
            return false;
        }
    };

    const paymentElementOptions = {
        layout: "tabs"
    }

    const isLoading = !clientSecret || !stripe || !elements;

    return (
        <form action="" onSubmit={handleSubmit} className="max-w-lg mx-auto p-4">
            <h2 className="text-xl font-semibold mb-4">Payment Information</h2>
            {isLoading ? (
                <Skeleton />
            ) : (
                <>
                    {clientSecret && <PaymentElement options={paymentElementOptions}/>}
                    {errorMessage && <p className="text-red-500 mt-2">{errorMessage}</p>}
                    <button className="text-white mt-4 w-full px-2 py-4 bg-black rounded-md font-bold disabled:opacity-50 disabled:animate-pulse" 
                        disabled={!stripe || isLoading}
                    >
                        {isLoading ? "Processing..." : `Pay ₹${Number(totalAmount).toFixed(2)}`}
                    </button>
                </>
            )}
        </form>
    );
}

export default PaymentForm;