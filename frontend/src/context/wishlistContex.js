import { addItemToWishlist, removeItemFromWishlist } from "actions/wishlistActions";
import { toast } from "react-toastify";
import { wishlistReducer } from "reducers";

const { createContext, useContext, useEffect, useReducer } = require("react");

const WishlistContext = createContext();

export const WishlistProvider = ({ children }) => {
  // gettting item from localStorage
  const localWishlistItems = localStorage.getItem("wishlist")
    ? JSON.parse(localStorage.getItem("wishlist"))
    : [];

  // use reducer hooks
  const [state, dispatch] = useReducer(wishlistReducer, {
    wishlist: localWishlistItems,
  });

  // setting items to the localStorage
  useEffect(() => {
    localStorage.setItem("wishlist", JSON.stringify(state.wishlist));
  }, [state.wishlist]);

//   functions 

// add to wishlist
const addToWishlist = (id) => {
    addItemToWishlist(id, dispatch)
    toast.success("Item Added!")
}

// remove from cart function
const removeFromWishlist =(id) => {
    removeItemFromWishlist(id, dispatch)
    toast.success("Item Removed")
  }
  return (
    <WishlistContext.Provider value={{state, addToWishlist, removeFromWishlist}}>
      {children}
    </WishlistContext.Provider>
  );
};

export const useWishlist = () => useContext(WishlistContext);
