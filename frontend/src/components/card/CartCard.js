import { useCart } from "context/cartContex";
import { useWishlist } from "context/wishlistContex";
import React from "react";

export const CartCard = ({id, img, name, price, quantity}) => {
    const {removeFromCart} = useCart()
    const {moveToWishlist} = useWishlist()
  return (
    <tr>
      <td>
        <div className="cart-info">
          <img src={img} alt="product-img" />
          <div>
            <p>{name}</p>
            <small>Price : &#8377; {price} </small>
            <br/>
            <button className="cartBtn" onClick={() => removeFromCart(id)}>Remove</button>
            <button className="cartBtn" onClick={() => moveToWishlist(id)}>Move To Wishlist</button>
          </div>
        </div>
      </td>
      <td>
        <span>{quantity}</span>
      </td>
      <td>&#8377; {price}</td>
    </tr>
  );
};
