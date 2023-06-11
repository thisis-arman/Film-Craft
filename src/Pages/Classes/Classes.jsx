import { useEffect, useState } from "react";
import ClassCard from "../../Components/ClassCard/ClassCard";


const Classes = () => {

   const [classesData, setClassesData] = useState([])
    //console.log('classdata', classesData)

    useEffect(() => {
        fetch('http://localhost:5000/classes')
            .then(res => res.json())
            .then(data => setClassesData(data))
    }, [])
    
    // const classes =JSON.parse(classesData).Classes;
    const sortedClass = classesData.sort((a, b) => b.enrolled - a.enrolled);
    const approvedClasses =classesData.filter (item =>item.status === 'approved')
    //console.log(approvedClasses);
    // const popularClasses=(sortedClass).slice(0, 6);
    
    // const popularClasses =popularClasses.slice(0,6)
    // //console.log('popular',popularClasses)

    return (
        <div className="w-full md:px-10 mx-auto ">
            <h1 className="text-4xl font-bold text-center my-24">Explore All Classes</h1>

            <div className="grid md:grid-cols-3 gap-5 ">
               {
                approvedClasses.map((cls,i)=>
                   
                <ClassCard  key={i} cls={cls}></ClassCard>
                    
                    
                    )
               }
            </div>

        </div>
    );
};

export default Classes;