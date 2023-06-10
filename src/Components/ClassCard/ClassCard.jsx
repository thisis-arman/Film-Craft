import { Link } from "react-router-dom";


const ClassCard = ({cls}) => {
    return (
        <div  className="">
                <Link to={`/class/${cls._id}`} key={cls?.serialNumber}  className={` card  hover:shadow-7xl hover:rounded-sm hover:shadow-slate-700 rounded-none w-[400px] mx-auto xl:w-[400px] md:w-[360px] h-[450px] bg-base-100 shadow-xl ${cls.availableSeats <1 && 'bg-red-500 text-white'}`}>
                    <figure className="max-h-60"><img className="max-h-60 w-full" src={cls?.image} alt={cls?.ClassName} /></figure>
                    <div className="p-4">
                        <p className="bg-white absolute top-0 right-0 m-4 p-1 px-2 rounded font-semibold">${cls?.Price}</p>
                        <h2 className="card-title font-bold text-2xl">{cls.ClassName}</h2>
                        <p className="py-3">{cls?.keyLearnings?.brief}</p>
                        <div>
                        <p className="py-1 text-sm" >Enrolled: {cls?.enrolled} students</p>
                        <p className="py-1 text-sm" >Reviews: {cls?.reviews} ({cls?.numberOfReviews} +reviews)</p>
                        </div>
                       <p className="text-sm py-1">{cls?.level} -{cls?.category}- {cls.duration}</p>
                        <div className="card-actions justify-end">
                            {/* <button className="btn-primary">Buy Now</button> */}
                        </div>
                    </div>
                </Link>
                    
        </div>
    );
};

export default ClassCard;