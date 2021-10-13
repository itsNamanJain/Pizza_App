export const getAllPizzaReduces = (state ={pizzas:[]},action)=>{
     switch(action.type){
         case 'Get_Pizza_Request':
             return{
                 ...state,
                 loading:true
             }
         case 'Get_Pizza_Success':
             return{
                 pizzas:action.payload,
                 loading:false
             }
         case 'Get_Pizza_Fail':
            return{
                error: action.payload,
                loading:false
            }
         default: return state
     }
}

export const AddPizzaReducer = (state ={},action)=>{
    switch(action.type){
        case 'Add_Pizza_Request':
            return{
                ...state,
                loading:true
            }
        case 'Add_Pizza_Success':
            return{
               success:true,
                loading:false
            }
        case 'Add_Pizza_Fail':
           return{
               error: action.payload,
               loading:false
           }
        default: return state
    }
}

export const getPizzaByIdReducer = (state ={},action)=>{
    switch(action.type){
        case 'Get_PizzaById_Request':
            return{
                ...state,
                loading:true
            }
        case 'Get_PizzaById_Success':
            return{
             pizza:action.payload,
                loading:false
            }
        case 'Get_PizzaById_Fail':
           return{
               error: action.payload,
               loading:false
           }
        default: return state
    }
}

export const updatePizzaByIdReducer = (state ={},action)=>{
    switch(action.type){
        case 'Update_PizzaById_Request':
            return{
                ...state,
                updateloading:true
            }
        case 'Update_PizzaById_Success':
            return{
                updatesuccess:true,
                updateloading:false
            }
        case 'Update_PizzaById_Fail':
           return{
               updateerror: action.payload,
               updateloading:false
           }
        default: return state
    }
}