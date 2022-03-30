import { getProducts } from "actions/productActions";
import axios from "axios";
import { productReducer } from "reducers/productReducers";

const {
  createContext,
  useContext,
  useReducer
} = require("react");

const productContext = createContext();

const ProductProvider = ({ children }) => {
  const [state, dispatch] = useReducer(productReducer, {
    loading: false,
    products: []
  });

  return (
    <productContext.Provider value={{ state, dispatch }}>
      {children}
    </productContext.Provider>
  );
};

const useProduct = () => useContext(productContext);

export { ProductProvider, useProduct };
