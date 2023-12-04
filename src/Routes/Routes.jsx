import { createBrowserRouter } from "react-router-dom";
import App from "../App"
import Analytics from "../components/Analytics/Analytics";
import Billing from "../components/Billing/Billing";
import Company from "../components/Company/Company";
import ProductContent from "../components/Products/ProductContent";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <App/>,
      errorElement: <p>eror</p>,
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
        }
      ]
    }
  ]);