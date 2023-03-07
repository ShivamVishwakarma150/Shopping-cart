import React from "react";
import ReactDOM from "react-dom/client";

import './node_modules/bootstrap/dist/css/bootstrap.css';
import './node_modules/bootstrap-icons/font/bootstrap-icons.css';
import ShoppingClassDemo from "./src/components/ShoppingClassDemo";
import LoginComponent from "./src/components/LoginComponent";
import FormComponent from "./src/components/FormComponent";
import ShoppingComponent from "./src/components/ShoppingComponent";





const root = ReactDOM.createRoot(document.getElementById("root"));

// Passing a react element inside the root
root.render(
       <>
              <ShoppingComponent/>
       </>
       
);