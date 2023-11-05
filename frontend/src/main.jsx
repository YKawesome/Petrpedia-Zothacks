import React from "react";
import ReactDOM from "react-dom/client";
import Root from "./routes/root";
import Home from "./routes/home";
import ErrorPage from "./error-page";
import Contact from "./routes/contact";
import User from "./users/user";
import NewTemplate from "./new_template";
import DropperPage from "./dropper";
import TradingPage from "./trading_page"
import NewUser from "./new_user";
import Template from "./template";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
    errorElement: <ErrorPage />,
  },
  {
    path: "contacts/:contactId",
    element: <Contact />,
    
  },
  {
    path: "user/:userId",
    element: <User/>
  },
  {
    path: "new_template",
    element: <NewTemplate />
  },
  {
    path: "creator/:dropperName",
    element: <DropperPage />
  },
  {
    path: "trade",
    element: <TradingPage></TradingPage>
  },
  {
    path: "new_user",
    element: <NewUser />
  },
  {
    path: "design/:templateId",
    element: <Template></Template>
  }
]);

/*
This code renders our project so it can be viewed in a browser. 
*/
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <link rel="stylesheet" href="../src/test.css"></link>
    <RouterProvider router={router} />
  </React.StrictMode>
);
