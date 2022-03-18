import React from 'react'

export const Navbar = () => {
  return (
    <nav className="nav nav-boxshadow">
        <a href="/" className="brand my-brand">
            <div className="logo">
                <img loading="lazy" src="./images/nav/nav-logo.png" alt="logo" />
            </div>
            <h1 className="brand-name">
                Fabelle Learn
            </h1>
        </a>
        <div className="nav-links">
            <a className="nav-link" href="/categories.html">Categories</a>
        </div>
        <div className="nav-search">
            <i className="fa fa-search"></i>
            <input type="text" placeholder="Type to search" />
        </div>
        <div className="nav-icons">
            <a href="/login.html">
                <i className="fa fa-user"></i>
                <span className="nav-icon-text">Login</span>
            </a>
            <a href="./wishlist.html">
                <i className="fa fa-heart" aria-hidden="true"></i>
                <span className="nav-icon-text">Wishlist</span>
            </a>
            <a href="">
                <i className="fa fa-shopping-cart"></i>
                <span className="nav-icon-text">cart</span>
            </a>
        </div>
    </nav>
  )
}