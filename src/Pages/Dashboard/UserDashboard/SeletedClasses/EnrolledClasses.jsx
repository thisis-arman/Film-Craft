import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../../Provider/AuthProvider";


const EnrolledClasses = () => {
  const {user} =useContext((AuthContext))
  const [payments, setPayments]=useState([])
  console.log(payments,'payments............')


  useEffect(()=>{
    fetch(`https://film-craft-server.vercel.app/payments?email=${user.email}`)
    .then(res => res.json())
    .then(data => setPayments(data))
  },[user])
  
    return (
        <div className="w-5/6 mx-auto">
         <div className="overflow-x-auto">
  <table className="table">

    <thead>
      <tr className="primary-design">
        <th></th>
        <th>Image</th>
        <th>Class Name</th>
        <th>Email</th>
        <th>Price</th>
        
      </tr>
    </thead>
    <tbody>
    
     {
      payments.map((payment,i)=>
      <tr key={payment._id}>
      <th>{1+i}</th>
      <td>
      <div className="avatar">
            <div className="mask mask-squircle w-12 h-12">
              <img src={payment.image} alt={payment.ClassName} />
            </div>
            </div>
      </td>
      <td>{payment.ClassName}</td>
      <td>{payment.email}</td>
      <td>${payment.Price}</td>
     
    </tr>
     )
     }
    </tbody>
  </table>
</div> 
            
        </div>
    );
};

export default EnrolledClasses;