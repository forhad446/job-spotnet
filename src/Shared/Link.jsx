import { NavLink } from "react-router-dom";

const Link = () => {

    return (
        <>
            <li>
                <NavLink
                    to='/'
                    className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "text-red-400 underline" : ""
                    }
                >
                    Home
                </NavLink>
            </li>
            <li>
                <NavLink
                    to='/addJob'
                    className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "text-red-400 underline" : ""
                    }
                >
                    Add job
                </NavLink>
            </li>
            <li>
                <NavLink
                    to='/myPostedJob'
                    className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "text-red-400 underline" : ""
                    }
                >
                    My posted jobs
                </NavLink>
            </li>
            <li>
                <NavLink
                    to='/myBids'
                    className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "text-red-400 underline" : ""
                    }
                >
                    My Bids
                </NavLink>
            </li>
            <li>
                <NavLink
                    to='/bidsRequest'
                    className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "text-red-400 underline" : ""
                    }
                >
                    Bid Requests
                </NavLink>
            </li>
            <li>
                <NavLink
                    to='/register'
                    className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "text-red-400 underline" : ""
                    }
                >
                    Register
                </NavLink>
            </li>
            <li>
                <NavLink
                    to='/login'
                    className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "text-red-400 underline" : ""
                    }
                >
                    Login
                </NavLink>
            </li>
        </>
    );
};

export default Link;