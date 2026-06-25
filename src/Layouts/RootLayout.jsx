import { Outlet } from 'react-router-dom';
import Navbar from '../Components/Common/Navbar'
import Footer from '../Components/Common/Footer';

const RootLayout = () => {
    return (
            <div className="min-h-screen bg-[#fffaf2] text-slate-900 transition-colors duration-300 dark:bg-[#050816] dark:text-white">

            <Navbar></Navbar>
            <div>
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default RootLayout;