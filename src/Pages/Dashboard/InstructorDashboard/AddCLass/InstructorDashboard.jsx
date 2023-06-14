import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../../Provider/AuthProvider";
import { BsEasel2 } from "react-icons/bs";

const InstructorDashboard = () => {
const {user}=useContext(AuthContext)
    const[myClasses, setMyClass]=useState([])


  useEffect(()=>{
    fetch(`https://film-craft-server.vercel.app/classes/instructor/${user.email}`)
    .then(res =>res.json())
    .then(data =>setMyClass(data))
  },[user])

    return (
        <div>
     <section className="text-gray-600 body-font">
  <div className="container px-5  mx-auto">
 
    <div className="flex w-full gap-4 -m-4">
   
      <div className="w-full bg-gradient-to-r from-indigo-200 from-10% via-sky-200 via-30% to-emerald-200 to-90% p-4">
        <div className="border border-gray-200 p-6 rounded-lg">
          <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-yellow-100 text-yellow-500 mb-4">
          <BsEasel2 className='w-6 h-6'/>
          </div>
          <h2 className="text-lg text-gray-900 font-medium title-font mb-2">MY CLASSES</h2>
          <p className="leading-relaxed text-4xl  font-extrabold">0{myClasses.length}</p>
        </div>
      </div>
      <div className="bg-gradient-to-r from-purple-200 from-10% via-sky-200 via-30% to-emerald-200 to-90% w-full p-4">
        <div className="border border-gray-200 p-6 rounded-lg">
          <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-yellow-100 text-yellow-500 mb-4">
            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-6 h-6" viewBox="0 0 24 24">
              <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
              <circle cx={12} cy={7} r={4} />
            </svg>
          </div>
          <h2 className="text-lg  font-medium title-font mb-2">STUDENTS</h2>
          <p className="leading-relaxed text-base">Fingerstache flexitarian street art 8-bit waist co, subway tile poke farm.</p>
        </div>
      </div>
     
      <div className="w-full bg-gradient-to-r from-pink-200 from-10% via-sky-200 via-30% to-emerald-200 to-90% p-4">
        <div className="border border-gray-200 p-6 rounded-lg">
          <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-yellow-100 text-yellow-500 mb-4">
            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-6 h-6" viewBox="0 0 24 24">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
            </svg>
          </div>
          <h2 className="text-lg text-gray-900 font-medium title-font mb-2">WALLET</h2>
          <p className="leading-relaxed text-base">Fingerstache flexitarian street art 8-bit waist co, subway tile poke farm.</p>
        </div>
      </div>
    </div>
   {/*  <button className="flex mx-auto mt-16 text-white bg-yellow-500 border-0 py-2 px-8 focus:outline-none hover:bg-yellow-600 rounded text-lg">Button</button> */}
  </div>
</section>

            
        </div>
    );
};

export default InstructorDashboard;