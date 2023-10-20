import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import useTitle from "../../hook/useTitle";
import Swal from "sweetalert2";


const AddDoll = () => {
    useTitle('Add A Class');

    const { user } = useContext(AuthContext);
    const instructorEmail = user?.email
    const instructorName = user?.displayName

    const handleAddDoll = event => {
        event.preventDefault();
        const form = event.target;
        const className = form.className.value;
        const classPicture = form.classPicture.value;
        const instructorName = form.instructorName.value;
        const instructorEmail = form.instructorEmail.value;
        const availableSeats = form.availableSeats.value;
        const price = form.price.value;
        // const quantity = form.quantity.value;
        // const details = form.details.value;
        // const picture = form.picture.value;
        const doll = { className, classPicture, instructorName, instructorEmail, availableSeats, price }
        console.log(doll);

        fetch('https://art-school-server-ecru.vercel.app/dolls', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(doll)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    // alert('Add A Doll Successfully')
                    Swal.fire('Add A class Successfully')
                }
            })

    }


    return (

        <div>
            <h2 className="text-4xl font-bold pt-8 pb-8 text-center text-gray-600">Add A Class</h2>
            <form onSubmit={handleAddDoll} >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Class Name</span>
                        </label>
                        <input type="text" name="className" placeholder="class name" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Class Picture URL</span>
                        </label>
                        <input type="text" name="classPicture" placeholder="class picture url" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Instructor Name</span>
                        </label>
                        <input type="text" name="instructorName"
                            defaultValue={instructorName} placeholder="instructor name" className="input input-bordered" />
                    </div>
                    
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Instructor Email</span>
                        </label>
                        <input type="email" name="instructorEmail"
                        defaultValue={instructorEmail}  placeholder="instructor email" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Available Seats</span>
                        </label>
                        <input type="text" name="availableSeats" placeholder="available seats" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Price</span>
                        </label>
                        <input type="text" name="price" placeholder="price" className="input input-bordered" />
                    </div>
                    
                </div>
                
                <div className="form-control mt-6">
                    <button className="btn btn-primary mb-6" type="submit">Add A Class</button>
                </div>
            </form>


        </div>

    );
};

export default AddDoll;