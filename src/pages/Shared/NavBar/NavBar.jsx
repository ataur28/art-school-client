import { Link } from "react-router-dom";
import logo from '../../../assets/logo.png'
import { useContext } from "react";
import { AuthContext } from "../../../provider/AuthProvider";
import './NavBar.css'
import useCart from "../../../hook/useCart";


const NavBar = () => {
    const { user, logOut } = useContext(AuthContext);
    // console.log(user.photoURL)
    const [cart] = useCart();


    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.log(error))
    }

    const navItems = <>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/allDolls'>All Classes</Link></li>
        <li><Link to='/about'>About</Link></li>
        {/* <li><Link to='/blog'>Blog</Link></li> */}
        

        {/* <li><Link to='/addDoll'>Add A Doll</Link></li>
        <li><Link to='/myDoll'>My Doll</Link></li> */}
        {user?.email ? <>
            <li><Link to='/dashboard/myCart'>
                <button>
                    {/* <faShoppingBag></faShoppingBag> */}
                    <div >Dashboard <span className="badge badge-secondary">{cart?.length || 0}</span></div>
                </button>
            </Link>
            </li>
            <li><Link to='/addDoll'>Add A Class</Link></li>
            <li><Link to='/myDoll'>My classes</Link></li>
            <li><button onClick={handleLogOut}>LogOut</button></li>
        </> : <li><Link to='/login'>Login</Link></li>
        }
    </>
    return (
        <div className="navbar bg-base-100 h-24">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {navItems}
                    </ul>
                </div>
                <Link to="/" className="btn btn-ghost normal-case text-xl">
                <h1 className="text-4xl"><span className="text-red-500" >Art</span>School</h1>
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navItems}
                </ul>
            </div>
            <div className="navbar-end">
                {/* <button className="btn btn-accent">Button</button> */}

                {user && <div className='container'>
                    <img className="h-14 w-14 rounded-full" src={user.photoURL} alt="" />
                    <div className="overlay">
                        <div className="text">{user.displayName}</div>
                    </div>
                </div>}

                {/* <img className="h-14 w-14 rounded-full" src={user.photoURL} alt="" />  */}

            </div>
        </div>
    );
};

export default NavBar;