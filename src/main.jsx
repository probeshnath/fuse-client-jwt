import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './pages/Home.jsx';
import MainLayout from './layout/MainLayout.jsx';
import Login from './pages/Login.jsx';
import Register from './pages/Register.jsx';
import DashBoardLayout from './layout/DashBoardLayout.jsx';
import Dashboard from './pages/dashboard/Dashboard.jsx';
import Products from './pages/Products';
import AuthProvider from './provider/AuthProvider';
import HomeDashboard from './pages/dashboard/HomeDashbord.jsx'
import AllProducts from './pages/dashboard/AllProducts.jsx'
import AddProduct from './pages/dashboard/AddProduct.jsx'
import UpdateProduct from './pages/dashboard/UpdateProduct.jsx';
import Users from './pages/dashboard/Users.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/login",
        element: <Login />
      },
      {
        path: "/products",
        element: <Products />,
        loader: ()=> fetch("http://localhost:5000/products")
      },
      {
        path: "/register",
        element: <Register />
      }
    ]
  },
  {
    path: "/dashboard",
    element: <DashBoardLayout ></DashBoardLayout>,
    children: [
      {
        path: "/dashboard",
        element: <Dashboard />
      },
      {
        path: "/dashboard/all",
        element: <HomeDashboard />
      },
      {
        path: "/dashboard/products",
        element: <AllProducts />,
        loader: ()=> fetch("http://localhost:5000/products")
      },
      {
        path: "/dashboard/addproduct",
        element: <AddProduct />
      },
      {
        path: "/dashboard/updateproduct",
        element: <UpdateProduct />
      },
      {
        path: "/dashboard/users",
        element: <Users />
      },
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
