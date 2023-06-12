import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../../Provider/AuthProvider";
import { FaEdit } from "react-icons/fa";
import { Link } from "react-router-dom";


const MyClass = () => {

  
const {user}=useContext(AuthContext)


/* 
const handleUpdateClass = (item) => {
  //console.log(item)
  fetch(`http://localhost:5000/classes/update/${item._id}`, {
      method: "PATCH",
      headers: {
          "content-type": "application/json"
      }
  })
      .then(res => res.json())
      .then(data => {
          //console.log(data)
          if (data.modifiedCount > 0) {
              Swal.fire({
                  position: 'top-end',
                  icon: 'success',
                  title: 'Approved successfully.',
                  showConfirmButton: false,
                  timer: 1500
              });

          }
      })
} */

const[myClasses, setMyClass]=useState([])


  useEffect(()=>{
    fetch(`http://localhost:5000/classes/instructor/${user.email}`)
    .then(res =>res.json())
    .then(data =>setMyClass(data))
  },[user.email])

    

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
        <th>Edit</th>
        <th>Feedback</th>
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
        <td ><Link to={`/dashboard/my-classes/${cls._id}`}><FaEdit className="h-6 w-6"/></Link></td>
        <td>Feedback</td>
      </tr>
        
        )}
     
     
    </tbody>
  </table>
</div>



{/*  */}
            
        </div>
    );
};

export default MyClass;