import sample from './../assets/video/banner logo.mp4';
import banner from './../assets/img/banner.jpg'
const Banner = () => {
    return (
        <div className="relative">
            <img
                src={banner}
                className="absolute inset-0 object-cover w-full h-full"
                alt=""
            />
            <div className="relative bg-gray-900 bg-opacity-75">
                <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                    <div className="flex flex-col items-center justify-between xl:flex-row">
                        <div className="w-full max-w-xl mb-12 xl:mb-0 xl:pr-16 xl:w-7/12">
                            <h2 className="max-w-lg mb-6 text-3xl font-bold tracking-tight text-white sm:text-4xl sm:leading-none">
                                Find, Apply, and Succeed with Us
                            </h2>
                            <p className="max-w-xl mb-4 text-base text-gray-400 md:text-lg">
                                <span className='text-[#fff]'>Job Spotnet</span> is a comprehensive and supportive platform for job seekers. It helps them find job opportunities, apply for those jobs, and ultimately succeed in their careers
                            </p>
                            <button className="inline-flex items-center font-semibold tracking-wider transition-colors duration-200 bg-[#FF3811] text-white rounded-md px-6 py-4 hover:bg-green-700">
                                Learn More
                            </button>
                        </div>
                        <div className="w-full max-w-xl xl:px-8 xl:w-5/12">
                            <div className=" rounded shadow-2xl p-7 sm:p-10">
                                <video className='videoTag' autoPlay loop muted>
                                    <source src={sample} type='video/mp4' />
                                </video>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;