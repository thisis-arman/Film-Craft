import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";


const PaymentHistory = () => {
  const {user} =useContext((AuthContext))
  const [payments, setPayments]=useState([])


  useEffect(()=>{
    fetch(`http://localhost:5000/payments?email=${user.email}`)
    .then(res => res.json())
    .then(data => setPayments(data))
  },[user])
  
    return (
       
               <div className="w-5/6 mx-auto">
           <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr className="primary-design">
        <th>#</th>
        <th>Class Name</th>
        <th>Price</th>
        <th>Tnx ID</th>
        <th>Time</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
     {
      payments.map((payment,i)=>
      <tr key={i}>
        <th>{1+i}</th>
        <td>{payment.ClassName}</td>
        <td>$ {payment.Price}</td>
        <td>{payment.transactionId}</td>
        <td>{payment.date}</td>
      </tr>)
     }
    </tbody>
  </table>
</div>
            
        </div>
            
       
    );
};

export default PaymentHistory;