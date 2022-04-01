import { WishlistCard } from "components";
import './wishlist.css'
import React from "react";

export const Wishlist = () => {
  return (
    <main class="wishlist-page">
      <h2>My Wishlist</h2>
      <div class="wishlist-container">
        <WishlistCard />
      </div>
    </main>
  );
};
