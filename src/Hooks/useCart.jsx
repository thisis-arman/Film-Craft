import { useContext } from 'react';
import { useQuery } from 'react-query'
import { AuthContext } from '../Provider/AuthProvider';
import useAxiosSecure from './useAxiosSecure';

const useCart =()=>{
const {user}=useContext(AuthContext)
//console.log('useCart',user)
const [axiosSecure] =useAxiosSecure()

// const token = localStorage.getItem('access_token')

const { refetch, data: cart =[] } = useQuery({
    queryKey:['carts',user?.email],
    queryFn: async()=>{
        const res = await axiosSecure(`/carts?email=${user?.email}`)
        console.log(res,'axiosSecure returned')
        return res.data;
    },
})
return [cart, refetch]



}

export default useCart;