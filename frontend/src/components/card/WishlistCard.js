import { useCart } from "context/cartContext";
import { useWishlist} from "context/wishlistContext";
import React from "react";

export const WishlistCard = ({id, img, name, owner, ratings, price}) => {
    const{removeFromWishlist} = useWishlist()
    const {addToCart} = useCart()
    const moveToCart = (id) => {
      removeFromWishlist(id)
      addToCart(id)
    }
  return (
    <div className="card card-dismiss">
      <span className="btn-dismiss" onClick={() => removeFromWishlist(id)}>
        <i className="fa fa-times" aria-hidden="true"></i>
      </span>
      <img loading="lazy" src={`https://fabelle-learn-react.herokuapp.com/public/uploads/${img}`} alt="product" />
      <div className="card-container">
        <h4 className="product-name">
          {name}
        </h4>
        <h3 className="product-owner">{owner}</h3>
        <div className="product-ratings">
          <i className="fa fa-star"></i>
          <i className="fa fa-star"></i>
          <i className="fa fa-star"></i>
          <i className="fa fa-star-half-empty"></i>
          <i className="fa fa-star-o"></i>
          <span>({ratings})</span>
        </div>
        <div className="product-price">
          &#8377;<span>{price}</span>
        </div>
        <button className="btn product-add-to-cart-btn" onClick={() => moveToCart(id)}>Move to cart</button>
      </div>
    </div>
  );
};
