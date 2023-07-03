import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'

import Home from './components/Home/Home';
import ErrorPage from "./components/Pages/Error/Error";
import Team from './components/Pages/Team/Team'
import JohnnyLin from './components/Pages/Team/Members/JohnnyLin'

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
    element: <JohnnyLin />,
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);