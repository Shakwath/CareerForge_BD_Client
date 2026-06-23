
import { useNavigate } from 'react-router';

const ErrorPage = () => {

    const navigate = useNavigate() ;

    const handleError = ()=> {
        navigate('/') ;
    }
    return (
        <div>
            
            <div className='w-[85.94vw] mx-auto sora-font my-22 text-center'>
                <div className='w-[29.40vw] mx-auto h-auto'> <img src="/public/error.gif" alt="" /></div>
                    <p className='text-4xl text-gray-800 my-3'>Ooops! Page Not Found</p>
                    <div><button onClick={handleError} className='Button text-white bg-gray-800 my-3'>Go Back Home</button></div>
                
            </div>
        </div>
    );
};

export default ErrorPage;