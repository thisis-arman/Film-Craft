import { useContext, useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import { FaCartPlus } from 'react-icons/fa';
import { BiMoon, BiSun } from 'react-icons/bi';
import useCart from "../../Hooks/useCart";
import useAdmin from "../../Hooks/useAdmin";
import useInstructor from "../../Hooks/useInstructor";


const Navbar = () => {
  const { user, logOut } = useContext(AuthContext)
  const [cart] = useCart()
  //console.log(cart)
  const [isAdmin]=useAdmin()
  const [isInstructor]=useInstructor()

  const handleLogOut = () => {
    logOut()
  }

  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  );

  // update state on toggle
  const handleToggle = (e) => {
    if (e.target.checked) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  // set theme state in localstorage on mount & also update localstorage on state change
  useEffect(() => {
    localStorage.setItem("theme", theme);
    const localTheme = localStorage.getItem("theme");
    // add custom data-theme attribute to html tag required to update theme using DaisyUI
    document.querySelector("html").setAttribute("data-theme", localTheme);
  }, [theme]);

  const menuOptions = (
    <>
      <li><NavLink to='/'>Home</NavLink></li>
      <li><NavLink to='/instructors'>Instructors</NavLink></li>
      <li><NavLink to='/classes'>Classes</NavLink></li>
      {/* TODO :make dashboard conditional */}
      {/*    to={
                      isAdmin
                        ? "/dashboard/adminhome"
                        : isInstructor
                        ? "/dashboard/instructorhome"
                        : "/dashboard/studenthome"
                    } */}
      {user && <li><NavLink

        to={
          isAdmin
            ? "/dashboard/admin"
            : isInstructor
              ? "/dashboard/instructor"
              : "/dashboard/selected-classes"
        }

      >Dashboard</NavLink></li>}

    </>
  )
  return (
    <div className="md:px-24 px-4 shadow-md bg-slate-700  text-white w-full fixed z-10 top-0   bg-opacity-40   ">
      <div className="navbar  ">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 text-black rounded-box w-52">
              {menuOptions}
            </ul>
          </div>
          <Link to='/' className="uppercase font-bold text-2xl">FILM <span className="text-yellow-600 ">Carft</span></Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {menuOptions}
          </ul>
        </div>
        <div className="navbar-end">
          {/* cart */}


          <Link to='dashboard/selected-classes' >
            <div className="indicator mr-4">
              <span className="indicator-item badge badge-secondary ">+{cart.length || 0}</span>
              <button className="btn btn-ghost"> <FaCartPlus /></button>
            </div>
          </Link>

          {/* TODO:TRY TO MAKE PROFILE DROPDOWN TYPE */}



          {user ? <><Link onClick={handleLogOut} className="btn-primary">Sign Out</Link>
            <label tabIndex={0} className=" pt-1 rounded-full btn-circle avatar">
              <div className="w-9  h-9 m-1 rounded-full">
                <img title={user?.displayName} src={user?.photoURL} />
              </div>
            </label>
          </>
            : <>
              <Link to='/login' className="btn-primary">Sign in</Link>
            </>
          }
          <button className="btn btn-square btn-ghost">
            <label className="swap swap-rotate w-12 h-12">
              <input type="checkbox"

                onChange={handleToggle}
              />
              {/* light theme sun image */}
              <BiSun className="w-8 h-8 swap-off" />
              {/* dark theme moon image */}
              <BiMoon className='h-8 w-8 swap-on' />
            </label>
          </button>
        </div>

      </div>

    </div>
  );
};

export default Navbar;