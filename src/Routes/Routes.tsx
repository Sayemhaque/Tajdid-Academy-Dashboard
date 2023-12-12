import React from "react";
import { createBrowserRouter } from "react-router-dom";
import App from "../App"
import Analytics from "../pages/Analytics/Analytics";
import Billing from "../pages/Billing/Billing";
import Company from "../pages/Company/Company";
import ProductContent from "../pages/Products/ProductContent";
import CreateProduct from "../pages/CreateNewProduct/CreateProduct";


export const router = createBrowserRouter([
    {
      path: "/",
      element: <App/>,
      errorElement: <p>error</p>,
      children:[
        {
            path:"/",
            element:<ProductContent/>
        },
        {
            path:"/analytics",
            element:<Analytics/>
        },
        {
            path:"/billing",
            element:<Billing/>
        },
        {
            path:"/company",
            element:<Company/>
        },
        {
            path:"/create",
            element:<CreateProduct/>
        }
      ]
    }
  ]);