import { Outlet } from "react-router-dom";
import logo from './../assets/img/logo2.png'
import Link from "../Shared/Link";
import Footer from "../components/Footer";

const Root = () => {
    return (
        <div>
            <div className="drawer">
                <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col">
                    {/* Navbar */}
                    <div className="bg-[#F5F5F5]">
                        <div className="max-w-7xl mx-auto navbar ">
                            <div className="flex-none lg:hidden">
                                <label htmlFor="my-drawer-3" aria-label="open sidebar" className="btn btn-square btn-ghost">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                                </label>
                            </div>
                            <div className="flex-1 px-2 mx-2">
                                <div className="flex items-center gap-1">
                                    <img width="40px" height="40px" src={logo} alt="" />
                                    <h1 className="font-bold text-xl">Job Spotnet</h1>
                                </div>
                            </div>
                            <div className="flex-none hidden lg:block">
                                <ul className="menu menu-horizontal font-semibold text-md text-[#001f3f]">
                                    {/* Navbar menu content here */}
                                    <Link />
                                </ul>
                            </div>
                        </div>
                    </div>
                    {/* Page content here */}
                    <Outlet></Outlet>
                    {/* footer */}
                    <div className="mt-10">
                        <Footer />
                    </div>
                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-3" aria-label="close sidebar" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 min-h-full bg-base-200">
                        {/* Sidebar content here */}
                        <Link />
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Root;