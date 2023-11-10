import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import SingleJobCard from "../components/SingleJobCard";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";

const MyPostedJob = () => {
    const [jobs, setJobs] = useState([]);
    const [refresh, setRefresh] = useState(true);
    const { user } = useContext(AuthContext);

    const handleRefresh = () => {
        setRefresh(!refresh)
    }

    useEffect(() => {
        axios.get(`http://localhost:5000/jobs?email=${user?.email}`)
            .then(res => setJobs(res.data))
    }, [refresh, user])
    return (
        <div className="max-w-7xl mx-auto my-10">
            <div>
                <h2 className="text-3xl font-bold my-10 text-center tracking-tight sm:text-4xl sm:leading-none text-[#001f3f]">
                    My Posted Jobs
                </h2>

                <div className="min-h-screen bg-gradient-to-tr from-red-300 to-yellow-200 flex justify-center items-center py-20">
                    <div className="md:px-4 md:grid md:grid-cols-2 lg:grid-cols-3 gap-5 space-y-4 md:space-y-0">
                        {/* card number 1 */}
                        {
                            jobs.map(item => <SingleJobCard
                                key={item._id}
                                item={item}
                                handleRefresh={handleRefresh}
                            ></SingleJobCard>)
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyPostedJob;