import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./Error-page";
import HomePage from "./Screen/HomePage";
import { store } from "../src/store/store";
import { Provider } from "react-redux";
import RootLayout from "./RootLayout";
import ShopPage from "./Screen/ShopPage";
import DetailPage from "./Screen/DetailPage";
import SignUp from "./Screen/SignUp";
import Login from "./Screen/LoginPage";
import CartPage from "./Screen/CartPage";
import CheckoutPage from "./Screen/CheckoutPage";
const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <ErrorPage />,
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/shop",
        element: <ShopPage />,
      },
      {
        path: "/shop/:ProductName",
        element: <DetailPage />,
      },
      {
        path: "/Signup",
        element: <SignUp />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/cart",
        element: <CartPage />,
      },
      {
        path: "/Checkoutpage",
        element: <CheckoutPage />,
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
