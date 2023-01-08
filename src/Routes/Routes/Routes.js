import { createBrowserRouter } from "react-router-dom";
import Cartier from "../../Category/Cartier/Cartier";
import Omega from "../../Category/Omega/Omega";
import Rolex from "../../Category/Rolex/Rolex";
import DashboardLayout from "../../DashboardLayout/DashboardLayout";

import Main from "../../Layout/Main";
import Blog from "../../Pages/Blog/Blog";
import AllUsers from "../../Pages/Dashboard/AllUsers/AllUsers";
import MyOrders from "../../Pages/Dashboard/BuyersDashboard/MyOrders";

import Dashboard from "../../Pages/Dashboard/Dashboard/Dashboard";
import AddProduct from "../../Pages/Dashboard/SellersDashboard/AddProduct/AddProduct";
import MyProduct from "../../Pages/Dashboard/SellersDashboard/MyProduct/MyProduct";
import ErrorPage from "../../Pages/ErrorPage/ErrorPage";
import CategorySection from "../../Pages/Home/CategorySection/CategorySection";
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
                path: '/category',
                element: <CategorySection></CategorySection>,

            },
            {
                path: '/category/:id',
                element:<Rolex></Rolex>
            }





            
            // {
            //     path: '/category/2',
            //     element:<PrivateRoutes><Omega></Omega></PrivateRoutes>

            // },
            // {
            //     path: '/category/3',
            //     element:<PrivateRoutes><Cartier></Cartier></PrivateRoutes>

            // },
        ]
        
    },
    {
        path:'/dashboard',
        element:<DashboardLayout></DashboardLayout>,
        children:[
            {
                path: '/dashboard',
                element:<Dashboard></Dashboard>
            },
            {
                path: '/dashboard/addproduct',
                element:<AddProduct></AddProduct>
            },
            {
                path: '/dashboard/myProduct',
                element:<MyProduct></MyProduct>
            },
            {
                path: '/dashboard/allUsers',
                element:<AllUsers></AllUsers>
            },
            {
                path: '/dashboard/myOrders',
                element:<MyOrders></MyOrders>
            },


        ]
        
    },

    {
        path:'*',
        element: <ErrorPage></ErrorPage>
    }

])
export default routes;