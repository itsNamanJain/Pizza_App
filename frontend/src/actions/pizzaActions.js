import axios from  'axios';
import swal from 'sweetalert';
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
        dispatch({type:'Add_Pizza_Success',payload:res.data});
        window.location.href="/admin/pizzalist";
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
export const updatePizza = (updatedPizza)=> async(dispatch)=>{
    dispatch({type:'Update_PizzaById_Request'})
    try {
        const res =await axios.post('/api/pizzas/updatepizza',{updatedPizza});
        dispatch({type:'Update_PizzaById_Success',payload:res.data})
        swal("Good job!", "Pizza Updated SuccessFully", "success");
        window.location.href="/admin/pizzalist";
    } catch (err) {
        dispatch({type:'Update_PizzaById_Fail',payload:err})
        
    }
}  
export const deletePizza = (pizzaId)=> async(dispatch)=>{
      
    try {
        await axios.post('/api/pizzas/deletepizza',{pizzaId});
        swal("Good job!", "Pizza Deleted SuccessFully", "success");
        window.location.href="/admin/pizzalist";
       
    } catch (err) {
        swal("Error in deleting pizza");
    }
}  