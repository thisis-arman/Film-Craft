import { useContext } from 'react';
import { useQuery } from 'react-query'
import { AuthContext } from '../Provider/AuthProvider';

const useCart =()=>{
const {user}=useContext(AuthContext)

const { isLoading, data: cart =[] } = useQuery({
    queryKey:['cart',user?.email],
    queryFn: async()=>{
        const res = await fetch(`http://localhost:5000/carts/${user?.email}`)
        return res.json()
    },
})
return [cart, isLoading]



}

export default useCart;