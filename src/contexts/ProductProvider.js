import axios from 'axios';
import React, { createContext, useState, useEffect } from "react";
export const ProductContext = createContext();
const ProductProvider = ({ children }) => {

    const [products, setProducts] = useState([]);
    const [special, setSpecial] = useState(true);
    useEffect(() => {
     
        axios.get('http://localhost:5000/products')
        .then(res => {
            setProducts(res.data)
         })

    }, [special]);
    return (
        <ProductContext.Provider value={{ products,special,setSpecial,setProducts }}>
            {children}
        </ProductContext.Provider>
    );
}
export default ProductProvider;
