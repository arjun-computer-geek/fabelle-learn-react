import { CLEAR_FILTERS, FILTER_BY_RATING, FILTER_BY_SEARCH, FILTER_BY_STOCK, SORT_BY_CATEGORY } from "constants/filterConstants";

export const filterReducer = (state, action) => {
  switch (action.type) {
    case SORT_BY_CATEGORY:
      return {
        ...state,
        sort: action.payload,
      };
    case FILTER_BY_STOCK:
      return {
        ...state,
        byStock: !state.byStock,
      };
    case FILTER_BY_RATING:
      return {
        ...state,
        byRatings: action.payload,
      };
    case FILTER_BY_SEARCH:
      return {
        ...state,
        searchQuery: action.payload
      };
      case CLEAR_FILTERS:
          return{
            byStock: false,
            byRatings: 0,
            searchQuery: "",
          }
    default:
      return state;
  }
};