import { createContext, useState } from "react";
import productsdata from "../products-data.json"
export const ProductsContext =createContext({});

export const ProductsProvider =({children}) =>{
    const [products , setproducts] = useState(productsdata)
    
   const value={products}

    return (<ProductsContext.Provider value ={value}>{children}</ProductsContext.Provider>)
}