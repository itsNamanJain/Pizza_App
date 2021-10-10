export const getAllPizzaReduces = (state ={pizzas:[]},action)=>{
     switch(action.type){
         case 'Get_Pizza_Request':
             return{
                 ...state,
                 loading:true
             }
         case 'Get_Pizza_Success':
             return{
                 pizzas: action.payload,
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