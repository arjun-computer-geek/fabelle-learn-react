import {
  clear,
  filterPrice,
  getRatings,
  sortProduct,
} from "actions/filterActions";
import { getProducts } from "actions/productActions";
import { filterReducer } from "reducers/filterReducer";
import { productReducer } from "reducers/productReducers";
const { createContext, useContext, useReducer, useEffect } = require("react");

const productContext = createContext();

const ProductProvider = ({ children }) => {
  const [state, dispatch] = useReducer(productReducer, {
    loading: false,
    products: [],
    error: "",
  });

  const [filterState, filterDispatch] = useReducer(filterReducer, {
    byStock: false,
    byRatings: 0,
    searchQuery: "",
  });

  // fetching data
  useEffect(() => {
    getProducts(dispatch);
  }, []);

  // functions
  const filterByRatings = (rating) => {
    getRatings(rating, filterDispatch);
  };
  const sortByCategory = (category) => {
    sortProduct(category, filterDispatch);
  };
  const sortByPrice = (value) => {
    filterPrice(value, filterDispatch);
  };
  const clearFilter = () => {
    clear(filterDispatch);
  };
  return (
    <productContext.Provider
      value={{
        state,
        filterState,
        filterByRatings,
        sortByCategory,
        clearFilter,
        sortByPrice,
      }}
    >
      {children}
    </productContext.Provider>
  );
};

const useProduct = () => useContext(productContext);

export { ProductProvider, useProduct };
