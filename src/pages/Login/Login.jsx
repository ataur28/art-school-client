import { useContext, useState } from "react";
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";

import { AuthContext } from "../../provider/AuthProvider";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import app from "../../firebase/firebase.config";
import useTitle from "../../hook/useTitle";
import Swal from "sweetalert2";

const Login = () => {
    useTitle('Login');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const { signIn } = useContext(AuthContext)

    const [user, setUser] = useState(null);
    const auth = getAuth(app);
    //  console.log(app)
    const provider = new GoogleAuthProvider();


    const navigate = useNavigate();
    const location = useLocation();
    // console.log('login page location', location)
    const from = location.state?.from?.pathname || '/'

    const handleLogin = event => {
        event.preventDefault();
        setSuccess('');
        setError('');
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        // validate
        if (!/(?=.*[A-Z])/.test(password)) {
            setError('Incorrect Password');
            return;
        }
        else if (!/(?=.*[0-9].*[0-9])/.test(password)) {
            setError('Incorrect Password');
            return
        }
        else if (password.length < 6) {
            setError('Incorrect Password')
            return;
        }

        signIn(email, password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);

                // alert("User login successful")
                Swal.fire('User login successful')
                navigate(from, { replace: true })
                // Navigate(from, { replace: true })
            })
            .catch(error => {
                console.log(error)
            })
    }

    const handleGoogleSingIn = (event) => {
        event.preventDefault();
        signInWithPopup(auth, provider)
            // googleSignIn(auth, provider)
            .then(result => {
                const LoggedInUser = result.user;
                console.log(LoggedInUser)
                navigate(from, { replace: true })
                setUser(LoggedInUser);
                // alert("User login successful")
                Swal.fire('User login successful')

            })
            .catch(error => {
                console.log('error', error.message)
            })
    }

    return (
        <div>
            <div className="hero min-h-[600px] bg-base-100">


                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                        <h1 className="text-3xl text-gray-600 font-bold text-center">Login</h1>
                        <form onSubmit={handleLogin}>
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
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary" type="submit">Login</button>
                                <button onClick={handleGoogleSingIn} className="btn btn-secondary mt-4">Google Login</button>
                            </div>
                        </form>
                        <p className="my-4 text-center">New to Doll House?  <Link className="text-orange-600 font-bold" to="/signUp">SignUp</Link></p>
                    </div>
                    <div className="mt-4 mb-10 text-center">
                        <p className='text-red-600 font-bold'>{error}</p>
                        <p className='text-green-600 font-bold'>{success}</p>
                    </div>
                </div>
                {/* </div> */}
            </div>
        </div>
    );
};

export default Login;