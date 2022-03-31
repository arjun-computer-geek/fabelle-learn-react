import { Badge } from "@mui/material";
import { useCart } from "context/cartContex";
import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
    const {state:{cartItems}} = useCart()
  return (
    <nav className="nav nav-boxshadow">
      <Link to="/" className="brand my-brand">
        <div className="logo">
          <img src="./images/nav/nav-logo.png" alt="logo" />
        </div>
        <h1 className="brand-name">Fabelle Learn</h1>
      </Link>
      <div className="nav-links">
        <Link className="nav-link" to="/categories">
          Categories
        </Link>
      </div>
      <div className="nav-search">
        <i className="fa fa-search"></i>
        <input type="text" placeholder="Type to search" />
      </div>
      <div className="nav-icons">
        <Link to="/login">
          <i className="fa fa-user"></i>
          <span className="nav-icon-text">Login</span>
        </Link>
        <Link to="./wishlist">
          <i className="fa fa-heart" aria-hidden="true"></i>
          <span className="nav-icon-text">Wishlist</span>
        </Link>
        <Badge badgeContent={cartItems.length } color="secondary">
          <Link to="/cart">
            <i className="fa fa-shopping-cart"></i>
            <span className="nav-icon-text">cart</span>
          </Link>
        </Badge>
      </div>
    </nav>
  );
};
