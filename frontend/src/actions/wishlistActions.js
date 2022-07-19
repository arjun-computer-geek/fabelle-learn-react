import axios from "axios";
import { ADD_TO_WISHLIST, REMOVE_FROM_WISHLIST } from "constants/wishlistConstants";

export const addItemToWishlist = async (id, dispatch) => {
  const { data } = await axios.get(`/api/product/${id}`);
  dispatch({
    type: ADD_TO_WISHLIST,
    payload: data.product,
  });
};

export const removeItemFromWishlist = async (id, dispatch) => {
  dispatch({
    type: REMOVE_FROM_WISHLIST,
    payload: id,
  });
};
