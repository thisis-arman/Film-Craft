import { useContext } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../Provider/AuthProvider";
import { useLoaderData } from "react-router-dom";


const UpdateClass = () => {
    const { user } = useContext(AuthContext)

    const classData = useLoaderData()
    console.log(classData)
    //console.log('from user',user)
    const handleUpdateClass =(event)=>{
        event.preventDefault();
        const form = event.target
        const email = form.email.value;
        const className = form.ClassName.value;
        const availableSeats = form.seat.value;
        const price = form.price.value;
        const photo = form.photo.value;
        const category = form.category.value;
        const details = form.details.value;
        const newClass ={name:user.displayName ,email,availableSeats,Price:price,image:photo,ClassName:className,
             category:category,status:"pending",keyLearnings : details}
        
        fetch(`https://film-craft-server.vercel.app/classes/${classData._id}`,{
          method:'PUT',
          headers:{
            'Content-Type':'application/json', 
          },
          body:JSON.stringify(newClass)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.modifiedCount > 0){
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Your Class has been saved',
                    showConfirmButton: false,
                    timer: 2500
                  })

        }})
        /* .then(res=>res.json())
        .then(data => console.log(data)) */
    }

    

   /*  const handleAddClass =(event)=>{
        event.preventDefault();
        const form = event.target
        const email = form.email.value;
        const className = form.ClassName.value;
        const availableSeats = form.seat.value;
        const price = form.price.value;
        const photo = form.photo.value;
        const category = form.category.value;
        const details = form.details.value;
        const newClass ={name:user.displayName ,email,availableSeats,Price:price,image:photo,ClassName:className,
             category:category,status:"pending" ,enrolled:0 ,keyLearnings : details}
        //console.log(newClass)
        fetch("https://film-craft-server.vercel.app/classes", {
            method:"PATCH",
            headers:{
                "content-type": "application/json",
            },
            body:JSON.stringify(newClass)
            
    })
    .then(res =>res.json())
    .then(data =>{
        //console.log(data)
        if(data.insertedId){
            Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'Your new Class added successfully',
                showConfirmButton: false,
                timer: 1500
              })
        }
    })

  

    } */

    return (
        <div>
            <section className="text-gray-600 body-font relative">
                <div className="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">

                    <form onSubmit={handleUpdateClass}  className=" bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
                        <h2 className="text-gray-900 text-2xl mb-1 font-bold title-font">Update A Class</h2>
                        <p className="leading-relaxed mb-5 text-gray-600">Post-ironic portland shabby chic echo park, banjo fashion axe</p>

                        <div className="relative mb-4">
                            <label htmlFor="name" className="leading-7 text-sm text-gray-600"> Name</label>
                            <input defaultValue={user.displayName} type="text" readOnly  id="name"  className="w-full bg-white rounded border border-gray-300  focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-black py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                        </div>

                        <div className="relative mb-4">
                            <label htmlFor="email" className="leading-7 text-sm text-gray-600">Email</label>
                            <input defaultValue={user.email} readOnly type="email" id="email" name="email" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                        </div>
                       
                        <div className="relative mb-4">
                            <label htmlFor="ClassName" className="leading-7 text-sm text-gray-600">Class Name</label>
                            <input type="text" id="ClassName" defaultValue={classData.ClassName} name="ClassName" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                        </div>
                        <div className="relative mb-4">
                            <label htmlFor="photo" className="leading-7 text-sm text-gray-600">Image URL</label>
                            <input type="text" id="photo" defaultValue={classData.image} name="photo" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                        </div>
                        <div className="relative mb-4">
                            <label htmlFor="seats" className="leading-7 text-sm text-gray-600">Available Seats</label>
                            <input type="number" id="seats" defaultValue={classData.availableSeats} name="seat" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                        </div>
                       <div className="border rounded">
                       <select name='category' defaultValue={classData.category} className="select  w-full join-item border-2">
                            <option  disabled name='category' selected>Category</option>
                            <option>Film Making</option>
                            <option>Product Photography</option>
                            <option>Video Editing</option>
                        </select>

                       </div>
                       <div className="relative mb-4">
                            <label htmlFor="price" className="leading-7 text-sm text-gray-600">Price</label>
                            <input type="number" id="price" defaultValue={classData.Price} name="price" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                        </div>

                        <div className="relative mb-4">
                            <label htmlFor="details" className="leading-7 text-sm text-gray-600">Details</label>
                            <textarea id="details" placeholder="please add class details" name="details" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out" data-gramm="false" wt-ignore-input="true" defaultValue={""} />
                        </div>


                        <button type="submit" className="text-white primary-design bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Update Class</button>
                        {/* <p className="text-xs text-gray-500 mt-3">Chicharrones blog helvetica normcore iceland tousled brook viral artisan.</p> */}
                    </form>
                </div>
            </section>

        </div>
    );
    };

export default UpdateClass;