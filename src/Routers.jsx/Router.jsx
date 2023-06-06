import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main/Main";
import Home from "../Pages/Home/Home";
import SignIn from "../Pages/SignIn/SignIn";
import SignUp from "../Pages/SignUp/SignUp";
import Instructors from "../Pages/Instructors/Instructors";
import Classes from "../Pages/Classes/Classes";



const router = createBrowserRouter([
    {
      path: "/",
      element: <Main/>,
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
        path:'sign-up',
        element:<SignUp/>

    },
    {
        path:'login',
        element:<SignIn/>
    }
      ]
    }
  ]);


  export default router;