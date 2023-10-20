// import { useContext } from "react";
// import { AuthContext } from "../../provider/AuthProvider";
import { useLoaderData } from "react-router-dom";
import useTitle from "../../hook/useTitle";
import Swal from "sweetalert2";

const UpdateDollData = () => {
    useTitle('Update');
    const loadedDoll = useLoaderData();
    // const { user } = useContext(AuthContext);
    // const emails = user?.email
    const handleUpdate = event => {
        event.preventDefault();
        const form = event.target;
        const classPicture = form.classPicture.value;
        // const sellerName = form.sellerName.value;
        // const sellerEmail = form.sellerEmail.value;
        // const category = form.category.value;
        const className = form.className.value;
        const instructorName = form.instructorName.value;
        const availableSeats = form.availableSeats.value;
        const price = form.price.value;
        const doll = {classPicture, className, instructorName,availableSeats, price}
        console.log(doll);

        fetch(`https://art-school-server-ecru.vercel.app/dollsDetails/${loadedDoll._id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(doll)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount>0) {
                    // alert('Update Successfully')
                    Swal.fire('Update Successfully')
                }
            })

    }
    return (
        <div>
            <h2 className="text-4xl font-bold pt-8 pb-8 text-center text-gray-600">Update Class Data</h2>
            <form onSubmit={handleUpdate} >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Class Name</span>
                        </label>
                        <input type="text" name="className" 
                        defaultValue={loadedDoll?.className} placeholder="class name" className="input input-bordered" />
                    </div>
                    
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Instructor Name</span>
                        </label>
                        <input type="text" name="instructorName" 
                        defaultValue={loadedDoll?.instructorName} placeholder="instructor name" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Available Seats</span>
                        </label>
                        <input type="text" name="availableSeats"
                        defaultValue={loadedDoll?.availableSeats}  placeholder="available seats " className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Price</span>
                        </label>
                        <input type="text" name="price"
                        defaultValue={loadedDoll?.price}  placeholder="price " className="input input-bordered" />
                    </div>
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Class Picture URL</span>
                    </label>
                    <input type="text" name="classPicture" 
                    defaultValue={loadedDoll?.classPicture} placeholder="class picture  url" className="input input-bordered" />
                </div>
                <div className="form-control mt-6">
                    <button className="btn btn-primary mb-6" type="submit">Confirmed Update</button>
                </div>
            </form>
            


        </div>
    );
};

export default UpdateDollData;