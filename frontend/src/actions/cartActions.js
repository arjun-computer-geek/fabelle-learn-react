import axios from "axios";
import { ADD_TO_CART, REMOVE_ITEM_CART } from "../constants/cartConstants";

export const addItemToCart = async (id, dispatch) => {
  const { data } = await axios.get(`http://localhost:8000/api/product/${id}`);
  const productData = {
    id: data.product._id,
    name: data.product.name,
    price: data.product.price,
    image: data.product.image,
    stock: data.product.stock,
  };

  dispatch({
    type: ADD_TO_CART,
    payload: productData,
  });
};

export const removeItemFromCart = async (id, dispatch) => {
  dispatch({
    type: REMOVE_ITEM_CART,
    payload: id,
  });
};
