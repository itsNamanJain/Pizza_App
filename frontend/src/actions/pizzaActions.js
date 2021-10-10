import axios from  'axios';

export const getAllPizzas = ()=> async(dispatch)=>{
    dispatch({type:'Get_Pizza_Request'})
    try {
        const res =await axios.get('/api/pizzas/getPizzas');
        dispatch({type:'Get_Pizza_Success',payload:res.data})
    } catch (err) {
        dispatch({type:'Get_Pizza_Fail',payload:err})
        
    }
}  