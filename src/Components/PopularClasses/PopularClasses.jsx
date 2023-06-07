import { useEffect, useState } from "react";


const PopularClasses = () => {
    const [classesData, setClassesData] = useState([])
    console.log('classdata', classesData)

    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setClassesData(data.classes))
    }, [])
    // const classes =JSON.parse(classesData).Classes;
    const sortedClass = classesData.sort((a, b) => b.enrolled - a.enrolled);
    const popularClasses=(sortedClass).slice(0, 6);
    
    // const popularClasses =popularClasses.slice(0,6)
    // console.log('popular',popularClasses)

    return (
        <div className="w-full md:px-10 mx-auto ">
            <h1 className="text-4xl font-bold text-center my-24">Popular Classes</h1>

            <div className="grid md:grid-cols-3 gap-5 ">
               {
                popularClasses.map(cls=>
                   
                    <div key={cls.serialNumber} className="card  hover:shadow-7xl hover:rounded-sm hover:shadow-slate-700 rounded-none w-[400px] mx-auto xl:w-[400px] md:w-[360px] h-[450px] bg-base-100 shadow-xl">
                    <figure className="max-h-60"><img className="max-h-60 w-full" src="https://i.ibb.co/231KKHB/authentication-tokens.jpg" alt={cls.className} /></figure>
                    <div className="p-4">
                        <p className="bg-white absolute top-0 right-0 m-4 p-1 px-2 rounded font-semibold">${cls.price}</p>
                        <h2 className="card-title font-bold text-2xl">{cls.className}</h2>
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
                </div>
                    
                    
                    
                    )
               }
            </div>

        </div>
    );
};

export default PopularClasses;