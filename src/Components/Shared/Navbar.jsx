import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import { FaCartPlus } from 'react-icons/fa';
import useCart from "../../Hooks/useCart";


const Navbar = () => {
  const { user, logOut } = useContext(AuthContext)
  const [cart]=useCart()
  console.log(cart)

  const handleLogOut = () => {
    logOut()
  }
  const menuOptions = (
    <>
      <li><Link to='/'>Home</Link></li>
      <li><Link to='/instructors'>Instructors</Link></li>
      <li><Link to='/classes'>Classes</Link></li>
      {/* TODO :make dashboard conditional */}
      <li><Link to='dashboard'>Dashboard</Link></li>

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
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
              {menuOptions}
            </ul>
          </div>
          <Link to='/' className=" font-bold text-2xl">FILM <span className="">Carft</span></Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {menuOptions}
          </ul>
        </div>
        <div className="navbar-end">
          {/* cart */}
          <Link >
            <div className="indicator mr-4">
              <span className="indicator-item badge badge-secondary ">+{cart.length || 0}</span>
              <button className="btn btn-ghost"> <FaCartPlus /></button>
            </div>
          </Link>

          {user ? <><Link onClick={handleLogOut} className="btn-primary">Sign Out</Link>
            <label tabIndex={0} className="ml-4 rounded-full btn-circle avatar">
              <div className="w-10 rounded-full">
                <img title={user?.displayName} src={user?.photoURL} />
              </div>
            </label>
          </>
            : <>
              <Link to='/login' className="btn-primary">Sign in</Link>
            </>
          }
        </div>
      </div>

    </div>
  );
};

export default Navbar;