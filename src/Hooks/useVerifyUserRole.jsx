import { useContext, useEffect, useState } from "react"
import { AuthContext } from "../Provider/AuthProvider"

const useVerifyUserRole=()=>{

    const {user}=useContext(AuthContext)
//console.log(user)
const [savedUsers,setSavedUser]=useState([])

useEffect(()=>{
    fetch('http://localhost:5000/users')
    .then(res=>res.json())
    .then(users =>setSavedUser(users))
},[])

// const allEmails = savedUsers.map(user =>user.email)
const currentEmail = user.email

const currentUser =savedUsers.filter(user => user.email === currentEmail && user)
const currentUserRole = currentUser[0]?.role
//console.log(currentUserRole)
return [currentUserRole]
}

export default useVerifyUserRole;