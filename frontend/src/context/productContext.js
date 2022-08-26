import {
  clear,
  filterPrice,
  getRatings,
  search,
  sortProduct,
} from "actions/filterActions";
import { getProducts, getSingleProduct } from "actions/productActions";
import { useNavigate } from "react-router-dom";
import { filterReducer } from "reducers/filterReducer";
import { productReducer } from "reducers/productReducers";
const { createContext, useContext, useReducer, useEffect } = require("react");

const productContext = createContext();

const ProductProvider = ({ children }) => {
  const navigate = useNavigate()
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

  useEffect(() => {
    if (filterState.searchQuery) {
      navigate('/categories')
    }
  }, [filterState.searchQuery])

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
  const searchProduct = (searchStr) => {
    search(searchStr, filterDispatch)
  }
  const clearFilter = () => {
    clear(filterDispatch);
  };

  const getAProduct = (id) => {
    getSingleProduct(id, dispatch)
  }
  return (
    <productContext.Provider
      value={{
        state,
        filterState,
        filterByRatings,
        sortByCategory,
        clearFilter,
        sortByPrice,
        searchProduct,
        getAProduct
      }}
    >
      {children}
    </productContext.Provider>
  );
};

const useProduct = () => useContext(productContext);

export { ProductProvider, useProduct };
