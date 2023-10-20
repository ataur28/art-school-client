import { Link, Outlet } from "react-router-dom";


const Dashboard = () => {
    return (
        <div className="drawer lg:drawer-open drawer-mobile">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col items-center justify-center">
                {/* Page content here */}
                <Outlet></Outlet>
                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                {/* <h2 className="uppercase">Dashboard</h2> */}
                <ul className="menu p-4 w-80 h-full bg-base-200 text-base-content">
                    <h2 className="uppercase text-2xl text-center">Dashboard</h2>
                    {/* Sidebar content here */}
                    <li><Link to='/dashboard/myCart'>My Selected Classes</Link></li>
                    <li><Link to='/dashboard/enroll'>My Enrolled Classes</Link></li>
                    <li><Link to='/dashboard/payment'>Payment</Link></li>
                    <li><Link to='/dashboard/payHistory'>Payment History</Link></li>
                    <div className="divider"></div>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/allDolls'>All Classes</Link></li>
                    <li><Link to='/about'>About</Link></li>
                </ul>

            </div>
        </div>
    );
};

export default Dashboard;