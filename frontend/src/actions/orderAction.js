import axios from 'axios';
import swal from 'sweetalert';

export const placeOrder = (token,subTotal)=>async(dispatch,getState)=> {
    dispatch({type:"Place_Order_Request"})
    const currentUser =  getState().loginUserReducer.currentUser
    const cartItems = getState().cartReducer.cartItems
    try {
        axios.post('/api/orders/placeorder',{token,subTotal,currentUser,cartItems})
                dispatch({type:"Place_Order_Success"})
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
    } catch (error) {
        dispatch({type:"User_Order_Fail",payload:error})
    }
} 

export const getAllOrders = ()=>async(dispatch,getState)=> {
  
    dispatch({type:"All_Order_Request"}) 
    try {
        const res = await axios.get('/api/orders/allUserorder')
                dispatch({type:"All_Order_Success",payload:res.data})
    } catch (error) {
        dispatch({type:"All_Order_Fail",payload:error})
    }
}

export const deliverOrder = (orderid)=>async(dispatch,getState)=> {
  
    // const currentUser =  getState().loginUserReducer.currentUser
    dispatch({type:"Get_All_Order_Request"}) 
    try {
       await axios.post('/api/orders/deliverorder',{orderid})
        swal("Good job!", "Order Delivered SuccessFully", "success");
        const orders = await axios.post('/api/orders/deliverorder',{orderid})
        dispatch({type:"Get_All_Order_Success",payload:orders.data})
        window.location.href="/admin/allorders";
       

    } catch (error) {
        dispatch({type:"Get_All_Order_Fail",payload:error})
    }
}

