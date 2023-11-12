import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import Swal from 'sweetalert2'
import withReactContent from "sweetalert2-react-content";
import { useParams } from "react-router-dom";


const MySwal = withReactContent(Swal)
const showSwalWithLink = () => {
    MySwal.fire({
        position: 'center',
        icon: 'success',
        title: 'Jobs data updated success',
        showConfirmButton: false,
        timer: 1500
    })
}

const UserUpdate = () => {

    const { user } = useContext(AuthContext);
    const { id } = useParams()
    const [job, setJob] = useState([]);

    useEffect(() => {
        axios.get(`https://job-spotnet-server.vercel.app/jobs/${id}`)
            .then(res => { setJob(res.data[0]) })
    }, [id])

    const handleUpdateJob = event => {
        event.preventDefault();
        const form = event.target;
        const job_title = form.job_title.value;
        const email = form.email.value;
        const job_type = form.job_type.value;
        const deadline = form.deadline.value;
        const minimum_price = form.minimum_price.value;
        const maximum_price = form.minimum_price.value;
        const description = form.description.value;
        const jobInfo = { job_title, email, job_type, deadline, minimum_price, maximum_price, description }

        axios
            .put(`https://job-spotnet-server.vercel.app/jobs/${id}`, jobInfo, {
                headers: {
                    "Content-Type": "application/json",
                },
            })
            .then((response) => {
                showSwalWithLink()
                setTimeout(() => {
                    window.location.href = "/myPostedJob";
                }, 1000)
            })
            .catch((error) => {
                console.error(error);
            });
    }
    return (
        <div className="max-w-7xl mx-auto my-10">
            <form onSubmit={handleUpdateJob}>
                <h1 className="text-2xl mb-2">Post new job</h1>
                <div className="job-info border-b-2 py-2 mb-5">
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm mb-2">Title</label>
                        <input className="appearance-none block w-full bg-white text-gray-700 border border-gray-400 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:border-gray-500" type="text" name="job_title" placeholder={job.job_title} autoFocus />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm mb-2">Email</label>
                        <input className="appearance-none block w-full bg-white text-gray-700 border border-gray-400 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:border-gray-500" type="email" name="email" value={user?.email} readOnly />
                    </div>
                    <div className="md:flex md:justify-between">
                        <div className="w-full md:w-5/12 mb-4 md:mb-0">
                            <label className="block text-gray-700 text-sm mb-2" >
                                Category
                            </label>
                            <div className="relative">
                                <select className="block appearance-none w-full bg-white border border-gray-400 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:border-gray-500" id="job-type" name="job_type">
                                    <option>Web Development</option>
                                    <option>Digital Marketing</option>
                                    <option>Graphics Design</option>
                                </select>

                                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                    <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                                </div>
                            </div>
                        </div>
                        {/* Location */}
                        <div className="w-full md:w-6/12 mb-4 md:mb-0">
                            <label className="block text-gray-700 text-sm mb-2">Deadline</label>
                            <input type="date" className="appearance-none block w-full bg-white text-gray-700 border border-gray-400 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:border-gray-500" id="location" name="deadline" placeholder={job.deadline} />


                        </div>
                    </div>
                    {/* end group */}


                    <div className="flex flex-wrap -mx-3">
                        {/* minimum_price */}
                        <div className="w-full md:w-1/2 px-3 mb-4 md:mb-0">
                            <label className="block text-gray-700 text-sm mb-2">Minimum price</label>
                            <input type="text" className="appearance-none block w-full bg-white text-gray-700 border border-gray-400 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:border-gray-500" name="minimum_price" placeholder={job.minimum_price} />
                        </div>

                        {/* Maximum price */}
                        <div className="w-full md:w-1/2 px-3 mb-4 md:mb-0">
                            <label className="block text-gray-700 text-sm mb-2">Maximum price</label>
                            <input type="text" className="appearance-none block w-full bg-white text-gray-700 border border-gray-400 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:border-gray-500" name="maximum_price" placeholder={job.maximum_price} />
                        </div>
                    </div>
                    {/* end group */}

                    {/* Description */}
                    <div>
                        <label className="block text-gray-700 text-sm mb-2">Description</label>
                        <textarea className="border border-gray-400" placeholder={job.description} name="description" id="description" cols="55" rows="4"></textarea>
                    </div>


                </div>
                {/* end job-info */}

                {/* Submit */}
                <div>
                    <button className="font-semibold tracking-wider transition-colors duration-200 bg-[#FF3811] text-white rounded-md px-6 py-4 hover:bg-green-700" type="submit">Update job</button>
                </div>
            </form>
        </div>
    );
};

export default UserUpdate;