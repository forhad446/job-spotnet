import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";


const PrivateRoute = ({ children }) => {

    const { user, isLoading } = useContext(AuthContext);

    if (isLoading) {
        return <span className="loading loading-spinner loading-lg"></span>
    } else if (user?.email) {
        return children
    } else {
        return <Navigate to='/login'></Navigate>
    }

};

export default PrivateRoute;