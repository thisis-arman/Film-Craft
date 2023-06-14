import { useContext } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";
import useCart from "../../Hooks/useCart";
import useInstructor from "../../Hooks/useInstructor";
import useAdmin from "../../Hooks/useAdmin";



const ClassDetails = () => {
    const {user}=useContext(AuthContext)
   
    const [isAdmin]=useAdmin()
    const [isInstructor]=useInstructor()
   



    const navigate =useNavigate()
    const [,refetch] = useCart()

    const singleClass = useLoaderData()
    //console.log('class details ', singleClass)
    
    const { ClassName, Price, durations, enrolled, category, image, keyLearnings, level, reviews, availableSeats, instructor } = singleClass;
    const handleAddToCart =(item) => {

        const cartItem={
            ClassName: item.ClassName,
            Price:parseFloat(item.Price),
            availableSeats: parseFloat(item.availableSeats),
            email:user.email,
            image: item.image,
            classId:item._id,
            status: item.status,
            category: item.category,
            details:item.details,


        }
        console.log(cartItem)

        // TODO: there has some issue ;
       
        if(user && user.email){
            fetch('https://film-craft-server.vercel.app/carts',{
                method: 'POST',
                  headers: {
                  'Content-Type': 'application/json'
               },
               body: JSON.stringify(cartItem)
            })
            .then(res => res.json())
            .then(data =>{
                console.log(data,'handle add to cart')
            if(data.insertedId){
                refetch()
                Swal.fire({
                    icon:'success',
                    title: 'Added to cart',
                    showConfirmButton: false,
                    timer: 1500
                })
                // navigate('/cart')
            }})
        }
        else{
            Swal.fire({
                title: 'Please Login to enroll clases',
                text: "You won't be able to revert this!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Login Now!'
              }).then((result) => {
                if (result.isConfirmed) {
                  navigate('/login')
                }
              })
        }
    }

    return (
        <div>
            <div className="hidden md:block">
            <div className="hero   cover md:h-[450px]"  >
                <div className="hero-overlay bg-opacity-60"></div>
                <div className=" text-neutral-content">
                    <div className=" ">
                        <h1 className="mb-5 text-5xl font-bold">{singleClass?.ClassName}</h1>
                        <p className="mb-5">{keyLearnings?.brief}</p>
                        <button className="btn btn-primary">Get Started</button>
                    </div>
                </div>
            </div>
            </div>

            <div className="w-full relative   md:flex gap-6 ">
                
   
               
            <div className=" md:order-2 order-1 h-60 w-full">
           <div className="p-16 border m-8">
           <h2 className="text-2xl font-bold">key Learnings:</h2>
           <p className="py-4">{singleClass?.details}</p>
    

           </div>
            </div>
           <div className="relative order-2 md:order-2 md:right-10 mt-[70px] md:-top-60">
           <div className="card  rounded-none w-full md:w-96 bg-base-100 shadow-xl">
                    <figure><img className="" src={singleClass?.image} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title text-xl font-bold">{singleClass?.ClassName}</h2>
                        <p className="font-bold text-2xl">${singleClass?.Price}</p>
                        <div className={`card-actions `}>
                            <button onClick={()=>handleAddToCart(singleClass)} className={`btn btn-outline btn-success w-full  ${(isAdmin || isInstructor)&& 'btn-disabled '}`}>Add To Cart</button>
                            <button className={`btn btn-primary w-full  ${(isAdmin || isInstructor)&& 'btn-disabled '}`}>Buy Now</button>   
                        </div>
                        <p className="font-semibold text-xl my-2">Summery :</p>
                        <p className="">Level: {singleClass?.level}</p>
                        <p className="">Duration: {singleClass?.durations}</p>
                        
                    </div>
                    
                </div>
           </div>
            </div>
        </div>

    );
};

export default ClassDetails;