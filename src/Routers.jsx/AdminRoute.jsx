import { useContext } from "react";
import  { AuthContext } from "../Provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import useAdmin from "../Hooks/useAdmin";



const AdminRoute = ({children}) => {
    const {user,loading}=useContext(AuthContext)
    const [isAdmin,isLoadingAdmin]=useAdmin()
    const location =useLocation()

    if(loading || isLoadingAdmin){
        return <>
     <div className="flex-col justify-center items-center">
     <img className="w-14" src="/camera.png" alt="loading" />
       <p className="text-2xl font-semibold font-serif"> wait for a moment</p>
     </div>
        </>
    }
    
    if(user && isAdmin){
            return children
        }


    return (
        <Navigate to="/login" state={{from:location }} replace></Navigate>
    );
};

export default AdminRoute;