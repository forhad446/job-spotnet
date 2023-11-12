import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../Pages/Home";
import ErrorPage from "../Pages/ErrorPage";
import Register from "../Pages/Register";
import Login from "../Pages/Login";
import Profile from "../Pages/Profile";
import PrivateRoute from "./PrivateRoute";
import AddJob from "../Pages/AddJob";
import MyPostedJob from "../Pages/MyPostedJob";
import BidsRequest from "../Pages/BidsRequest";
import JobDetails from "../Pages/JobDetails";
import UserUpdate from "../Pages/UserUpdate";
import MyBids from "../Pages/MyBids";

const Routes = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/profile',
                element: <PrivateRoute><Profile /></PrivateRoute>
            },
            {
                path: '/addJob',
                element: <PrivateRoute><AddJob /></PrivateRoute>
            },
            {
                path: '/myPostedJob',
                element: <PrivateRoute><MyPostedJob /></PrivateRoute>
            },
            {
                path: '/myBids',
                element: <PrivateRoute><MyBids /></PrivateRoute>
            },
            {
                path: '/bidsRequest',
                element: <PrivateRoute><BidsRequest /></PrivateRoute>
            },
            {
                path: '/myPostedJob/:id',
                element: <PrivateRoute><JobDetails /></PrivateRoute>
            },
            {
                path: '/user_update/:id',
                element: <PrivateRoute><UserUpdate /></PrivateRoute>
            }
        ]
    },
    {
        path: '/register',
        element: <Register></Register>
    },
    {
        path: '/login',
        element: <Login></Login>
    }
]);

export default Routes;