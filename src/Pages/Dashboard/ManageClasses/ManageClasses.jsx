import { useEffect, useState } from "react";
import { FaCheck, FaEdit, FaTrashAlt } from "react-icons/fa";
import Swal from "sweetalert2";


const ManageClasses = () => {
    const [classesData, setClassesData] = useState([])
    // //console.log('classdata', classesData)

    useEffect(() => {
        fetch('http://localhost:5000/classes')
            .then(res => res.json())
            .then(data => setClassesData(data))
    }, [])

const makeApproved = (item) => {
    //console.log(item)
    fetch(`http://localhost:5000/classes/approved/${item._id}`, {
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
}
const makeDenied = (item) => {
    //console.log(item)
    fetch(`http://localhost:5000/classes/approved/${item._id}`, { 
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
                    title: 'CLass deleted Successfully.',
                    showConfirmButton: false,
                    timer: 1500
                });
            }
        })
}

    // const classes =JSON.parse(classesData).Classes;
    // const sortedClass = classesData.sort((a, b) => b.enrolled - a.enrolled);
    return (
        <div className="w-5/6 mx-auto">
            <h2 className="text-2xl font-semibold my-10 p-4">ALL Courses</h2>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr className="primary-design">
                            <th>SL</th>
                            <th>Image</th>
                            <th>Class Name</th>
                            <th>Price</th>
                            <th>Instructor</th>
                            {/* TODO:Email Filed */}
                            {/* <th>Instructor Email</th> */}
                            <th>Available Seats</th>
                            <th>Status</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            classesData.map((item, i) =>
                                <tr key={i}>
                                    <td>{i + 1}</td>
                                    <td className="font-bold">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={item.image} alt={item.ClassName} />
                                            </div>
                                        </div>


                                    </td>
                                    <td className="font-bold">{item.ClassName}</td>
                                    <td className="text-center">${item.Price}</td>
                                    <td className="">{item.instructor}</td>
                                    <td className="">{item.availableSeats}</td>
                                    <td className="font-bold text-green-300">{item.status}</td>
                                    <td className="flex gap-4 mt-4 ">
                                           <FaCheck onClick={()=>makeApproved(item)} className="h-5 cursor-pointer w-5 text-green-500" />
                                            <FaEdit  onClick={() => window.my_modal_5.showModal()}  className="h-5 cursor-pointer w-5 text-yellow-500" />
                                        <FaTrashAlt onClick={()=>makeDenied(item)} className="h-5 cursor-pointer w-5 text-red-500" />
                                    </td>
                                </tr>
                            )

                        }

                    </tbody>
                </table>
            </div>

 {/* FeedBack Modals */}
            {/* Open the modal using ID.showModal() method */}
            {/* <button className="btn" onClick={() => window.my_modal_5.showModal()}>open modal</button> */}
            <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                <form method="dialog" className="modal-box">
                    <h3 className="font-bold text-lg">Feedback!</h3>
                    <p className="py-4">Write your feedbacks why you approved or denied the Class?</p>
                    <div className="modal-action flex-col gap-4">
                        {/* if there is a button in form, it will close the modal */}
                        <textarea name="" className="border" id="" cols="6" rows="6"></textarea>
                        <button className="primary-design py-2">Send Feedback</button>
                    </div>
                </form>
            </dialog>

        </div>
    )
}
export default ManageClasses;