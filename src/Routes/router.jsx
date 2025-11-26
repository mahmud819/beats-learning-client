import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import MainLayout from "../MainLayout/MainLayout";
import Home from "../Components/Home/Home";
import About from "../Components/About/About";
import Courses from "../Components/Courses/Courses";
import Apparentiships from "../Components/Apprentships/Apparentiships";
import More from "../Components/More/More";
import Login from "../Login/Login";
import Regester from "../Regester/Regester";
import Error from "../ErrorPage/Error";


const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <Error></Error>,
    children:[
        {
            path: "/",
            element: <Home></Home>
        },
        {
            path: "/about",
            element: <About></About>
        },
        {
            path: "/courses",
            element: <Courses></Courses>
        },
        {
            path: "/apparentiships",
            element: <Apparentiships></Apparentiships>
        },
        {
            path: "/more",
            element: <More></More>
        },
        
        
    ]
  },
  {
    path: "/login",
    element: <Login></Login>
  },
  {
    path: "/signup",
    element: <Regester></Regester>
  },
]);

export default router;