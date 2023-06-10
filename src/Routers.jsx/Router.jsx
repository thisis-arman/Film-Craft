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
        element:<ClassDetails/>,
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
        path:'dashboard',
        element:<Dashboard/>,
        children:[
            {
                path:'admin',
                element:<AdminDashboard/>
            },
            {
                path:'manage-users',
                element:<ManageUsers/>
            },
            {
                path:'manage-classes',
                element:<ManageClasses/>
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
                element:<AddClass/>
            },
            {
                path:'my-classes',
                element:<MyClass/>
            }
        ]
    }
  ]);


  export default router;