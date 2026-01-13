import { createBrowserRouter } from "react-router";
import RootLayout from "../layouts/RootLayout";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Allapps from "../pages/Allapps";
import ErrorPage from "../Error/error";
import GameDetails from "../components/GameDetails";
import ProfilePage from "../pages/ProfilePage";

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
            path:"/Allapps",
            Component:Allapps
        },
        {
            path:"/gamedetails/:id",
            Component:GameDetails
        },
        {
            path:"/userprofile",
            Component:ProfilePage
        }
    ],
  },
]);
export default router

