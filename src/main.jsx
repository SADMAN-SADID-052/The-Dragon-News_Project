import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'


import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import HomeLayout from './Layouts/HomeLayout';
import MainPart from './Components/LayOut_Conponent/MainPart';
import AuthLayout from './Layouts/AuthLayout';
import Login from './Components/Login';
import Register from './Components/Register';
import AuthProvider from './Provider/AuthProvider';

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout></HomeLayout>,
    children:[

      {
        path:"",
        element:<Navigate to={"/category/01"}></Navigate>,
      },

      {
        path:"/category/:id",
        element:<MainPart></MainPart> ,
        loader: ({params}) => fetch(`https://openapi.programming-hero.com/api/news/category/${params.id}`),
      },
    ],
  },
  {

    path:"/news",
    element:<div>News</div>
  },

  {
    path:"auth",
    element:<AuthLayout></AuthLayout>,
    children:[

      {
        path:"/auth/login",
        element: <Login></Login>,
      },
      {
        path:"/auth/register",
        element: <Register></Register>,
      }
      
    ]
  },

  {

    path:"*",
    element:<h1>Error</h1>
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>

    <AuthProvider>    
      
       <RouterProvider router={router} />
    
    
    </AuthProvider>

  </StrictMode>,
)
