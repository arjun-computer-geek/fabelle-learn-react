import { Badge } from "@mui/material";
import { useCart } from "context/cartContext";
import { useUser } from "context/userContext";
import { useWishlist } from "context/wishlistContext";
import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  const {
    state: { cartItems },
  } = useCart();
  const {
    state: { wishlist },
  } = useWishlist();
  const {
    state: { user },
  } = useUser();
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
        {user ? (
          <Link to="/profile">
            <i className="fa fa-user"></i>
            <span className="nav-icon-text">{user.name}</span>
          </Link>
        ) : (
          <Link to="/login">
            <i className="fa fa-user"></i>
            <span className="nav-icon-text">Login</span>
          </Link>
        )}

        <Badge badgeContent={wishlist.length} color="secondary">
          <Link to="/wishlist">
            <i className="fa fa-heart" aria-hidden="true"></i>
            <span className="nav-icon-text">Wishlist</span>
          </Link>
        </Badge>
        <Badge badgeContent={cartItems.length} color="secondary">
          <Link to="/cart">
            <i className="fa fa-shopping-cart"></i>
            <span className="nav-icon-text">cart</span>
          </Link>
        </Badge>
      </div>
    </nav>
  );
};
