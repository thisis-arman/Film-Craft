// import { useContext, useEffect, useState } from "react";
import { FaHome, FaUserGraduate, FaUsers } from 'react-icons/fa';
import {BsEasel, BsEasel2, BsFillCreditCardFill, BsFillEasel2Fill } from 'react-icons/bs';
import {LuLayoutDashboard } from 'react-icons/lu';
import {MdDashboard, MdOutlinePaid } from 'react-icons/md';
import { NavLink, Outlet } from "react-router-dom";
// import { AuthContext } from "../../Provider/AuthProvider";
import useAdmin from "../../Hooks/useAdmin";
import useInstructor from "../../Hooks/useInstructor";


const Dashboard = () => {
   

const [isAdmin] =useAdmin()
console.log(isAdmin,'is admin')
const [isInstructor] =useInstructor()
console.log(isInstructor,'is he instructor')

   
/*     const {user}=useContext(AuthContext)
//console.log(user)
const [savedUsers,setSavedUser]=useState([])

useEffect(()=>{
    fetch('https://film-craft-server.vercel.app/users')
    .then(res=>res.json())
    .then(users =>setSavedUser(users))
},[])

// const allEmails = savedUsers.map(user =>user.email)
const currentEmail = user.email

const currentUser =savedUsers.filter(user => user.email === currentEmail && user)
const currentUserRole = currentUser[0]?.role */
//console.log(currentUserRole)

// //console.log(allEmails)


   /*  const isAdmin=false;
    const isInstructor =true;
    const isStudent =false; */
    
    return (
        <div>
            <div className="drawer lg:drawer-open">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col items-center justify-center">
                   <Outlet/>
                    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

                </div>
                <div className="drawer-side py-16 bg-gradient-to-r from-purple-200 from-10% via-sky-200 via-30% to-emerald-200 to-90%">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 h-full ">


                        {/* Sidebar content here */}
                        
                        {isAdmin ?<>
                            <li><NavLink to='admin'><LuLayoutDashboard className='w-6 h-6'/> Admin Dashboard</NavLink></li>
                        <li><NavLink to='manage-classes'><BsEasel className='h-6 w-6'/> Manage classes</NavLink></li>
                        <li><NavLink to='manage-users'><FaUsers className='h-6 w-6'/> Manage Users</NavLink></li>
                        </>:
                        isInstructor?<>
                        
                        <li><NavLink to='instructor'><MdDashboard className='w-6 h-6'/> Instructor Dashboard</NavLink></li>
                        <li><NavLink to='/dashboard/add-class'><BsEasel2 className='w-6 h-6'/> Add A Class</NavLink></li>
                        <li><NavLink to='my-classes'><FaUserGraduate className='w-6 h-6'/> My Classes</NavLink></li>
                        </>
                        :
                       <> <li><NavLink to='student'><MdDashboard className='w-6 h-6'/> Dashboard</NavLink></li>
                        <li><NavLink to='selected-classes'><BsFillEasel2Fill className='w-6 h-6'/> Selected Classes</NavLink></li>
                        <li><NavLink to='enrolled-classes'><MdOutlinePaid className='w-6 h-6'/> Enrolled Classes</NavLink></li>
                        <li><NavLink to='payment-history'><BsFillCreditCardFill className='w-6 h-6'/> Payment History</NavLink></li>
                        </>

                        
                        }
                        {/* <li><NavLink to='dashboard'>Admin Dashboard</NavLink></li> */}

                        <div className="divider"></div>
                        <li><NavLink to='/'><FaHome className='w-6 h-6'/> Home</NavLink></li>
                        {/* <li><NavLink to='/instructors'>Instructors</NavLink></li>
                        <li><NavLink to='/classes'>Classes</NavLink></li> */}
                        {/* <li><NavLink to='/'>Home</NavLink></li> */}
                    </ul>

                </div>
            </div>

        </div>
    );
};

export default Dashboard;