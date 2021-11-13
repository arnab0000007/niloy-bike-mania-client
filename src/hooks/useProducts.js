import { useContext } from "react"
import { ProductContext } from "../contexts/ProductProvider"

const useProducts= () => {
    return useContext(ProductContext);
}

export default useProducts;