import { createContext,  useReducer} from "react";

const addCartItems = (cartItems, productsToAdd)=>{
    
    const existingCartItems = cartItems.find(item=>{
      return (productsToAdd.id===item.id)
    })
    
    if(existingCartItems){
     return  cartItems.map((item)=> (item.id===productsToAdd.id ? {...item,quantity:item.quantity+1}:item)
      )
    }else{
      return [...cartItems,{...productsToAdd, quantity:1}]
    }
    
}
const reduceCartItems =(cartItems, productTorRduce) =>{
  if(productTorRduce.quantity===1){
    return cartItems.filter(item=> productTorRduce.id!==item.id)
  }else{
   return  cartItems.map(item=>{
      if(productTorRduce.id===item.id){
        return {...item,quantity:item.quantity-1}
      }else {
        return item
      }
       
    })
  }
}
const clearCartItem=(cartItems,cartitemtoclear) =>{
 return cartItems.filter(item=>cartitemtoclear.id!==item.id)
}
 const CART_ACTION_TYPE ={
  'SET_CART_ITEMS':'SET_CART_ITEMS',
  'IS_CART_OPEN': 'IS_CART_OPEN'
 }
export const cartReducer =(state,action)=>{
  console.log(action)
  const {type , payload} = action;
  switch(type){
    case CART_ACTION_TYPE.SET_CART_ITEMS :
      return {
        ...state , 
        ...payload
      }
      case CART_ACTION_TYPE.IS_CART_OPEN:
        return {
          ...state,
          isCartOpen:payload
        }
      default :
      throw new Error(`unhandled type ${type} in cartReducer`)
  }
}
const INITIAL_STATE ={
isCartOpen : false,
cartItems:[],
cartCount:0,
cartTotal:0,
}


export const CartContext = createContext({
isCartOpen : false,
setisCartOpen:()=>{},
cartItems:[],
cartCount:0,
cartTotal:0,

addItemsToCart:()=>{},
reduceItemsToCart:()=>{},
clearItemFromCart:()=>{}

})


export const CartProvider =({children}) =>{
  
  
  
const [state,dispatch] = useReducer(cartReducer ,INITIAL_STATE);
const {cartItems,cartCount,cartTotal , isCartOpen} = state;
const setisCartOpen =(isCartOpen)=>{
  dispatch({type:CART_ACTION_TYPE.IS_CART_OPEN, payload:isCartOpen})
    
}
  const updateCartItems =(newCartItems) =>{
    const newCartCount = newCartItems.reduce((acc,currentelement)=>acc+currentelement.quantity ,0)
    const newCartTotal = newCartItems.reduce((acc,currentelement)=>acc+(currentelement.quantity*currentelement.price),0)
    dispatch({type:CART_ACTION_TYPE.SET_CART_ITEMS,payload:{cartItems:newCartItems,cartCount:newCartCount,cartTotal:newCartTotal}})
  }

  const addItemsToCart =(productsToAdd) =>{
   const newcartItems= addCartItems(cartItems, productsToAdd)
   updateCartItems(newcartItems) 
  }
  const reduceItemsToCart = (productTorRduce) =>{
    const newcartItems= reduceCartItems(cartItems,productTorRduce)
    updateCartItems(newcartItems)
  }
  const clearItemFromCart =(cartitemtoclear)=>{
    const newcartItems = clearCartItem(cartItems,cartitemtoclear)
    updateCartItems(newcartItems)

  }
  
  
 const value ={isCartOpen , setisCartOpen , cartItems , addItemsToCart , cartCount ,reduceItemsToCart ,clearItemFromCart,cartTotal}
  return  <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

