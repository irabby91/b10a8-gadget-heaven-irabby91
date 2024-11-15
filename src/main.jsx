import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  Route,
  Router,
  RouterProvider,
  Routes,
} from "react-router-dom";
import Root from './Components/Root/Root';

import ErrorPage from './Components/ErrorPage/ErrorPage';
import Home from './Components/HomePage/Home';
import Dashboard from './Components/Dashboard/Dashboard';
import Statictics from './Components/Statistics/Statictics';
import ProductDetails from './Components/ProductDetails/ProductDetails';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const router = createBrowserRouter([
  {
    path: "/",
    element: (<Root></Root>),
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: 'statictics',
        element: <Statictics></Statictics>
      },
      {
        path: 'dashboard',
        element: <Dashboard />,
        loader: () => fetch('/ProductData.json')
      },
      {
        path: 'Products/:productId',
        element: <ProductDetails></ProductDetails>,
        loader: () => fetch('/ProductData.json')
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
    
    <ToastContainer />
  </StrictMode>,
  
  
)
