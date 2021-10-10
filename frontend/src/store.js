import {createStore,combineReducers,applyMiddleware} from 'redux';
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import {getAllPizzaReduces} from './reducers/PizzaReducers'
import { cartReducer } from './reducers/CartReducer';
import { registerUserReducer,loginUserReducer } from './reducers/userReducer';

const cartItems = localStorage.getItem('cartItems')?JSON.parse(localStorage.getItem('cartItems')):[]
const currentUser = localStorage.getItem('currentUser')?JSON.parse(localStorage.getItem('currentUser')):null
const initialState ={
    cartReducer:{
        cartItems:cartItems
    },
    loginUserReducer:{
        currentUser:currentUser
    }
}



const rootReduces = combineReducers({
    getAllPizzaReduces:getAllPizzaReduces,
    cartReducer:cartReducer,
    registerUserReducer:registerUserReducer,
    loginUserReducer:loginUserReducer 
})


const middleware = [thunk];
const store = createStore(rootReduces,initialState,composeWithDevTools(applyMiddleware(...middleware)))
export default store;