import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";

const MyBids = () => {

    const [jobs, setJobs] = useState([]);
    const [refresh, setRefresh] = useState(true);
    const { user } = useContext(AuthContext);
    console.log(jobs);

    const handleRefresh = () => {
        setRefresh(!refresh)
    }

    useEffect(() => {
        axios.get(`https://job-spotnet-server.vercel.app/bidJobs?email=${user?.email}`)
            .then(res => setJobs(res.data))
    }, [refresh, user])
    return (
        <div className="max-w-7xl mx-auto my-10">
            <h2 className="text-3xl font-bold my-5 text-center tracking-tight sm:text-4xl sm:leading-none text-[#001f3f]">
                My Bid Request
            </h2>
            <div className="container max-w-3xl px-4 mx-auto sm:px-8">
                <div className="py-8">
                    <div className="px-4 py-4 -mx-4 overflow-x-auto sm:-mx-8 sm:px-8">
                        <div className="inline-block min-w-full overflow-hidden rounded-lg shadow">
                            <table className="min-w-full leading-normal">
                                <thead>
                                    <tr>
                                        <th scope="col" className="px-5 py-3 text-sm font-normal text-left text-gray-800 uppercase bg-white border-b border-gray-200">
                                            Job title
                                        </th>
                                        <th scope="col" className="px-5 py-3 text-sm font-normal text-left text-gray-800 uppercase bg-white border-b border-gray-200">
                                            Email
                                        </th>
                                        <th scope="col" className="px-5 py-3 text-sm font-normal text-left text-gray-800 uppercase bg-white border-b border-gray-200">
                                            Deadline
                                        </th>
                                        <th scope="col" className="px-5 py-3 text-sm font-normal text-left text-gray-800 uppercase bg-white border-b border-gray-200">
                                            Status
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        jobs.map(item =>
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
                                                        <span aria-hidden="true" className="absolute inset-0 bg-green-200 rounded-full opacity-50">
                                                        </span>
                                                        <span className="relative">
                                                            {item.status}
                                                        </span>
                                                    </span>
                                                </td>
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

export default MyBids;