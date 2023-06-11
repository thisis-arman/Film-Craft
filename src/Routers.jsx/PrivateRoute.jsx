import { useContext } from "react";
import  { AuthContext } from "../Provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";



const PrivateRoute = ({children}) => {
    const {user,loading}=useContext(AuthContext)
    const location =useLocation()

    if(loading){
        return <>
     <div className="flex-col justify-center items-center">
     <img className="w-14" src="/camera.png" alt="loading" />
       <p className="text-2xl font-semibold font-serif"> wait for a moment</p>
     </div>
        </>
    }
    
    if(user){
            return children
        }


    return (
        <Navigate to="/login" state={{from:location }} replace></Navigate>
    );
};

export default PrivateRoute;