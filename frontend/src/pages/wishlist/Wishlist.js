import { WishlistCard } from "components";
import "./wishlist.css";
import React from "react";
import { useWishlist } from "context/wishlistContext";

export const Wishlist = () => {
  const {
    state: { wishlist },
  } = useWishlist();
  return (
    <main className="wishlist-page">
      {wishlist.length === 0 ? (
        <h2>Wishlist is empty!</h2>
      ) : (
        <>
          <h2>My Wishlist</h2>
          <div className="wishlist-container">
            {wishlist.map((item) => (
              <WishlistCard
                key={item._id}
                id={item._id}
                img={item.image}
                name={item.name}
                owner={item.owner}
                ratings={item.numOfReviews}
                price={item.price}
              />
            ))}
          </div>
        </>
      )}
    </main>
  );
};
