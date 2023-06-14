import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useContext, useEffect, useState } from "react";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from 'sweetalert2'


const CheckoutForm = ({cart,Price}) => {
const {user} =useContext(AuthContext)
  const stripe = useStripe()
  const elements =useElements()
  const [axiosSecure] = useAxiosSecure()
  const [clientSecret,setClientSecret] = useState()
  const [error, setError]=useState('')
  const [processing,setProcessing]=useState(false)
  const [transactionId,setTransactionId]=useState('')
const [classes,setClasses]=useState([])
  console.log(Price,'price  ')


  useEffect(()=>{
    fetch('http://localhost:5000/classes')
    .then(res=>res.json())
    .then(data =>setClasses(data))
  },[])

useEffect(()=>{
  axiosSecure.post('/create-payment-intent',{Price})
  .then(res => {
    console.log(res.data.clientSecret)
    setClientSecret(res.data.clientSecret)
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
    setProcessing(true)
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
    setProcessing(false)
    const {classId,image,ClassName,Price,_id}=cart;
    if(paymentIntent.status === 'succeeded'){
      setTransactionId(paymentIntent.id);


      const updatedSeat = classes.map((cls) => {
        if (cls._id === cart.classId) {
          fetch(`http://localhost:5000/updateClass/${cart.classId}`, {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ availableSeats: cls.availableSeats - 1, enrolled: cls.enrolled + 1 }),
          })
            .then((res) => res.json())
            .then((updatedClass) => {
              console.log("Available seats updated in the database:", updatedClass);
            });
        }
      });
      setClasses(updatedSeat);


      // const transactionId = paymentIntent.id;
      // todo 'next staps
      const payment = {
        email: user?.email,
        name: user?.displayName,
        transactionId: paymentIntent.id,
        Price,
        image,
        classId,
        ClassName,
        selectedItemId: _id
      };
      axiosSecure.post("/payments", payment)
      .then((res) => {
        console.log(res.data)
        if (res.data.insertResult.insertedId) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Your payment has been successful",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      })


    }



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
 {error && <p className="text-red-500">{error}</p>}
    <button className="primary-design w-2/3 py-2 mt-12 mx-20" type="submit" disabled={!stripe || !clientSecret || processing}>
      Pay
    </button>
 {transactionId && <p className="text-green-500 mt-8 font-bold mx-10">Transaction Completed !! <br /> Your transactionId:{transactionId}</p>}
  </form>
 </>
  );
};

export default CheckoutForm;