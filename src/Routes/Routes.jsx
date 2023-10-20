import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import AllDolls from "../pages/AllDolls/AllDolls";
import ErrorElement from "../pages/ErrorElement/ErrorElement";
import DollDetails from "../pages/Home/DollDetails/DollDetails";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import AddDoll from "../pages/AddDoll/AddDoll";
import MyDolls from "../pages/MyDolls/MyDolls";
import AllMyDolls from "../pages/AllMyDolls/AllMyDolls";
import PrivateRoute from "./PrivateRoute";
import UpdateDollData from "../pages/UpdateDollData/updateDollData";
import Dashboard from "../Layout/Dashboard";
import MyCart from "../pages/Dashboard/MyCart/MyCart";
import Payment from "../pages/Dashboard/Payment/Payment";
import EnrolledClass from "../pages/Dashboard/EnrolledClass/EnrolledClass";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/allDolls',
                element: <AllDolls></AllDolls>,
            },
            {
                path: '/subDolls/:subDollsId',
                element: <PrivateRoute><DollDetails></DollDetails></PrivateRoute>,
                loader: ({ params }) => fetch('https://art-school-server-ecru.vercel.app/dolls')
            },
            {
                path: '/login',
                element: <Login></Login>,
            },
            {
                path: '/signUp',
                element: <SignUp></SignUp>,
            },
            {
                path: '/addDoll',
                element: <PrivateRoute><AddDoll></AddDoll></PrivateRoute>,
            },
            {
                path: '/myDoll',
                element: <PrivateRoute><MyDolls></MyDolls></PrivateRoute>,
                // loader: ({ params }) => fetch('https://art-school-server-ecru.vercel.app/dolls')
            },
            {
                path: '/allMyDolls',
                element: <AllMyDolls></AllMyDolls>,
            },
            {
                path: '/updateDollData/:id',
                element: <UpdateDollData></UpdateDollData>,
                loader: ({ params }) => fetch(`https://art-school-server-ecru.vercel.app/dollsDetails/${params.id}`)
            },
            // {
            //     path: '*',
            //     element: <ErrorElement></ErrorElement>
            // }

        ],
    },
    {
        path: '*',
        element: <ErrorElement></ErrorElement>
    },
    {
        path:'dashboard',
        element: <Dashboard></Dashboard>,
        children:[
            {
                path: 'myCart',
                element: <MyCart></MyCart>
            },
            {
                path: 'payment',
                element: <Payment></Payment>
            },
            {
                path: 'enroll',
                element: <EnrolledClass></EnrolledClass>
            }
        ]
    }
]);

export default router;
