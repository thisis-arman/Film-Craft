import { FaEdit, FaTrashAlt } from "react-icons/fa";
import useCart from "../../../../Hooks/useCart";


const SelectedClasses = () => {
    const [cart,refetch]=useCart()
    const total = cart.reduce((sum,item)=>item.Price + sum ,0)
    return (
        <div className="w-5/6 mx-auto my-12">

            <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold my-4">Selected Classes : {cart.length}</h2>
        <h2 className="text-2xl font-bold my-4">Total Amount :$ {total}</h2>
       <p className="btn-primary w-20 h-10">Pay</p>

            </div>

<div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr className="primary-design">
        <th></th>
        <th>Name</th>
        <th>Email</th>
        <th>Price</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      {
        cart.map((item,i)=>
        <tr key={i}>
        <th>{i+1}</th>
        <td>{item.ClassName}</td>
        <td>{item.email}</td>
        <td>${item.Price}</td>
        <td className="flex gap-2">
            <FaEdit className="w-5 cursor-pointer h-5"/>
            <FaTrashAlt className="text-red-600 w-5 cursor-pointer h-5"/>

        </td>
      </tr>
        
        )
      }
     
    </tbody>
  </table>
</div>

            
        </div>
    );
};

export default SelectedClasses;