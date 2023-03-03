import { USER_ACTION_TYPE} from "./user.types"
export const createAction = (type,payload) =>({type ,payload})


export const setcurrentUser=(user)=>{
   
   return createAction(USER_ACTION_TYPE.SET_CURRENT_USER ,user)
    
}

