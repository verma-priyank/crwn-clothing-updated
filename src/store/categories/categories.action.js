import { SET_CATEGORIES_TYPES } from "./categories.types";

const createAction =(type , payload) => ({type , payload})

export const setCategoriesMap=(categoriesMap)=>{
    
    return createAction(SET_CATEGORIES_TYPES.SET_CATEGORIES_TYPES , categoriesMap)
}