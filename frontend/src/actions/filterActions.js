import {
  FILTER_BY_RATING,
  SORT_BY_CATEGORY,
  CLEAR_FILTERS,
  FILTER_BY_PRICE,
} from "constants/filterConstants";

export const getRatings = async (rating, dispatch) => {
  dispatch({
    type: FILTER_BY_RATING,
    payload: rating,
  });
};
export const sortProduct = async (category, dispatch) => {
  dispatch({
    type: SORT_BY_CATEGORY,
    payload: category,
  });
};
export const filterPrice = async (value, dispatch) => {
  dispatch({
    type: FILTER_BY_PRICE,
    payload: value,
  });
};
export const clear = async (dispatch) => {
  dispatch({
    type: CLEAR_FILTERS,
  });
};
