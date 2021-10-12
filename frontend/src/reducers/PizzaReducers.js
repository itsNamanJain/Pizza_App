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
