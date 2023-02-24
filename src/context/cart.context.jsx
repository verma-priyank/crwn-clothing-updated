import { createContext, useEffect, useState } from "react";

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
  const [isCartOpen , setisCartOpen] = useState(false)
  const [cartItems , setcartItems] = useState([])
  const [cartCount, setcartCount] = useState(0)
  const [cartTotal, setcartTotal] = useState(0)
  const addItemsToCart =(productsToAdd) =>{
    setcartItems(addCartItems(cartItems, productsToAdd)) 
  }
  const reduceItemsToCart = (productTorRduce) =>{
    setcartItems(reduceCartItems(cartItems,productTorRduce))
  }
  const clearItemFromCart =(cartitemtoclear)=>{
    setcartItems(clearCartItem(cartItems,cartitemtoclear))

  }
  useEffect(()=>{

    const newtotalItems = cartItems.reduce((acc,currentelement)=>acc+currentelement.quantity ,0)
    setcartCount(newtotalItems)
    const newCartTotal = cartItems.reduce((acc,currentelement)=>acc+(currentelement.quantity*currentelement.price),0)
    setcartTotal(newCartTotal)
  },[cartItems]) 
  
 const value ={isCartOpen , setisCartOpen , cartItems , addItemsToCart , cartCount ,reduceItemsToCart ,clearItemFromCart,cartTotal}
  return  <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

