import { useCart } from "context/cartContex";
import React from "react";

export const CartCard = ({id, img, name, price, quantity}) => {
    const {removeFromCart} = useCart()
  return (
    <tr>
      <td>
        <div className="cart-info">
          <img src={img} alt="" />
          <div>
            <p>{name}</p>
            <small>Price : &#8377; {price} </small>
            <br />
            <button onClick={() => removeFromCart(id)}>Remove</button>
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
