import { useContext } from 'react';
import { useQuery } from 'react-query'
import { AuthContext } from '../Provider/AuthProvider';

const useCart =()=>{
const {user}=useContext(AuthContext)
console.log('useCart',user)

const { refetch, data: cart =[] } = useQuery({
    queryKey:['carts',user?.email],
    queryFn: async()=>{
        const res = await fetch(`http://localhost:5000/carts?email=${user?.email}`)
        return res.json()
    },
})
return [cart, refetch]



}

export default useCart;