import { CartProvider } from "context/cartContex";
import { ProductProvider } from "context/productContext";
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";

ReactDOM.render(
  <BrowserRouter>
    <ProductProvider>
      <CartProvider>
      <App />
      </CartProvider>
    </ProductProvider>
  </BrowserRouter>,

  document.getElementById("root")
);
