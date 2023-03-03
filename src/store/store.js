import { compose , applyMiddleware } from "redux";
import { legacy_createStore as createStore} from 'redux'

import logger from "redux-logger"
import { rootReducer } from "./root-reducer";

const Middleware = [logger]
const EnhancedMiddleWare = compose(applyMiddleware(...Middleware))



export const store = createStore(rootReducer , undefined , EnhancedMiddleWare)