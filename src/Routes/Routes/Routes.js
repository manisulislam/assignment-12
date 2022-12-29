import { createBrowserRouter } from "react-router-dom";
import Cartier from "../../Category/Cartier/Cartier";
import Omega from "../../Category/Omega/Omega";
import Rolex from "../../Category/Rolex/Rolex";
import Dashboard from "../../DashboardLayout/Dashboard";
import Main from "../../Layout/Main";
import Blog from "../../Pages/Blog/Blog";
import ErrorPage from "../../Pages/ErrorPage/ErrorPage";
import Home from "../../Pages/Home/Home/Home";
import LogIn from "../../Pages/LogIn/LogIn";
import Register from "../../Pages/Register/Register";
import PrivateRoutes from "../PrivateRoute/PrivateRoutes";

const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children:[
            {
                path:'/',
                element: <Home></Home>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/login',
                element: <LogIn></LogIn>
            },
            {
                path: '/register',
                element:<Register></Register>
            },
            {
                path: '/category/1',
                element:<PrivateRoutes><Rolex></Rolex></PrivateRoutes>

            },
            {
                path: '/category/2',
                element:<PrivateRoutes><Omega></Omega></PrivateRoutes>

            },
            {
                path: '/category/3',
                element:<PrivateRoutes><Cartier></Cartier></PrivateRoutes>

            },
        ]
        
    },
    {
        path:'/dashboard',
        element: <Dashboard></Dashboard>

    },

    {
        path:'*',
        element: <ErrorPage></ErrorPage>
    }

])
export default routes;