import "./cart-item.styles.scss"
const CartItem =({cartitemstoadd}) =>{
    
    const {name , imageUrl , price , quantity} = cartitemstoadd ;
   return (<div className="cart-item-container ">
   <img  src={imageUrl} alt={`${name}`}/>
    <div className="item-details">
    <span className="name">{name}</span>
    <span className="price">{quantity}* ${price}</span>
    </div >
    
    </div>)
}


export default CartItem ;