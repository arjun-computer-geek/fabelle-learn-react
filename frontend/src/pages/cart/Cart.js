import { CartCard } from "components";
import { useCart } from "context/cartContex";
import React from "react";
import "./cart.css";
export const Cart = () => {
  const {
    state: { cartItems },
  } = useCart();

  return (
    <main className="cart-page">
      {cartItems.length === 0 ? (
        <h2>Cart is empty!</h2>
      ) : (
        <>
          <h2>My Cart</h2>
          <table>
            <tr>
              <th>Product</th>
              <th>Quantity</th>
              <th>SubTotal</th>
            </tr>
            {cartItems.map((item, i) => (
              <CartCard
                key={i}
                id={item.product}
                img={`http://localhost:8000/public/uploads/${item.image}`}
                name={item.name}
                price={item.price}
              />
            ))}
          </table>
          <div className="total-price">
            <table>
              <tr>
                <td>Subtotal</td>
                <td>&#8377; 899</td>
              </tr>
              <tr>
                <td>Tax</td>
                <td>&#8377; 899</td>
              </tr>
              <tr>
                <td>Total</td>
                <td>&#8377; 899</td>
              </tr>
            </table>
          </div>
          <button className="btn btn-pace-order">Place Order</button>
        </>
      )}
    </main>
  );
};
