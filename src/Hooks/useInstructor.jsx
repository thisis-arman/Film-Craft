import { useContext } from "react"
import { AuthContext } from "../Provider/AuthProvider"
import useAxiosSecure from "./useAxiosSecure"
import { useQuery } from "react-query"



const useInstructor =()=>{
    const {user} =useContext(AuthContext)
    const [axiosSecure] =useAxiosSecure()
const {data: isInstructor, isLoading: isLoadingInstructor} =useQuery({
    queryKey:['isInstructor', user?.email],
    queryFn:async ()=>{
        const res = await axiosSecure.get(`/users/instructor/${user.email}`)
        console.log(res,' from use Instructor ')

        return res.data.instructor
    }
})
return [ isInstructor, isLoadingInstructor]



}


export default useInstructor;