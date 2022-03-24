import axios from "axios";

const { createContext, useContext, useState, useEffect } = require("react");

const productContext = createContext()

const ProductProvider = ({children}) => {
    const [products, setProducts] = useState([])

    useEffect(async() => {
        const {data} = await axios.get('http://localhost:8000/api/products')
        setProducts(data.products)
    },[])

    const providerValue = {
        products: products
    }
    return(
        <productContext.Provider value={providerValue}>
            {children}
        </productContext.Provider>
    )
}

const useProduct = () => useContext(productContext)

export{ ProductProvider, useProduct}