import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import { signOut } from "firebase/auth";
import auth from "../config/firebase.config";
import { RxAvatar } from 'react-icons/Rx';

const Link = () => {

    const { user } = useContext(AuthContext);
    console.log(user);
    const avatar = user?.photoURL;
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
            {
                user?.email ? <>
                    <li>
                        <NavLink
                            to='/register'
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "text-red-400 underline" : ""
                            }
                        >
                            {user?.displayName ? user?.displayName : 'Profile'}
                        </NavLink>
                    </li>
                    <li className="hidden lg:block ">
                        <NavLink
                            to='/login'
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "text-red-400 underline" : ""
                            }
                        >
                            {user?.email ? <img className="w-6 rounded-full" src={user?.photoURL} alt="" /> : <RxAvatar className=""/> }
                            
                            
                        </NavLink>
                    </li>
                    <li>
                        <NavLink onClick={() => {
                            signOut(auth)
                                .then(() => {
                                    console.log('Sign-out successful');
                                }).catch((error) => {
                                    console.log(error.message);
                                });
                        }}
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "text-red-400 underline" : ""
                            }
                        >
                            Log Out
                        </NavLink>
                    </li>
                </> : <>
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
            }
        </>
    );
};

export default Link;