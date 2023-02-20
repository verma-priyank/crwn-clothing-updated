import { createContext, useState , useEffect } from "react";
import { onAuthStateChangedListener ,CreateUserDocumentFromAuth } from "../utils/firebase/firebase.utils";

export const UserContext = createContext({
currentUser : [null] ,
setcurrentUser: () =>{},

})
export const UserProvider =({children}) =>{
     const [currentUser , setcurrentUser] = useState(null)
     
      
    const value = {currentUser , setcurrentUser , }
    useEffect(()=>{
        const unsubscribe = onAuthStateChangedListener((user)=>{
           console.log(user)
           if(user){
            CreateUserDocumentFromAuth(user);
           }
           setcurrentUser(user)
           
        })
        return unsubscribe ;
    } ,[])
 return   <UserContext.Provider value={value}>{children}</UserContext.Provider>
}