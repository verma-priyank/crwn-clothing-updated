import { useContext } from "react";
import { CartContext } from "../../context/cart.context";
import "./checkout-item.styles.scss"

const CheckoutItem = ({cartitems}) =>{
    const {name , imageUrl , price,quantity} = cartitems;
    const {clearItemFromCart,addItemsToCart,reduceItemsToCart} = useContext(CartContext)

    return (<div className="checkout-item-container" >
      <div className="image-container">
      <img src={imageUrl} alt={`${name}`} />
      </div>
        <span className="name">{name}</span>
        <span className="quantity">
        <div className="arrow" onClick={()=>reduceItemsToCart(cartitems)}>&#10094;</div>
        <span className="value">{quantity}</span>
        <div className="arrow" onClick={()=>addItemsToCart(cartitems)}>&#10095;</div>
        </span>
        <span className="price">{price}</span>
        <span className="remove-button" onClick={()=>clearItemFromCart(cartitems)}>&#10005;</span>
        </div>)
}

export default CheckoutItem;