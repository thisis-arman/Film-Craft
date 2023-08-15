import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Aos from 'aos';
import 'aos/dist/aos.css';
import { FaStar } from "react-icons/fa";
import { AiOutlineUser } from "react-icons/ai";


const PopularClasses = () => {
    const [classesData, setClassesData] = useState([])
    //console.log('classdata', classesData)

    useEffect(() => {
        Aos.init({
          duration: 1000,
        });
      }, [])
    useEffect(() => {
        fetch('https://film-craft-server.vercel.app/classes')
            .then(res => res.json())
            .then(data => setClassesData(data))
    }, [])
    
    // const classes =JSON.parse(classesData).Classes;
    const sortedClass = classesData.sort((a, b) => b.enrolled - a.enrolled);
    const popularClasses=(sortedClass).slice(0, 8);
    
    // const popularClasses =popularClasses.slice(0,6)
    // //console.log('popular',popularClasses)

    return (
        <div data-aos="fade-up" data-aos-delay="200" className="w-full md:px-10 mx-auto px-4 ">
            <h1 className="text-4xl font-bold text-center mt-24 mb-8">Best Selling Courses</h1>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 ">
               {
                popularClasses.map(cls=>
                   
                    <Link to={`/class/${cls._id}`} key={cls.serialNumber} className="card  hover:shadow-7xl hover:rounded-sm hover:shadow-slate-700 rounded-none  mx-auto  w-full pb-2 bg-base-100 shadow-xl">
                    <figure className="max-h-44"><img className="max-h-60 w-full" src={cls.image} alt={cls.ClassName} /></figure>
                    <p className="text-sm pl-4 flex justify-between p-2"><span className="bg-pink-100 p-1 rounded-md bg-opacity-60">{cls.level}</span> <span className="bg-green-100 p-1 rounded-md bg-opacity-60">{cls.category}</span> </p>
                    <div className="px-4 ">
                        <p className="bg-white absolute top-0 right-0 m-4 p-1 px-2 rounded font-semibold">${cls.Price}</p>
                        <h2 className="card-title font-semibold text-xl">{cls.ClassName}</h2>
                        <p className="py-3">{(cls.keyLearnings.brief).slice(0,50)}..</p>
                        <hr />
                        <div className="flex justify-between bottom-0 items-end relative">
                        <p className="py-1  flex items-center gap-1 text-md" >
                            <AiOutlineUser/> <span>
                        {cls.enrolled} students</span></p>
                        <p className="py-1 text-md flex gap-1 items-center" ><FaStar className="text-yellow-500"/> <span >
                        {cls.reviews} ({cls.numberOfReviews} +reviews)</span></p>
                        </div>
                      
                        <div className="card-actions justify-end">
                            {/* <button className="btn-primary">Buy Now</button> */}
                        </div>
                    </div>
                </Link>
                    
                    
                    
                    )
               }
            </div>

        </div>
    );
};

export default PopularClasses;