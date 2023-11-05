import Banner from "../components/Banner";
import TabBased from "../components/tab_based";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <h2 className="text-3xl font-bold my-10 text-center tracking-tight sm:text-4xl sm:leading-none text-[#001f3f]">Browse By Category</h2>

            <div className="max-w-7xl mx-auto my-10">
                <TabBased></TabBased>
            </div>
        </div>
    );
};

export default Home;