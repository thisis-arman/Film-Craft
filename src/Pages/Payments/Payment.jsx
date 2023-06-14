import { useLoaderData } from "react-router-dom";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import Checkout from "./Checkout";


const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_PUBLISHED_KEY);


const Payment = () => {
    const item = useLoaderData()
    const Price = parseFloat(item.Price.toFixed(2));
    console.log(Price)
    console.log(item)
    return (
        <div className="w-full bg-slate-100 h-full">
      <h3 className="text-center mt-20 text-3xl font-bold text-purple-500 ">
        Please Proceed to Payment
      </h3>
      <div className="max-w-3xl mx-auto my-32 bg-white py-10 px-16">
        <Elements stripe={stripePromise}>
          <Checkout Price={Price} cart={item} />
        </Elements>
      </div>
    </div>
    );
};

export default Payment;