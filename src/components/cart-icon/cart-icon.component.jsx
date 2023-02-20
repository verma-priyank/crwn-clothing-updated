import "./cart-icon.styles.scss"
import { ReactComponent as ShoppingBag} from "../../assets/cart-icon.svg"
import { useContext } from "react"
import { CartContext } from "../../context/cart.context"

const CartIcon = () =>{

const {isCartOpen ,setisCartOpen} = useContext(CartContext)
const cartHandler =()=>{
    setisCartOpen(!isCartOpen)
}

    return(<div className="cart-icon-container">
        <ShoppingBag className="shopping-icon" onClick={cartHandler} />
        <span className="item-count">0</span>
        </div>)
}

export default CartIcon;