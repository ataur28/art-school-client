import { Link } from 'react-router-dom';
import fof from '../../assets/fourOFour.jpg'
import useTitle from '../../hook/useTitle';

const ErrorElement = () => {
    useTitle('Error');

    return (
        <div className='flex justify-center mt-6'>
            <div>
            <img className='text-center m-9' src={fof} alt="" />
            <Link to="/"><button className="btn btn-accent m-5 ">Go Back Home</button></Link>
            </div>
        </div>
    );
};

export default ErrorElement;