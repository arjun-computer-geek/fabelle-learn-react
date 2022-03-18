import React from 'react'
import { Link } from 'react-router-dom'

export const Navbar = () => {
  return (
    <nav className="nav nav-boxshadow">
        <Link to="/" className="brand my-brand">
            <div className="logo">
                <img loading="lazy" src="./images/nav/nav-logo.png" alt="logo" />
            </div>
            <h1 className="brand-name">
                Fabelle Learn
            </h1>
        </Link>
        <div className="nav-links">
            <Link className="nav-link" to="/categories">Categories</Link>
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
            <Link to="/cart">
                <i className="fa fa-shopping-cart"></i>
                <span className="nav-icon-text">cart</span>
            </Link>
        </div>
    </nav>
  )
}