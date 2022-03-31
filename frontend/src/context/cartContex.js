import { addItemToCart, removeItemFromCart } from "actions/cartActions";
import { toast } from "react-toastify";
import { cartReducer } from "reducers";

const { createContext, useContext, useReducer, useEffect, useState } = require("react");

const cartContext = createContext();

const CartProvider = ({ children }) => {
  // gettting item from localStorage
  const localCartItems = localStorage.getItem("cartItems")
    ? JSON.parse(localStorage.getItem("cartItems"))
    : [];

  // use reducer hooks
  const [state, dispatch] = useReducer(cartReducer, {
    cartItems: localCartItems,
  });
  const[total, setTotal] = useState(0)


  // setting items to the localStorage
  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
  }, [state.cartItems]);

  // adding total price of cartItems
  useEffect(() => {
    setTotal(
      state.cartItems.reduce((sum, product) => {
        return sum + product.price * product.quantity;
      }, 0)
    );
  }, [state.cartItems]);

  // add to cart function
  const addToCart = (id) => {
    addItemToCart(id, dispatch);
    toast.success("Item Added!")
  };

  // remove from cart function
  const removeFromCart =(id) => {
    removeItemFromCart(id, dispatch)
    toast.success("Item Removed")
  }
  return (
    <cartContext.Provider value={{ state, addToCart, removeFromCart , total}}>
      {children}
    </cartContext.Provider>
  );
};

const useCart = () => useContext(cartContext);

export { CartProvider, useCart };
