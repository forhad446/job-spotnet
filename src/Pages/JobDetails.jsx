import { useParams } from "react-router-dom";
import { IoMdClock } from 'react-icons/Io';
import { FaCircleDollarToSlot } from 'react-icons/Fa6';
import { TbFileDescription } from 'react-icons/tb';
import { useEffect, useState } from "react";
import axios from "axios";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import Swal from 'sweetalert2'
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal)
const showSwalWithLink = () => {
    MySwal.fire({
        position: 'center',
        icon: 'success',
        title: 'Posted Jobs added on database',
        showConfirmButton: false,
        timer: 1500
    })
}

const JobDetails = () => {
    const { id } = useParams();
    const [jobs, setJobs] = useState([]);

    const { user } = useContext(AuthContext);
    // const notify = () => toast('signUpError');

    const handleBidJob = event => {
        event.preventDefault();
        const form = event.target;
        const buyerEmail = form.buyerEmail.value;
        const yourEmail = form.email.value;
        const deadline = form.deadline.value;
        const price = form.price.value;

        const bidInfo = { buyerEmail, yourEmail, deadline, price }
        console.log(bidInfo);

        // axios.post('http://localhost:5000/addJobs', jobInfo)
        //     .then((response) => {
        //         console.log(response);
        //         showSwalWithLink();
        //         location.href = '/myPostedJob';
        //     })
        //     .catch((error) => {
        //         console.log(error);
        //     });
    }

    useEffect(() => {
        axios.get(`http://localhost:5000/jobs/${id}`)
            .then(res => setJobs(res.data))
    }, [])
    return (
        <div className="max-w-7xl mx-auto my-10">
            <div className="flex justify-between items-center gap-5">
                {
                    jobs.map(item =>
                        <div key={item._id} className="max-w-sm bg-white px-6 pt-6 pb-2 rounded-xl shadow-lg transform hover:scale-105 transition duration-500">
                            <h3 className="mb-3 text-xl font-bold text-indigo-600">Beginner Friendly</h3>
                            <div className="relative">
                                <img className="w-full rounded-xl" src="https://images.unsplash.com/photo-1541701494587-cb58502866ab?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" alt="Colors" />
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
                                <button className="mt-4 text-xl w-full text-white bg-indigo-600 py-2 rounded-xl shadow-lg">place your bid form</button>
                            </div>
                        </div>)
                }
                {/* 2nd */}
                <div>
                    <form onSubmit={handleBidJob}>
                        <h1 className="text-2xl mb-2">Bid on the project</h1>
                        <div className="job-info border-b-2 py-2 mb-5">
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm mb-2">Buyer Email</label>
                                <input className="appearance-none block w-full bg-white text-gray-700 border border-gray-400 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:border-gray-500" type="email" name="buyerEmail" value={jobs[0]?.email} readOnly />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm mb-2">Email</label>
                                <input className="appearance-none block w-full bg-white text-gray-700 border border-gray-400 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:border-gray-500" type="email" name="email" value={user?.email} readOnly />
                            </div>
                            <div className="md:flex md:justify-between">
                                <div className="w-full md:w-5/12 mb-4 md:mb-0">
                                    <label className="block text-gray-700 text-sm mb-2">Price</label>
                                    <input type="text" className="appearance-none block w-full bg-white text-gray-700 border border-gray-400 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:border-gray-500" id="price" name="price" placeholder="Bidding Price" required />
                                </div>
                                <div className="w-full md:w-6/12 mb-4 md:mb-0">
                                    <label className="block text-gray-700 text-sm mb-2">Deadline</label>
                                    <input type="date" className="appearance-none block w-full bg-white text-gray-700 border border-gray-400 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:border-gray-500" id="location" name="deadline" placeholder="Schwerin" required />
                                </div>
                            </div>


                        </div>

                        {/* Submit */}
                        <div className="flex justify-center">
                            <button className="font-semibold tracking-wider transition-colors duration-200 bg-[#FF3811] text-white rounded-md px-6 py-4 text-center hover:bg-green-700" type="submit"> Bid on the project</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default JobDetails;