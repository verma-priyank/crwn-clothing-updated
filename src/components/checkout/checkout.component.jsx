import { useContext } from "react";
import { CartContext } from "../../context/cart.context";
import "./checkout.styles.scss"

const Checkout =() =>{
  const {cartItems ,addItemsToCart ,reduceItemsToCart} = useContext(CartContext)
  const increaseQuantity =(item)=>{
    addItemsToCart(item)
  }
const discreaseQuantity =(item) =>{
    reduceItemsToCart(item)
}
    return (<div>
        {cartItems.map(item=>{
            return(<div>
                <h1>{item.name}</h1>
                <button onClick={()=>increaseQuantity(item)}>+</button>
                <button onClick={()=>discreaseQuantity(item)}>-</button>
                </div>)
        })}
        </div>)
}

export default Checkout;