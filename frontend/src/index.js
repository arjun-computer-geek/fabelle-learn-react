import { CartProvider } from "context/cartContext";
import { ProductProvider } from "context/productContext";
import { UserProvider } from "context/userContext";
import { WishlistProvider } from "context/wishlistContext";
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";

ReactDOM.render(
  // <React.StrictMode>
  <BrowserRouter>
    <ProductProvider>
      <CartProvider>
        <WishlistProvider>
          <UserProvider>
            <App />
          </UserProvider>
        </WishlistProvider>
      </CartProvider>
    </ProductProvider>
  </BrowserRouter>,
// </React.StrictMode>,
  document.getElementById("root")
);
