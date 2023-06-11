import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../../Provider/AuthProvider";


const MyClass = () => {
const {user}=useContext(AuthContext)

const[myClasses, setMyClass]=useState([])


  useEffect(()=>{
    fetch(`http://localhost:5000/classes/instructor/${user.email}`)
    .then(res =>res.json())
    .then(data =>setMyClass(data))
  },[])

    

    return (
        <div className="w-5/6 mx-auto">
          <div>
            <h2 className="uppercase text-2xl font-bold my-10">MY CLasses</h2>
          </div>
           <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr className="primary-design">
        <th>Sl</th>
        <th>Class Name</th>
        <th>Price</th>
        <th>Available Seats</th>
        <th>Status</th>
        <th>Enrolled</th>
      </tr>
    </thead>
    <tbody>

      {
        myClasses.map((cls,i)=>
        <tr className="" key={i}>
        <th>{ 1+i}</th>
        <td>{cls.ClassName}</td>
        <td className="text-center">${cls.Price}</td>
        <td>{cls.availableSeats}</td>
        <td>{cls.status}</td>
        <td>0</td>
      </tr>
        
        )}
     
     
    </tbody>
  </table>
</div>
            
        </div>
    );
};

export default MyClass;