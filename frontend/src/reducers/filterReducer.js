import { CLEAR_FILTERS, FILTER_BY_PRICE, FILTER_BY_RATING, FILTER_BY_SEARCH,  SORT_BY_CATEGORY } from "constants/filterConstants";

export const filterReducer = (state, action) => {
  switch (action.type) {
    case SORT_BY_CATEGORY:
      return {
        ...state,
        sort: action.payload,
      };
    case FILTER_BY_RATING:
      return {
        ...state,
        byRatings: action.payload,
      };
      case FILTER_BY_PRICE:
        return{
          ...state, 
          sortPrice: action.payload
        }
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