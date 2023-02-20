import Button from "../button/button.component";
import "./products-card.styles.scss"
const ProductsCard =({products}) =>{

   const {name , imageUrl , price } = products;

    return (<div className="product-card-container">
    <img src={imageUrl} alt={`${name}`}/>
    <div className="footer">
    <span className="name">{name}</span>
    <span className="price">{price}</span>
    </div>
    <Button buttonType="inverted">Add To Cart</Button>
    </div>)
}
export default ProductsCard ;