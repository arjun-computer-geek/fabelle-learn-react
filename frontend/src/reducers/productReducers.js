import {
  ALL_PRODUCTS_REQUEST,
  ALL_PRODUCTS_SUCCESS,
  ALL_PRODUCTS_FAIL,
  SINGLE_PRODUCT_REQUEST,
  SINGLE_PRODUCT_SUCCESS,
  SINGLE_PRODUCT_FAIL,
} from "constants/productContants";

export const productReducer = (state = { products: [] }, action) => {
  switch (action.type) {
    case ALL_PRODUCTS_REQUEST:
      return {
        ...state,
        loading: true,
        products: [],
      };
    case ALL_PRODUCTS_SUCCESS:
      return {
        ...state,
        loading: false,
        products: action.payload,
      };
    case ALL_PRODUCTS_FAIL:
      return {
        ...state,
        loading: true,
        error: action.payload,
        products: []
      };
    case SINGLE_PRODUCT_REQUEST:
      return {
        ...state,
        loading: true,
        product: null
      }
    case SINGLE_PRODUCT_SUCCESS:
      return {
        ...state,
        loading: false,
        product: action.payload
      }
    case SINGLE_PRODUCT_FAIL:
      return {
        ...state,
        loading: true,
        error: action.payload,
        product: null
      }
    default:
      return state;
  }
};
