import { useParams } from "react-router-dom";

const JobDetails = () => {
    const n = useParams();
    console.log(n);
    return (
        <div>
            <h1>this is job details page</h1>
        </div>
    );
};

export default JobDetails;