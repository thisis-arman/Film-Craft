import { useEffect, useState } from "react";


const ManageClasses = () => {
    const [classesData, setClassesData] = useState([])
    // console.log('classdata', classesData)

    useEffect(() => {
        fetch('http://localhost:5000/classes')
            .then(res => res.json())
            .then(data =>setClassesData(data))
    }, [])

    // const classes =JSON.parse(classesData).Classes;
    // const sortedClass = classesData.sort((a, b) => b.enrolled - a.enrolled);
    return (
        <div className="w-5/6 mx-auto">
            <h2 className="text-2xl font-semibold my-10 p-4">ALL Courses</h2>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr className="bg-base-200">
                            <th>SL</th>
                            <th>Class Name</th>
                            <th>Price</th>
                            <th>Instructor</th>
                            <th>Status</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
               {
                        classesData.map((item,i) => 
                        <tr key={i}>
                        <td>{i + 1}</td>
                        <td className="font-bold">{item.ClassName}</td>
                        <td className="text-center">${item.Price}</td>
                        <td className="">{item.instructor}</td>
                        <td className="font-bold text-green-300">Pending</td>
                        <td className="btn-ghost btn">X</td>
                    </tr>
                            )
                       
                       }
                     
                    </tbody>
                </table>
            </div>
        </div>
    )
}
export default ManageClasses;