import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../Pages/Home";

const Routes = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        errorElement: <div>error page</div>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            }
        ]
    },
]);

export default Routes;