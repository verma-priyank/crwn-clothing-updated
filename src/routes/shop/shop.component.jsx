import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { useDispatch } from "react-redux";
import CategoriesPreview from "../categories-preview/categories-previes";
import { getCollectionAndDocuments } from "../../utils/firebase/firebase.utils";
import { setCategoriesMap } from "../../store/categories/categories.action";
import Category from "../category/category.component";

const Shop =()=>{
    const dispatch = useDispatch();
    useEffect(()=>{
        const getCategoryMap = async()=>{
            const categoryMap = await getCollectionAndDocuments();
           
            console.log(categoryMap)
            dispatch(setCategoriesMap(categoryMap))
        }
        return getCategoryMap();
        
            },[])
    return (
        <Routes>
        <Route index element={<CategoriesPreview />} />
        <Route path=":category" element={<Category />} />
        </Routes >
        )
}
export default Shop;