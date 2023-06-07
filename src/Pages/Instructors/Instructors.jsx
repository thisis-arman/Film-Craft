import { useEffect, useState } from "react";


const Instructors = () => {
    const [classesData, setClassesData] = useState([])
    console.log('classdata', classesData)

    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setClassesData(data.classes))
    }, [])



    return (
        <div>
          <section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-col text-center w-full mb-20">
      <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Our Team</h1>
      <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzeny you probably heard of them.</p>
    </div>
    <div className="flex flex-wrap -m-2">
        {
            classesData.map((item,i)=>
            // console.log(i, item?.instructors[0]?.name)
            <div key={i} className="p-2 lg:w-1/3 md:w-1/2 w-full">
      <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
        <img alt="team" className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src={item.instructors.image} />
        <div className="flex-grow">
          {/* <h2 className="text-gray-900 title-font font-medium">{item?.instructors[0].name}</h2> */}
          <h2 className="font-bold text-2xl">{item?.instructors[0]?.name}</h2>
          <p className="text-gray-500">{ item?.instructors[0]?.background}</p>
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