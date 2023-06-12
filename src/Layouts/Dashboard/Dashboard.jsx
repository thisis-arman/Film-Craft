// import { useContext, useEffect, useState } from "react";
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
    fetch('http://localhost:5000/users')
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
                <div className="drawer-side py-16 bg-base-200">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 h-full ">


                        {/* Sidebar content here */}
                        
                        {isAdmin ?<>
                            <li><NavLink to='admin'>Admin Dashboard</NavLink></li>
                        <li><NavLink to='manage-classes'>Manage classes</NavLink></li>
                        <li><NavLink to='manage-users'>Manage Users</NavLink></li>
                        </>:
                        isInstructor?<>
                        
                        <li><NavLink to='instructor'>Instructor Dashboard</NavLink></li>
                        <li><NavLink to='/dashboard/add-class'>Add A Class</NavLink></li>
                        <li><NavLink to='my-classes'>My Classes</NavLink></li>
                        </>
                        :
                       <> <li><NavLink to='student'>Dashboard</NavLink></li>
                        <li><NavLink to='selected-classes'>Selected Classes</NavLink></li>
                        <li><NavLink to='enrolled-classes'>Enrolled Classes</NavLink></li>
                        </>

                        
                        }
                        {/* <li><NavLink to='dashboard'>Admin Dashboard</NavLink></li> */}

                        <div className="divider"></div>
                        <li><NavLink to='/'>Home</NavLink></li>
                        <li><NavLink to='/instructors'>Instructors</NavLink></li>
                        <li><NavLink to='/classes'>Classes</NavLink></li>
                        {/* <li><NavLink to='/'>Home</NavLink></li> */}
                    </ul>

                </div>
            </div>

        </div>
    );
};

export default Dashboard;