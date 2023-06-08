import { useEffect, useState } from "react";


const ManageUsers = () => {

    const [users, setUsers] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/users')
            .then(res => res.json())
            .then(data => setUsers(data))

    }, [])
    console.log(users)

    return (
        <div className="w-full">
            <h1>Manage Users</h1>
            <div className=" w-full">
                <table className="table table-zebra w-full">
                    {/* head */}
                    <thead>
                        <tr className="bg-base-300">
                            <th></th>
                            <th>Profile</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Action</th>
                            <th>Action</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            users.map((user,i)=>
                            <tr key={i}>
                            <th>{1+i}</th>
                            <td>
                                <div className="avatar">
                                    <div className="mask mask-squircle w-12 h-12">
                                        <img src="/tailwind-css-component-profile-2@56w.png" alt="Avatar Tailwind CSS Component" />
                                    </div>
                                </div>
                            </td>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>
                                <button className="btn btn-ghost">make admin</button>
                            </td>
                            <td>
                                <button className="btn btn-ghost">Instructor</button>
                            </td>
                            <td>
                                <button className="btn btn-ghost">Delete</button>
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