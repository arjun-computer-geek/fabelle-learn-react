import { addItemToCart, removeItemFromCart } from "actions/cartActions";
import { cartReducer } from "reducers";

const { createContext, useContext, useReducer, useEffect } = require("react");

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

  // setting items to the localStorage
  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
  }, [state.cartItems]);

  // add to cart function
  const addToCart = (id) => {
    addItemToCart(id, dispatch);
  };

  // remove from cart function
  const removeFromCart =(id) => {
    removeItemFromCart(id, dispatch)
  }
  return (
    <cartContext.Provider value={{ state, addToCart, removeFromCart }}>
      {children}
    </cartContext.Provider>
  );
};

const useCart = () => useContext(cartContext);

export { CartProvider, useCart };
