import { useContext } from "react"
import { AuthContext } from "../Provider/AuthProvider"
import useAxiosSecure from "./useAxiosSecure"
import { useQuery } from "react-query"



const useAdmin =()=>{
    const {user} =useContext(AuthContext)
    const [axiosSecure] =useAxiosSecure()
const {data: isAdmin, isLoading: isLoadingAdmin} =useQuery({
    queryKey:['isAdmin', user?.email],
    queryFn:async ()=>{
        const res = await axiosSecure.get(`/users/admin/${user.email}`)
        console.log(res,' from use admin ')

        return res.data.admin
    }
})
return [ isAdmin, isLoadingAdmin]



}


export default useAdmin;