import { createContext, useState  , useEffect} from "react";
import SHOP_DATA from "../products-data"
import { addCollectionAndDocuments, getCollectionAndDocuments } from "../utils/firebase/firebase.utils";
export const CategoriesContext =createContext({
  categoriesMap:{}
});

export const CategoriesProvider =({children}) =>{
    const [categoriesMap , setCategoriesMap] = useState({})
    useEffect(()=>{
const getCategoryMap = async()=>{
    const categoryMap = await getCollectionAndDocuments();
    setCategoriesMap(categoryMap)
}
return getCategoryMap();

    },[])
    useEffect(()=>{
        addCollectionAndDocuments("categories",SHOP_DATA)
    },[])
   const value={categoriesMap}

    return (<CategoriesContext.Provider value ={value}>{children}</CategoriesContext.Provider>)
}