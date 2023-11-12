import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { IoMdClock } from 'react-icons/Io';
import { FaCircleDollarToSlot } from 'react-icons/Fa6';
import { TbFileDescription } from 'react-icons/tb';
import banner from './../assets/img/web development.jpeg'
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";

const WebDevelopment = () => {

    const { user } = useContext(AuthContext);

    const [refresh, setRefresh] = useState(true);
    const [jobs, setJobs] = useState([]);
    const development = jobs.filter(item => item.job_type === 'Web Development')


    // const handleRefresh = () => {
    //     setRefresh(!refresh)
    // }

    useEffect(() => {
        axios.get(`https://job-spotnet-server.vercel.app/jobs`)
            .then(res => setJobs(res.data))
    }, [])

    return (
        <div>
            <div className="min-h-screen bg-gradient-to-tr from-red-300 to-yellow-200 flex justify-center items-center py-20">
                <div className="md:px-4 md:grid md:grid-cols-2 lg:grid-cols-3 gap-5 space-y-4 md:space-y-0">
                    {/* card number 1 */}
                    {
                        development.map(item =>
                            <div key={item._id} className="max-w-sm bg-white px-6 pt-6 pb-2 rounded-xl shadow-lg transform hover:scale-105 transition duration-500">
                                <h3 className="mb-3 text-xl font-bold text-indigo-600">{item?.job_type}</h3>
                                <div className="relative">
                                    <img className="w-full rounded-xl" src={banner} alt="Colors" />
                                    <p className="absolute top-0 bg-yellow-300 text-gray-800 font-semibold py-1 px-3 rounded-br-lg rounded-tl-lg">NEW</p>
                                </div>
                                <h1 className="mt-4 text-gray-800 text-2xl font-bold cursor-pointer">
                                    {item?.job_title}
                                </h1>
                                <div className="my-4">
                                    <div className="flex space-x-1 items-center">
                                        <span>
                                            <IoMdClock></IoMdClock>
                                        </span>
                                        <p> <span className="font-bold">{item?.deadline}</span>  Minutes</p>
                                    </div>
                                    <div className="flex space-x-1 items-center">
                                        <span>
                                            <FaCircleDollarToSlot />
                                        </span>
                                        <p className="font-bold"> {item?.minimum_price}$ - {item?.maximum_price}$</p>
                                    </div>
                                    <div className="flex space-x-1 items-center">
                                        <span>
                                            < TbFileDescription />
                                        </span>
                                        <p>
                                            {item.description}
                                        </p>
                                    </div>
                                    {
                                        item.email === user?.email ?
                                            <>

                                            </> : <>
                                                <Link to={`/myPostedJob/${item._id}`}>
                                                    <button className="mt-4 text-xl w-full text-white bg-indigo-600 py-2 rounded-xl shadow-lg">Bid Now</button>
                                                </Link>
                                            </>
                                    }

                                </div>
                            </div>)
                    }

                </div>
            </div>
        </div>
    );
};

export default WebDevelopment;