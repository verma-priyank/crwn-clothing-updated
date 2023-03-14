import {takeLatest , all , call , put} from "redux-saga/effects"
import { fetchCategoriesSuccess , fetchCategoriesFailed } from "./category.action";
import { CATEGORIES_ACTION_TYPES } from "./category.types";
import { getCategoriesAndDocuments } from "../../utils/firebase/firebase.utils";



export function* fetchCategoriesAsync(){
    try{
        const categoriesArray = yield call(getCategoriesAndDocuments , 'categories');
         yield  put(fetchCategoriesSuccess(categoriesArray));
      }catch(error){
        yield  put(fetchCategoriesFailed(error))
      }
     }


export function* onFetchCategory(){
  yield  takeLatest(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START , fetchCategoriesAsync)
}

export function* categorySaga(){
    yield all([call(onFetchCategory)])
}