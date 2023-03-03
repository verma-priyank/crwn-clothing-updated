import { useContext  } from "react";
import {  useNavigate } from "react-router-dom";
import Button from "../button/button.component";
import { CartContext } from "../../context/cart.context";
import CartItem from "../cart-tem/cart-item.component";
import "./cart-dropdown.styles.scss"

const CartDropdown = () =>{
   const { cartItems} = useContext(CartContext)
   const navigate = useNavigate();
   const handleclick =() =>{
      navigate("/checkout")
   }

    return (
        <div className="cart-dropdown-container">
        <div className="cart-items">
        {cartItems.map((item , index)=>{
           return  (<div key={index}>
            <CartItem cartitemstoadd={item} />
            
            </div>)
        })}
        </div>
        
        <Button onClick={handleclick}>GO TO CHECKOUT</Button>
        </div>
    )

}

export default CartDropdown;