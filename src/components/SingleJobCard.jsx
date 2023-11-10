import axios from "axios";
import { Link } from "react-router-dom";
import Swal from 'sweetalert2'
import withReactContent from "sweetalert2-react-content";


const MySwal = withReactContent(Swal)
const showSwalWithLink = () => {
    MySwal.fire({
        position: 'center',
        icon: 'success',
        title: 'data deleted success',
        showConfirmButton: false,
        timer: 1500
    })
}

const SingleJobCard = ({ item, handleRefresh }) => {
    const { _id, deadline, description, email, job_title, job_type, maximum_price, minimum_price } = item;

    const handleDelete = (id) => {
        axios.delete(`http://localhost:5000/jobs/${id}`)
            .then(() => {
                handleRefresh()
                showSwalWithLink()
            })
    }


    return (
        <div className="max-w-sm bg-white px-6 pt-6 pb-2 rounded-xl shadow-lg transform hover:scale-105 transition duration-500">
            <div className="relative">
                <img className="w-full rounded-xl" src="https://images.unsplash.com/photo-1541701494587-cb58502866ab?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" alt="Colors" />
                <h1 className="my-4 text-gray-800 text-2xl font-bold cursor-pointer">
                    {job_title}
                </h1>
                <div className="flex justify-between">
                    <h1 className="mt-1 text-gray-500 text-md font-medium">
                        {email}
                    </h1>
                    <h1 className="font-thin text-sm tracking-wider transition-colors duration-200 text-white rounded-md px-1 py-1 bg-green-700">
                        {job_type}
                    </h1>
                </div>
                <div className="my-4">
                    <div className="flex space-x-1 items-center">
                        <p>Deadline : <span className="font-bold">{deadline}</span></p>
                    </div>
                    <div className="flex justify-between items-center my-2">
                        <p>Min Price : <span className="font-bold">{minimum_price}</span></p>
                        <p>Max Price : <span className="font-bold">{maximum_price}</span></p>
                    </div>
                    <div className="flex space-x-1 items-center">
                        <p>
                            {description}
                        </p>
                    </div>
                    <div className="flex justify-between mt-4">
                        <Link to={`/user_update/${_id}`}>
                            <button className=" font-semibold tracking-wider transition-colors duration-200 bg-[#FF3811] text-white px-6 py-2 hover:bg-green-700 rounded-xl shadow-lg">Update Now</button>
                        </Link>
                        <Link>
                            <button onClick={() => handleDelete(_id)} className=" font-semibold tracking-wider transition-colors duration-200 bg-[#FF3811] text-white px-6 py-2 hover:bg-green-700 rounded-xl shadow-lg">Delete Now</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleJobCard;