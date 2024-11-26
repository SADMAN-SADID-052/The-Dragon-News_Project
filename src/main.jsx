import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Home Layout</div>,
  },
  {

    path:"/news",
    element:<div>News Layout</div>
  },

  {
    path:"auth",
    element:<div>Login</div>
  },

  {

    path:"*",
    element:<h1>Error</h1>
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <RouterProvider router={router} />
  </StrictMode>,
)
