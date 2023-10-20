import { useState } from "react";
import {  useLoaderData, useParams } from "react-router-dom";
import useTitle from "../../../hook/useTitle";


const DollDetails = () => {
    useTitle(' Instructor Details');
    const { subDollsId } = useParams();
    // console.log(subDollsId);
    const [detail, setDetails] = useState(useLoaderData());
    // console.log(details);

    const doll = detail.find((doll) => doll._id == subDollsId)
    // console.log(doll);

    const { instructorPicture, instructorName, instructorEmail} = doll;

    return (
        <div className="mb-10">
            <h2 className="text-4xl font-bold mt-8 mb-8 text-center text-gray-600">Instructor Details</h2>
            <div className="card card-side bg-base-100 shadow-xl p-3">
                <figure><img className="ms-3 w-[300px] h-[300px] rounded-lg" src={instructorPicture} alt="Movie" /></figure>
                <div className="card-body">
                    <h2 className="card-title">Name: {instructorName}</h2>
                    <p>Seller Email: {instructorEmail}</p>
                    <div className="card-actions justify-end">
                        {/* <Link to='/'><button className="btn btn-primary">Go to Home</button></Link> */}
                        <button className="btn btn-primary">See Class</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DollDetails;