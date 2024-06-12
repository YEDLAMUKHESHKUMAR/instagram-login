import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Login from "./components/Login";
import Error from "./components/error";

const AppLayout = () => {
  return (
    <React.StrictMode>
      <Outlet />
    </React.StrictMode>
  );
};

const AppRoutes = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Login />,
      },
      {
        path: "/reels",
        element: <Login />,
      },
      {
        path:"/error",
        element:<Error/> 
      }
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={AppRoutes} />);
