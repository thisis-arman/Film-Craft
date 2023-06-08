import { Link, Outlet } from "react-router-dom";


const Dashboard = () => {

    const isAdmin=true;
    const isInstructor =false;
    const isStudent =true;
    
    return (
        <div>
            <div className="drawer lg:drawer-open">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col items-center justify-center">
                   <Outlet/>
                    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

                </div>
                <div className="drawer-side ">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 h-full bg-base-200 text-base-content">


                        {/* Sidebar content here */}
                        {isAdmin ?<>
                            <li><Link to='admin'>Admin Dashboard</Link></li>
                        <li><Link to='manage-classes'>Manage classes</Link></li>
                        <li><Link to='manage-users'>Manage Users</Link></li>
                        </>:
                        isInstructor ?<>
                        
                        <li><Link to='instructor'>Instructor Dashboard</Link></li>
                        <li><Link to='manage-classes'>Manage classes</Link></li>
                        <li><Link to='manage-users'>Manage students</Link></li>
                        </>
                        :
                       <> <li><Link to='student'>Dashboard</Link></li>
                        <li><Link to='selected-courses'>Selected Courses</Link></li>
                        <li><Link to='enrolled-courses'>Enrolled Courses</Link></li>
                        </>

                        
                        }
                        {/* <li><Link to='dashboard'>Admin Dashboard</Link></li> */}

                        <div className="divider"></div>
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/instructors'>Instructors</Link></li>
                        <li><Link to='/classes'>Classes</Link></li>
                        {/* <li><Link to='/'>Home</Link></li> */}
                    </ul>

                </div>
            </div>

        </div>
    );
};

export default Dashboard;