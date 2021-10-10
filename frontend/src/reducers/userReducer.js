export const registerUserReducer = (state ={},action)=>{
    switch(action.type){
        case 'Register_User_request':
            return{
                
                loading:true
            }
        case 'Register_User_Success':
            return{
                success:true,
                loading:false
            }
        case 'Register_User_Fail':
           return{
               error: action.payload,
               loading:false
           }
        default: return state
    }
}

export const loginUserReducer = (state ={},action)=>{
    switch(action.type){
        case 'Login_User_request':
            return{
                
                loading:true
            }
        case 'Login_User_Success':
            return{
                success:true,
                loading:false,
                currentUser:action.payload
            }
        case 'Login_User_Fail':
           return{
               error: action.payload,
               loading:false
           }
        default: return state
    }
}