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


const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
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
]);

export default router;