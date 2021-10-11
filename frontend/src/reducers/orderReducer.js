export const placeOrderReducer = (state ={},action)=>{
    switch(action.type){
        case 'Place_Order_Request':
            return{
                
                loading:true
            }
        case 'Place_Order_Success':
            return{
                success:true,
                loading:false
            }
        case 'Place_Order_Fail':
           return{
               error: action.payload,
               loading:false
           }
        default: return state
    }
}

export const getOrderReducer = (state ={orders:[]},action)=>{
    switch(action.type){
        case 'User_Order_Request':
            return{
                loading:true
            }
        case 'User_Order_Success':
            return{
                success:true,
                loading:false,
                orders:action.payload
            }
        case 'User_Order_Fail':
           return{
               error: action.payload,
               loading:false
           }
        default: return state
    }
}