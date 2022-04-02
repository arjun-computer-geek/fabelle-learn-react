import { CartProvider } from "context/cartContext";
import { ProductProvider } from "context/productContext";
import { WishlistProvider } from "context/wishlistContext";
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";

ReactDOM.render(
  <BrowserRouter>
    <ProductProvider>
      <CartProvider>
        <WishlistProvider>
          <App />
        </WishlistProvider>
      </CartProvider>
    </ProductProvider>
  </BrowserRouter>,

  document.getElementById("root")
);
