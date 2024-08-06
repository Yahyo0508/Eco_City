import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import App from './App';
import Login from './pages/Login/Login';
import Admin from './pages/Admin';
import Dashboard from './pages/Dashboard/Dashboard';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Login />,
  },
  {
    path: '/home',
    element: <App />,
  },
  {
    path: '/admin',
    element: <Admin />,
  },
  {
    path: '/dashboard',
    element: <Dashboard />,
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
