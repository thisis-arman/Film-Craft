import { useEffect, useState } from "react";


const PopularInstructors = () => {
    
    const [classesData, setClassesData] = useState([])
    const instructors = classesData.filter(user => user.role === "instructor")

    useEffect(() => {
        fetch('http://localhost:5000/users')
            .then(res => res.json())
            .then(data => setClassesData(data))
    }, [])
    
    const sortedClass = instructors.sort((a, b) => b.enrolled - a.enrolled);
    const popularClasses=(sortedClass).slice(0, 9);


    return (
        <div>
            <section className="text-gray-600 body-font">
  <div className="container w-5/6 pl-8 py-24 mx-auto">
    <div className="flex flex-col text-center w-full mb-20">
      <h1 className="text-2xl font-medium title-font mb-4 text-gray-900">OUR TOP INSTRUCTOR</h1>
      <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably  heard of them.</p>
    </div>

    <div className= " w-full -m-4 grid md:grid-cols-3">

    {
        popularClasses.map((item,i)=>
        // console.log(i,item)

        <div key={i} className="p-4 shadow-md m-4 border">
        <div className="h-full flex  flex-col items-center text-center">
          <img alt="team" className="flex-shrink-0 rounded-lg w-2/3 object-cover object-center mb-4" src={`${item?.photo}`} />
          <div className="w-full">
            <h2 className="title-font font-medium text-2xl text-gray-900">{item?.name}</h2>
            <h2 className="title-font font-medium text-lg text-gray-900">{item?.email}</h2>
            <p>Total Student: {item?.enrolled}</p>
            
            {/* <p className="mb-4">{(item?.background).slice(0,200)}..</p> */}
            <span className="inline-flex">
              <a className="text-gray-500">
                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-5 h-5" viewBox="0 0 24 24">
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                </svg>
              </a>
              <a className="ml-2 text-gray-500">
                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-5 h-5" viewBox="0 0 24 24">
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
                </svg>
              </a>
              <a className="ml-2 text-gray-500">
                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-5 h-5" viewBox="0 0 24 24">
                  <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
                </svg>
              </a>
            </span>
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

export default PopularInstructors;