import { useEffect, useState } from "react";


const Instructors = () => {
    const [classesData, setClassesData] = useState([])

    const instructors = classesData.filter(user => user.role === "instructor")
    //console.log('classdata', classesData)

    useEffect(() => {
        fetch('http://localhost:5000/users')
            .then(res => res.json())
            .then(data => setClassesData(data))
    }, [])


/*     useEffect(()=>{
      useEffec
    },[])
 */

    return (
        <div>
          <section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-col text-center w-full mb-20">
      <h1 className="sm:text-3xl md:text-4xl font-bold  mb-4 text-gray-900">Our Instructors</h1>
      <p className="lg:w-2/3 mx-auto leading-relaxed text-base">They egerly  want to help you to build your career in film making industry.We always want to serve our best to our students</p>
    </div>
    <div className="flex flex-wrap -m-2">
        {
            instructors.map((item,i)=>
            // //console.log(i, item?.instructors[0]?.name)
            <div key={i} className="p-2 lg:w-1/3 md:w-1/2 w-full">
      <div className="h-full flex items-center border-gray-200 border  rounded-lg">
        <img alt="team" className="w-28 h-full bg-gray-100 object-cover object-center flex-shrink-0  mr-4" src={item.photo} />
        <div className="flex-grow p-4">
          {/* <h2 className="text-gray-900 title-font font-medium">{item?.instructors[0].name}</h2> */}
          <h2 className="font-bold text-2xl">{item?.name}</h2>
         {item.email && <h2 className="font-semibold text-md"> {item?.email}</h2>}
         <p>Total Students: {item.enrolled}</p>
          {/* <p className="text-gray-500">{ item?.instructors[0]?.background}</p> */}
        </div>
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

export default Instructors;