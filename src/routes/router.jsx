import { createBrowserRouter } from "react-router";
import RootLayout from "../layouts/RootLayout";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
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
            path:"/Register",
            Component:Register
        },
        {
            path:"/appsdetails",
            Component:AppsDetails
        }
    ],
  },
]);
export default router

