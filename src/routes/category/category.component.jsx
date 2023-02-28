import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductsCard from "../../components/products-card/products-card.component";
import { CategoriesContext } from "../../context/categories.context";
import "./category.styles.scss"

const Category =()=>{
    const {category} = useParams();
    
    const {categoriesMap} = useContext(CategoriesContext)
    
    const [products ,setproducts] = useState(categoriesMap[category]);
    useEffect(()=>{
        setproducts(categoriesMap[category])
        
    },[categoriesMap,category])
  
    return (
        <>
        <h2 className="category-title">{category.toUpperCase()}</h2>
        <div className="category-container">
        
        {products && products.map(item=>{
            return <ProductsCard key={item.id} products={item}/>
        })}
        </div></>
    )
  
}

export default Category;