import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
// import { PinPage } from "./pages/PinPage.jsx";
// import Genpage from "./pages/Genpage.jsx";
// import Carts from "./pages/Carts.jsx";
import Navbar from "./components/Navbar";
import Board from "./components/Board";
import Genpage from "./pages/Genpage";
import Carts from "./pages/Carts";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/cart",
    element: <Carts />,
  },
  {
    path: "/genai",
    element: (
      <>
        <Navbar />
        <Genpage />
      </>
    ),
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
