import { getProducts } from "actions/productActions";
import { productReducer } from "reducers/productReducers";
const { createContext, useContext, useReducer, useEffect } = require("react");

const productContext = createContext();

const ProductProvider = ({ children }) => {
  const [state, dispatch] = useReducer(productReducer, {
    loading: false,
    products: [],
  });

  // fetching data
  useEffect(() => {
    getProducts(dispatch);
  }, []);

  return (
    <productContext.Provider value={{ state }}>
      {children}
    </productContext.Provider>
  );
};

const useProduct = () => useContext(productContext);

export { ProductProvider, useProduct };
