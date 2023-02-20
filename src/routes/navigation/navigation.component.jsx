import { useContext } from "react";
import { Outlet , Link } from "react-router-dom";
import { Fragment } from "react/cjs/react.production.min";
import {ReactComponent as Crownlogo} from "../../assets/crown.svg"
import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";
import { UserContext } from "../../context/user.context";
import { signOutUser } from "../../utils/firebase/firebase.utils";
import "./navigation.styles.scss"
import { CartContext } from "../../context/cart.context";
const Navigation = () =>{
    const {currentUser } = useContext(UserContext)
    const {isCartOpen} = useContext(CartContext)
    const logoutUser = async() =>{
      await signOutUser()
    
    }
    return (<Fragment>
        <div className="navigation">
        
        <Link className="logo-container" to="/">
        <Crownlogo className="logo" />
        </Link>
       
        <div className="nav-links-container">
        <Link className="nav-link" to="/shop">Shop</Link>
        {currentUser?<span className="nav-link" onClick={logoutUser}>Sign Out</span>:<Link className="nav-link" to="/auth">Sign In</Link>}
        <CartIcon />
        </div>
        {isCartOpen && <CartDropdown />}
        
        </div>
        <Outlet />
        </Fragment>)
}

export default Navigation;