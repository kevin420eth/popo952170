import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'

import Home from './components/Home/Home';
import ErrorPage from "./error-page";
import Team from './components/Pages/Team/Team'
import Consulting from './components/Pages/Consulting'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />
  },
  {
    path: "/brand",
    element: <Consulting />,
  },
  {
    path: "/team",
    element: <Team />,
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);