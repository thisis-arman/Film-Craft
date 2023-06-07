// import React, { useEffect, useState } from 'react';

import { useEffect, useState } from "react";

const Categories = () => {
    const [classesData, setClassesData] = useState([])
    console.log('classdata', classesData)

    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setClassesData(data.classes))
    }, [])
    // const classes =JSON.parse(classesData).Classes;
    // const sortedClass = classesData.sort((a, b) => b.enrolled - a.enrolled);
    const uniqueCategories = [...new Set(classesData.map((classItem) => classItem.category))];
    console.log('unique',uniqueCategories)

   

    return (
        <div>
            {/* <h2>length : {uniqueCategories.length}</h2> */}
            {/* <div>
                {
                    uniqueCategories.map((category, index) => 
                    <div key={index} className="flex justify-evenly">
                        <div>
                        <img src="" alt="" />
                        <h2 className="2xl font-semibold">{category}</h2>
                        </div>


                    </div>
                    
                    
                    
                    )
                }
            </div> */}
            <div className="flex justify-evenly">
                <h2 className="text-2xl font-semibold">{uniqueCategories[0]}</h2>
                <h2 className="text-2xl font-semibold">{uniqueCategories[1]}</h2>
                <h2 className="text-2xl font-semibold">{uniqueCategories[2]}</h2>
            </div>
            
        </div>
    );
};

export default Categories;