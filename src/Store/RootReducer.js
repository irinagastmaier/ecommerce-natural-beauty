import {combineReducers} from 'redux'
import {cartReducer} from './CartReducer'

import { productsReducer } from './ProductsReducer'

const rootReducer = combineReducers({
    productsReducer,
   //product: productsReducer,
cartReducer
//cart: cartReducer
})

export default rootReducer;