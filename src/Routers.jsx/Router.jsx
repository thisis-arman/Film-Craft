import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main/Main";
import Home from "../Pages/Home/Home";
import SignIn from "../Pages/SignIn/SignIn";
import SignUp from "../Pages/SignUp/SignUp";
import Instructors from "../Pages/Instructors/Instructors";
import Classes from "../Pages/Classes/Classes";
import Dashboard from "../Layouts/Dashboard/Dashboard";
import ManageUsers from "../Pages/Dashboard/ManageUsers/ManageUsers";
import ManageClasses from "../Pages/Dashboard/ManageClasses/ManageClasses";
import AdminDashboard from "../Pages/Dashboard/AdminDashboard.jsx/AdminDashboard";
import ClassDetails from "../Pages/ClassDetails/ClassDetails";
import SelectedClasses from "../Pages/Dashboard/UserDashboard/SeletedClasses/SelectedClasses";
import UserDashboard from "../Pages/Dashboard/UserDashboard/SeletedClasses/UserDashboard";
import EnrolledClasses from "../Pages/Dashboard/UserDashboard/SeletedClasses/EnrolledClasses";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import AddClass from "../Pages/Dashboard/InstructorDashboard/AddCLass/AddClass";
import MyClass from "../Pages/Dashboard/InstructorDashboard/AddCLass/MyClass";
import PrivateRoute from "./PrivateRoute";
import AdminRoute from "./AdminRoute";
import InstructorRoute from "./InstructorRoute";
import UpdateClass from "./UpdateClass";
import Payment from "../Pages/Payments/Payment";
import PaymentHistory from "../Pages/Dashboard/UserDashboard/PaymentHistory";



const router = createBrowserRouter([
    {
      path: "/",
      element: <Main/>,
      errorElement:<ErrorPage/>,
      children: [
    {
        path:'/',
        element:<Home/>
    },
    {
        path:'instructors',
        element:<Instructors/>
    },
    {
        path:'classes',
        element:<Classes/>
    },
    {
        path:'/class/:id',
        element:<PrivateRoute><ClassDetails/></PrivateRoute>,
        loader:({params})=>fetch(`http://localhost:5000/classes/${params.id}`)
    },
    {
        path:'sign-up',
        element:<SignUp/>

    },
    {
        path:'login',
        element:<SignIn/>
    }
      ]
    },
    {
        path:'/dashboard',
        element:<Dashboard/>,
        children:[
            {
                path:'admin',
                element:<AdminRoute><AdminDashboard/></AdminRoute>
            },
            {
                path:'manage-users',
                element:<AdminRoute><ManageUsers/></AdminRoute>
            },
            {
                path:'manage-classes',
                element:<AdminRoute><ManageClasses/></AdminRoute>
            },
            {
                path:'selected-classes',
                element:<SelectedClasses/>
            },
            {
                path:'student',
                element:<UserDashboard/>
            },
            {
                path:'enrolled-classes',
                element:<EnrolledClasses/>
            },
            {
                path:'add-class',
                element:<InstructorRoute><AddClass/></InstructorRoute>
            },
            {
                path:'my-classes',
                element:<InstructorRoute><MyClass/></InstructorRoute>
            },
            {
                path:'/dashboard/my-classes/:id',
                element:<UpdateClass/>,
                loader:({params})=> fetch(`http://localhost:5000/classes/${params.id}`)
            },
            {
                path:'/dashboard/payment/:id',
                element:<Payment/>,
                loader:({params})=> fetch(`http://localhost:5000/carts/${params.id}`)
            },
            {
                path:'payment-history',
                element:<PaymentHistory/>
            }
        ]
    }
  ]);


  export default router;