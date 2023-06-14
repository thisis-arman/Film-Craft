// import React, { useEffect, useState } from 'react';

import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init()

const Categories = () => {
    const [classesData, setClassesData] = useState([])
    // //console.log('classdata', classesData)

    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setClassesData(data.classes))
    }, [])
    // const classes =JSON.parse(classesData).Classes;
    // const sortedClass = classesData.sort((a, b) => b.enrolled - a.enrolled);
    const uniqueCategories = [...new Set(classesData.map((classItem) => classItem.category))];
    //console.log('unique', uniqueCategories)



    return (
        <div>

           {/*  <div className="flex justify-evenly">
                <h2 className="text-2xl font-semibold">{uniqueCategories[0]}</h2>
                <h2 className="text-2xl font-semibold">{uniqueCategories[1]}</h2>
                <h2 className="text-2xl font-semibold">{uniqueCategories[2]}</h2>
            </div> */}
           {/*  <div className="container-t">


            </div> */}
            <div>


            <section className=" body-font">
  <div className="container px-5 py-24 mx-auto flex flex-wrap">
    <div className=" w-full mb-20">
      <h1 className="sm:text-3xl text-4xl font-medium title-font  lg:mb-0 mb-4 text-center">Our Students Works</h1>
    
    </div>
    <div className="flex flex-wrap md:-m-2 -m-1">
      <div className="flex flex-wrap w-1/2">
        <div className="md:p-2 p-1 w-1/2">
          <video data-aos="zoom-in" autoPlay muted loop alt="gallery" className="w-full object-cover h-full object-center block" src="https://v4.cdnpk.net/videvo_files/video/free/video0464/large_watermarked/_import_612618b68aa248.24125508_FPpreview.mp4"></video>
        </div>
        <div className="md:p-2 p-1 w-1/2">
          <video data-aos="zoom-in-down" autoPlay muted loop  alt="gallery" className="w-full object-cover h-full object-center block" src="https://v1.cdnpk.net/videvo_files/video/free/video0531/large_watermarked/_import_62d544b44ee408.02699457_FPpreview.mp4"></video>
        </div>
        <div className="md:p-2 p-1 w-full">
          <video data-aos="zoom-in" alt="gallery" autoPlay muted loop className="w-full h-full object-cover object-center block" src="https://v4.cdnpk.net/videvo_files/video/free/video0456/large_watermarked/_import_60ab3490ab0e98.51056646_FPpreview.mp4" ></video>
        </div>
      </div>
      <div className="flex flex-wrap w-1/2">
        <div className="md:p-2 p-1 w-full">
          <video data-aos="zoom-in-up" alt="gallery" autoPlay muted loop className="w-full h-full object-cover object-center block" src="https://v4.cdnpk.net/videvo_files/video/free/video0467/large_watermarked/_import_61501de5399670.77244660_FPpreview.mp4" ></video>
        </div>
        <div className="md:p-2 p-1 w-1/2">
          <video data-aos="zoom-in-up" alt="gallery" autoPlay muted loop className="w-full object-cover h-full object-center block" src="https://v4.cdnpk.net/videvo_files/video/free/video0467/large_watermarked/_import_61543f48c35a48.19562449_FPpreview.mp4" ></video>
        </div>
        <div className="md:p-2 p-1 w-1/2">
          <video data-aos="zoom-in-up" autoPlay muted loop alt="gallery" className="w-full object-cover h-full object-center block" src="https://v4.cdnpk.net/videvo_files/video/free/video0464/large_watermarked/_import_612614be242fd7.60373525_FPpreview.mp4" ></video>
        </div>
      </div>
    </div>
  </div>
</section>

            </div>


        </div>
    );
};

export default Categories;