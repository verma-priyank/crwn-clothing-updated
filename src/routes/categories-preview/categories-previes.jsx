// import { useContext } from "react";
// import { CategoriesContext } from "../../context/categories.context";


import CategoryPreview from "../../components/category-preview/category-preview.component";
import { useSelector } from "react-redux";
import { categoriesSelector } from "../../store/categories/categories.selector";
const CategoriesPreview =() =>{
// const {categoriesMap} = useContext(CategoriesContext)
const {categoriesMap} = useSelector(categoriesSelector)



return(<div  >
    
        {Object.keys(categoriesMap).map(title=>{
           const products = categoriesMap[title]
          return <CategoryPreview title={title} key={title} products={products} />
        })}
        </div>)
  

}
export default CategoriesPreview;