import { Link } from "react-router-dom";


const SubCategory = ({ subDolls }) => {
    // console.log(subDolls);
    const { _id, instructorPicture, instructorName, 
        className} = subDolls;
    return (
        <div>
            <div className="card w-96 glass bg-slate-200 mb-4 mt-4">
                <figure><img className="border-cyan-400 rounded-lg m-5 h-[300px] w-[300px]" src={instructorPicture} alt="car!" /></figure>
                <div className="card-body">
                    <h2 className="card-title">Instructor Name: {instructorName}</h2>
                    <h2 className="card-title">Class Name: {className}</h2>
                    
                    <div className="card-actions justify-end">
                    
                        <Link to={`/subDolls/${_id}`}><button className='btn btn-primary'>View Details</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SubCategory;