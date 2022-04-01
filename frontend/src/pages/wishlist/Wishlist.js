import { WishlistCard } from "components";
import './wishlist.css'
import React from "react";
import { useWishlist } from "context/wishlistContex";

export const Wishlist = () => {
    const {state:{wishlist}} = useWishlist()
  return (
    <main className="wishlist-page">
      <h2>My Wishlist</h2>
      <div className="wishlist-container">
          {wishlist.map(item =><WishlistCard key={item._id}/> )}
        
      </div>
    </main>
  );
};
