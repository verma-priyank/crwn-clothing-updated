import { createContext, useState , useEffect,useReducer } from "react";
import { onAuthStateChangedListener ,CreateUserDocumentFromAuth } from "../utils/firebase/firebase.utils";

export const UserContext = createContext({
currentUser : [null] ,
setcurrentUser: () =>{},

})
export const USER_ACTION_TYPE ={
   'SET_CURRENT_USER':'SET_CURRENT_USER'
}
export const userReducer =(state,action)=>{
   console.log(action)
   const {type , payload} = action;
   switch(type){
      case USER_ACTION_TYPE.SET_CURRENT_USER :
         return {
            ...state,
            currentUser:payload
         }
         default :
         throw new Error(`Unhandled type ${type} in User Reducer`)
   }
}
const INITIAL_STATE ={
   currentUser : null
}
export const UserProvider =({children}) =>{
   
     const [state , dispatch] = useReducer(userReducer,INITIAL_STATE)
     const {currentUser} = state;
      const setcurrentUser=(user)=>{
         dispatch({type:USER_ACTION_TYPE.SET_CURRENT_USER, payload:user})
      }
    const value = {currentUser , setcurrentUser , }
    useEffect(()=>{
        const unsubscribe = onAuthStateChangedListener((user)=>{
           
           if(user){
            CreateUserDocumentFromAuth(user);
           }
           setcurrentUser(user)
           
        })
        return unsubscribe ;
    } ,[])
 return   <UserContext.Provider value={value}>{children}</UserContext.Provider>
}