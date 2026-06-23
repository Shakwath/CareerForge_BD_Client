import { Outlet } from 'react-router-dom';
import Navbar from '../Pages/Home/Navbar'
import Footer from '../Pages/Home/Footer';

const RootLayout = () => {
    return (
        <div className='bg-base'>
            <Navbar></Navbar>
            <div>
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default RootLayout;