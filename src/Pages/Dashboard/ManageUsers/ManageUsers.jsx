// import { useEffect, useState } from "react";
import { FaChalkboardTeacher, FaTrashAlt, FaUserAlt, FaUserShield } from "react-icons/fa";
import { useQuery } from "react-query";
import Swal from "sweetalert2";


const ManageUsers = () => {

   /*  const [users, setUsers] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/users')
            .then(res => res.json())
            .then(data => setUsers(data))

    }, [])
    //console.log(users) */


    const {data :users =[],refetch} =useQuery(['users'],async()=>{
        const res = await fetch('http://localhost:5000/users')
        console.log(res,'checking response')
        return res.json();
    })

    const handleMakeAdmin = (user) => {
        //console.log(user)
        fetch(`http://localhost:5000/users/admin/${user._id}`, {
            method: "PATCH",
            headers: {
                "content-type": "application/json"
            }
        })
            .then(res => res.json())
            .then(data => {
                //console.log(data)
                if (data.modifiedCount > 0) {
                    refetch()
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: `Made Admin ${user.name}.`,
                        showConfirmButton: false,
                        timer: 1500
                    });

                }
            })
    }
console.log(users)


    const handleMakeInstructor = (user) => {
        //console.log(user)
        fetch(`http://localhost:5000/users/instructor/${user._id}`, {
            method: "PATCH",
            headers: {
                "content-type": "application/json"
            }
        })
            .then(res => res.json())
            .then(data => {
                //console.log(data)
                if (data.modifiedCount > 0) {
                    refetch()
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: `Made Instructor ${user.name}.`,
                        showConfirmButton: false,
                        timer: 1500
                    });

                }
            })
    }

    return (
        <div className="w-5/6 mx-auto">
            <h1>Manage Users</h1>
            <div className=" w-full">
                <table className="table table-zebra w-full">
                    {/* head */}
                    <thead>
                        <tr className="primary-design text-lg">
                            <th>SL</th>
                            <th>Profile</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Change Role</th>
                            <th>Present Role</th>

                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            users.map((user, i) =>
                                <tr key={i}>
                                    <th>{1 + i}</th>
                                    <td>
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={user?.photo} alt={user.name} />
                                            </div>
                                        </div>
                                    </td>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <td className="flex gap-4 mt-3   items-center justify-start">

                                        {/* <FaUserAlt   className="text-blue-600 cursor-pointer h-4  w-5"/> */}
                                        <FaChalkboardTeacher title={`Hit the icon to make  ${user.name} Instructor`} onClick={() => handleMakeInstructor(user)}


                                            className={` ${user.role === 'instructor' && 'btn-disabled'} " text-orange-400 cursor-pointer h-6 w-6"`} />

                                        <FaUserShield onClick={() => handleMakeAdmin(user)} title={`Hit the icon to make  ${user.name} Admin`} className={` ${user.role === 'admin' && 'btn-disabled'}  " text-green-500 cursor-pointer h-8 w-6"`} />
                                    </td>
                                    <td className="text-right">
                                        {user.role === 'admin' ? <FaUserShield title="Admin" className="text-green-500  ml-4  cursor-pointer h-6 w-5" />
                                            : user.role === 'instructor' ? <FaChalkboardTeacher title="Instructor" className="text-orange-400 ml-4 cursor-pointer h-5 w-5" />
                                                : <FaUserAlt title="Student" className="text-blue-600 ml-4 cursor-pointer h-5 w-5" />}

                                    </td>

                                    <td>
                                        <button className="cursor-pointer"><FaTrashAlt className="h-6 text-red-500 w-6" /></button>
                                    </td>
                                </tr>

                            )
                        }
                        {/* row 2 */}

                    </tbody>
                </table>
            </div>


           


        </div>
    );
};

export default ManageUsers;