import axios from "axios";
import {
  ALL_PRODUCTS_REQUEST,
  ALL_PRODUCTS_SUCCESS,
  ALL_PRODUCTS_FAIL,
} from "constants/productContants";

export const getProducts = async (dispatch) => {
  try {
    dispatch({ type: ALL_PRODUCTS_REQUEST });

    const { data } = await axios.get("http://localhost:8000/api/products");
    dispatch({
      type: ALL_PRODUCTS_SUCCESS,
      payload: data.products,
    });
  } catch (error) {
    dispatch({
      type: ALL_PRODUCTS_FAIL,
      payload: "Internal Server Error",
    });
  }
};
