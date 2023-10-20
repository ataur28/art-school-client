
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";
import useTitle from "../../hook/useTitle";
import Swal from "sweetalert2";
const SignUp = () => {
    useTitle('SignUp');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const { createUser } = useContext(AuthContext);

    const handleSignUp = event => {
        event.preventDefault();
        setSuccess('');
        setError('');
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const confirmPassword = form.confirmPassword.value;
        const photo = form.photo.value;
        console.log(name, email, password, confirmPassword, photo);
        // validate
        if (!/(?=.*[A-Z])/.test(password)) {
            setError('Please add at least one uppercase in password filed');
            return;
        }
        else if (!/(?=.*[0-9].*[0-9])/.test(password)) {
            setError('Please add at least two numbers in password filed');
            return
        }
        else if (password.length < 6) {
            setError('Please add at least 6 characters in your password in password filed')
            return;
        }

        // createUser(email, password)
        //     .then(result => {
        //         const createdUser = result.user;
        //         // setSuccess('User Register successfully');
        //         // navigate(from, { replace: true })
        //         alert("User Register successfully")
        //         console.log(createdUser);
        //     })
        //     .catch(error => {
        //         console.log(error);
        //     })

        if (password == confirmPassword) {
            createUser(email, password)
                .then(result => {
                    const createdUser = result.user;
                    // setSuccess('User Register successfully');
                    // navigate(from, { replace: true })
                    // alert("User Register successfully")
                    Swal.fire('User Register successfully')
                    console.log(createdUser);
                })
                .catch(error => {
                    console.log(error);
                })
        }
        else {
            alert("Your password and confirm password is not same.Please give correct password.")
        }

    }
    return (
        <div>

            <div className="hero min-h-[700px] bg-base-100">

                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                        <h1 className="text-3xl text-gray-600 font-bold text-center">Sign Up</h1>
                        <form onSubmit={handleSignUp}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text"
                                    name="name"
                                    placeholder="name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="text"
                                    name="email"
                                    placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password"
                                    name="password"
                                    placeholder="password" className="input input-bordered" required />

                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Confirm Password</span>
                                </label>
                                <input type="password"
                                    name="confirmPassword"
                                    placeholder="password" className="input input-bordered" required />

                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo URL</span>
                                </label>
                                <input type="text"
                                    name="photo"
                                    placeholder="photo url" className="input input-bordered" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary" type="submit">Sign up</button>
                            </div>
                        </form>
                        <p className="my-4 text-center">Already Have an Account?  <Link className="text-orange-600 font-bold" to="/login">Login</Link></p>
                    </div>
                    <div className="mb-5 text-center">
                        <p className='text-red-600 font-bold'>{error}</p>
                        <p className='text-green-600 font-bold'>{success}</p>
                    </div>
                </div>
                {/* </div> */}
            </div>
        </div>
    );
};

export default SignUp;