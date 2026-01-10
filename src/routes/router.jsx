import { createBrowserRouter } from "react-router";
import RootLayout from "../layouts/RootLayout";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Signin from "../pages/Signin";
import AppsDetails from "../pages/AppsDetails";
import ErrorPage from "../Error/error";

 const router = createBrowserRouter([
  {
    path: "/",
    element:<RootLayout/>,
    errorElement:<ErrorPage/>,
    children:[
        {
            path:"/",
            Component:Home
        },
        {
            path:"/home",
            Component:Home
        },
        {
            path:"/login",
            Component:Login
        },
        {
            path:"/signin",
            Component:Signin
        },
        {
            path:"/appsdetails",
            Component:AppsDetails
        }
    ],
  },
]);
export default router

