import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";

const BidsRequest = () => {

    const [jobs, setJobs] = useState([]);
    const [refresh, setRefresh] = useState(true);
    const [accept, setAccept] = useState('');
    const { user } = useContext(AuthContext);
    const currentEmail = user?.email;

    const handleRefresh = () => {
        setRefresh(!refresh)
    }
    const usersBid = jobs.filter(item => item.yourEmail !== currentEmail);
    console.log(usersBid);

    const handleAccept = id => {
        const status = 'In Progress';
        const jobInfo = { status }
        // clear the status
        setAccept('');

        axios
            .put(`https://job-spotnet-server.vercel.app/bidJobs/${id}`, jobInfo, {
                headers: {
                    "Content-Type": "application/json",
                },
            })
            .then((response) => {
                setAccept('In Progress')
            })

            .catch((error) => {
                console.error(error);
            });
    }
    const handleReject = id => {
        const status = 'Rejected';
        const jobInfo = { status }

        // clear the status
        setAccept('');

        axios
            .put(`https://job-spotnet-server.vercel.app/bidJobs/${id}`, jobInfo, {
                headers: {
                    "Content-Type": "application/json",
                },
            })
            .then((res) => {
                setAccept('Rejected')
            })

            .catch((error) => {
                console.error(error);
            });
    }

    useEffect(() => {
        axios.get(`https://job-spotnet-server.vercel.app/bidJobs?yourEmail=${currentEmail}`)
            .then(res => {
                setJobs(res.data);
            })
    }, [refresh, currentEmail])
    return (
        <div className="max-w-7xl mx-auto my-10">
            <h2 className="text-3xl font-bold my-5 text-center tracking-tight sm:text-4xl sm:leading-none text-[#001f3f]">
                Users Bid Request
            </h2>
            <div className="container max-w-5xl px-4 mx-auto sm:px-8">
                <div className="py-8">
                    <div className="px-4 py-4 -mx-4 overflow-x-auto sm:-mx-8 sm:px-8">
                        <div className="inline-block min-w-full overflow-hidden rounded-lg shadow">
                            <table className="min-w-full leading-normal">
                                <thead>
                                    <tr>
                                        <th scope="col" className="px-5 py-3 text-sm font-normal text-center text-gray-800 uppercase bg-white border-b border-gray-200">
                                            Job title
                                        </th>
                                        <th scope="col" className="px-5 py-3 text-sm font-normal text-center text-gray-800 uppercase bg-white border-b border-gray-200">
                                            Email
                                        </th>
                                        <th scope="col" className="px-5 py-3 text-sm font-normal text-center text-gray-800 uppercase bg-white border-b border-gray-200">
                                            Deadline
                                        </th>
                                        <th scope="col" className="px-5 py-3 text-sm font-normal text-center text-gray-800 uppercase bg-white border-b border-gray-200">
                                            Price
                                        </th>
                                        <th scope="col" className="px-5 py-3 text-sm font-normal text-center text-gray-800 uppercase bg-white border-b border-gray-200">
                                            Status
                                        </th>
                                        <th scope="col" className="px-5 py-3 text-sm font-normal text-center text-gray-800 uppercase bg-white border-b border-gray-200">
                                            Action
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        usersBid.map(item =>
                                            <tr key={item._id}>
                                                <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
                                                    <div >
                                                        <div className="">
                                                            <p className="text-gray-900 whitespace-no-wrap">
                                                                {item.job_title}
                                                            </p>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
                                                    <p className="text-gray-900 whitespace-no-wrap">
                                                        {item.buyerEmail}
                                                    </p>
                                                </td>
                                                <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
                                                    <p className="text-gray-900 whitespace-no-wrap">
                                                        {item.deadline}
                                                    </p>
                                                </td>
                                                <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
                                                    <span className="relative inline-block px-3 py-1 font-semibold leading-tight text-green-900">
                                                        <span aria-hidden="true" className="absolute inset-0 rounded-full opacity-50">
                                                        </span>
                                                        <span className="relative">
                                                            {item.price}$
                                                        </span>
                                                    </span>
                                                </td>
                                                <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
                                                    <span className="relative inline-block px-3 py-1 font-semibold leading-tight text-green-900">
                                                        <span aria-hidden="true" className="absolute inset-0 bg-green-200 rounded-full opacity-50">
                                                        </span>
                                                        <span className="relative">
                                                            {item.status}
                                                        </span>
                                                    </span>
                                                </td>
                                                {
                                                    item.status=='pending' ?
                                                    <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
                                                        <span className="relative inline-block px-3 py-1 font-semibold leading-tight text-green-900">
                                                            <span aria-hidden="true" className="absolute inset-0 rounded-full opacity-50">
                                                            </span>
                                                            <span className="relative flex gap-5">
                                                                <button onClick={() => handleAccept(item._id)} className="font-semibold tracking-wider transition-colors duration-200 bg-[#FF3811] text-white rounded-md px-5 py-2 text-center hover:bg-green-700">Accept</button>
                                                                <button onClick={() => handleReject(item._id)} className="font-semibold tracking-wider transition-colors duration-200 bg-[#FF3811] text-white rounded-md px-5 py-2 text-center hover:bg-green-700">Reject</button>
                                                            </span>
                                                        </span>
                                                    </td> : 
                                                    <>
                                                    
                                                    </>
                                                }

                                            </tr>
                                        )
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default BidsRequest;