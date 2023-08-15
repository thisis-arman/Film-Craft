import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Aos from 'aos';
import 'aos/dist/aos.css';


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
    const popularClasses=(sortedClass).slice(0, 6);
    
    // const popularClasses =popularClasses.slice(0,6)
    // //console.log('popular',popularClasses)

    return (
        <div data-aos="fade-up" data-aos-delay="200" className="w-full md:px-10 mx-auto px-4 ">
            <h1 className="text-4xl font-bold text-center my-24">Popular Classes</h1>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 ">
               {
                popularClasses.map(cls=>
                   
                    <Link to={`/class/${cls._id}`} key={cls.serialNumber} className="card  hover:shadow-7xl hover:rounded-sm hover:shadow-slate-700 rounded-none  mx-auto xl:w-[400px] w-full h-[450px] bg-base-100 shadow-xl">
                    <figure className="max-h-60"><img className="max-h-60 w-full" src={cls.image} alt={cls.ClassName} /></figure>
                    <div className="p-4">
                        <p className="bg-white absolute top-0 right-0 m-4 p-1 px-2 rounded font-semibold">${cls.Price}</p>
                        <h2 className="card-title font-bold text-2xl">{cls.ClassName}</h2>
                        <p className="py-3">{cls.keyLearnings.brief}</p>
                        <div>
                        <p className="py-1 text-sm" >Enrolled: {cls.enrolled} students</p>
                        <p className="py-1 text-sm" >Reviews: {cls.reviews} ({cls.numberOfReviews} +reviews)</p>
                        </div>
                       <p className="text-sm py-1">{cls.level} -{cls.category}- {cls.duration}</p>
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