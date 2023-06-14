import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useContext, useEffect, useState } from "react";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { AuthContext } from "../../Provider/AuthProvider";


const CheckoutForm = ({cart,Price}) => {
const {user} =useContext(AuthContext)
  const stripe = useStripe()
  const elements =useElements()
  const [axiosSecure] = useAxiosSecure()
  const [clientSecret,setClientSecret] = useState()
  const [error, setError]=useState('')


useEffect(()=>{
  axiosSecure.post('/create-payment-intent',{Price})
  .then(res => {
    console.log(res.formData.clientSecret)
    setClientSecret(res.formData.clientSecret)
  })

},[])



  const handleSubmit=async(event)=>{
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);
    console.log(card,'card')
    
    if (card == null) {
      return;
    }
    const {error, paymentMethod} = await stripe.createPaymentMethod({
      type: 'card',
      card,
    });

    if (error) {
      console.log('[error]', error);
      setError(error.message)
    } else {
      setError('')
      console.log('[PaymentMethod]', paymentMethod);
    }

    const {paymentIntent, error :confirmError} = await stripe.confirmCardPayment(
      clientSecret,
      {
        payment_method: {
          card: card,
          billing_details: {
            name: user?.displayName|| 'anonymous',
            email: user?.email|| 'unknown',
          },
        },
      },
    );

    if(confirmError){
      console.log(confirmError);
    }
    console.log(paymentIntent);



  }
  return (
 <>
    <form onSubmit={handleSubmit}>
    <CardElement
      options={{
        style: {
          base: {
            fontSize: '16px',
            color: '#424770',
            '::placeholder': {
              color: '#aab7c4',
            },
          },
          invalid: {
            color: '#9e2146',
          },
        },
      }}
    />
  <p className="text-red-500">{error}</p>
    <button className="primary-design w-2/3 py-2 mt-12 mx-20" type="submit" disabled={!stripe || !clientSecret}>
      Pay
    </button>
  </form>
 </>
  );
};

export default CheckoutForm;