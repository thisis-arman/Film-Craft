import { useEffect, useState } from "react";


const PopularInstructors = () => {
    
    const [classesData, setClassesData] = useState([])
    const instructors = classesData.filter(user => user.role === "instructor")

    useEffect(() => {
        fetch('https://film-craft-server.vercel.app/users')
            .then(res => res.json())
            .then(data => setClassesData(data))
    }, [])
    
    const sortedClass = instructors.sort((a, b) => b.enrolled - a.enrolled);
    const popularClasses=(sortedClass).slice(0, 9);


    return (
        <div className="px-4">
            <section className=" body-font">
  <div className="container w-5/6 bg-white border my-24 p-8 mx-auto">
    <div className="flex flex-col text-center w-full mb-10">
      <h1 className="text-3xl font-bold title-font  ">TOP INSTRUCTOR OF THE MONTH</h1>
     
    </div>

    <div className= " w-full grid md:grid-cols-4 gap-4 grid-cols-1">

    {
        popularClasses.map((item,i)=>
        // console.log(i,item)

        <div key={i} className=" shadow-md pb-4 border">
        <div>
          <img className="max-h-44 w-full" src={item?.photo} alt="" />
        </div>
        <div className="px-2 text-center">
          <h2 className="text-center text-xl font-bold">{item?.name}</h2>
          <p>Film Maker</p>
        </div>
        <hr />
        <div className="px-4 text-center">
          <p>{item?.email}</p>
        </div>
      </div>
        )
    }

   

      


    </div>
  </div>
</section>

        </div>
    );
};

export default PopularInstructors;