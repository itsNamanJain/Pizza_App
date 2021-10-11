import axios from 'axios';
export const placeOrder = (token,subTotal)=>async(dispatch,getState)=> {
    dispatch({type:"Place_Order_Request"})
    const currentUser =  getState().loginUserReducer.currentUser
    const cartItems = getState().cartReducer.cartItems
    try {
        const res = await axios.post('/api/orders/placeorder',{token,subTotal,currentUser,cartItems})
                dispatch({type:"Place_Order_Success"})
                console.log(res)
    } catch (error) {
        dispatch({type:"Place_Order_Fail"})
    }
}

export const getOrders = ()=>async(dispatch,getState)=> {
  
    const currentUser =  getState().loginUserReducer.currentUser
    dispatch({type:"User_Order_Request"}) 
    try {
        const res = await axios.post('/api/orders/getUserorder',{userid:currentUser._id})
                dispatch({type:"User_Order_Success",payload:res.data})
                console.log(res)
    } catch (error) {
        dispatch({type:"User_Order_Fail",payload:error})
    }
} 