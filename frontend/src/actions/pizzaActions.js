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

export const AddNewPizza = (pizza)=> async(dispatch)=>{
    dispatch({type:'Add_Pizza_Request'})
    try {
        const res =await axios.post('/api/pizzas/addpizza',{pizza});
        dispatch({type:'Add_Pizza_Success',payload:res.data})
    } catch (err) {
        dispatch({type:'Add_Pizza_Fail',payload:err})
        
    }
}  

export const getPizzaById = (pizzaId)=> async(dispatch)=>{
    dispatch({type:'Get_PizzaById_Request'})
    try {
        const res =await axios.post('/api/pizzas/getpizzabyid',{pizzaId});
        dispatch({type:'Get_PizzaById_Success',payload:res.data})
    } catch (err) {
        dispatch({type:'Get_PizzaById_Fail',payload:err})
        
    }
}  