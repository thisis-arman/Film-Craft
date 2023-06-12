import { useContext } from "react";
import  { AuthContext } from "../Provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import useInstructor from "../Hooks/useInstructor";



const InstructorRoute = ({children}) => {
    const {user,loading}=useContext(AuthContext)
    const [isInstructor]=useInstructor()
    const location =useLocation()

    if(loading && isInstructor){
        return <>
     <div className="flex-col justify-center items-center">
     <img className="w-14" src="/camera.png" alt="loading" />
       <p className="text-2xl font-semibold font-serif"> wait for a moment</p>
     </div>
        </>
    }
    
    if(user && isInstructor){
            return children
        }


    return (
        <Navigate to="/" state={{from:location }} replace></Navigate>
    );
};

export default InstructorRoute;