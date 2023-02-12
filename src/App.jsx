import React from 'react'

import {
  BrowserRouter as Router,
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';
import Login from './pages/Login';
import Registro from './pages/Registro';
import Dashboard from './pages/Dashboard';
import Index from './pages/Index';
import PublicLayout from './layouts/PublicLayout';
import PrivateLayout from './layouts/PrivateLayout';
import AuthLayout from './layouts/AuthLayout';
import Vehiculos from './pages/Vehiculos';

const router = createBrowserRouter([
  {
    element: <PrivateLayout />,
    children: [
      {
        path: "/admin",
        element: <Dashboard></Dashboard>,
      },{
        path: "/admin/vehiculos",
        element: <Vehiculos></Vehiculos>,
      },{
      }
    ],
  },
  {
    element: <AuthLayout/>,
    children: [
      {
        path: "/registro",
        element: <Registro></Registro>
      },
      {
        path: "/login",
        element: <Login></Login>
      }
    ]
  },

  {
    element: <PublicLayout/>,
    children:[
      {
        path: "/",
        element: <Index></Index>
      }
    ]
  }
]);

function App() {
  return (
    <RouterProvider router={router} /> 
  )
}

export default App