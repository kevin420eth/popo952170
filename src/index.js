import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'

import Home from './components/Home/Home';
import ErrorPage from "./components/Pages/Error/Error";
import Team from './components/Pages/Team/Team'
import Member from './components/Pages/Team/Members/Member'
import Services from './components/Pages/Services/Services';
import Service from './components/Pages/Services/Service/Service'
import Environment from './components/Pages/Environment/Environment';
import Articles from './components/Pages/Articles/Articles'
import Contact from './components/Pages/Contact/Contact'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />
  },
  {
    path: "/team",
    element: <Team />
  },
  {
    path: "/team/:doctorName",
    element: <Member />,
  },
  {
    path: "/services",
    element: <Services />
  },
  {
    path: "/services/:serviceName",
    element: <Service />
  },
  {
    path: "/enviroment",
    element: <Environment />
  },
  {
    path: "/articles",
    element: <Articles />
  },
  {
    path: "/contact",
    element:<Contact />
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);