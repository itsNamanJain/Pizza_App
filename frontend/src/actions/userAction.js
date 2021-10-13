import axios from  'axios';
import swal from 'sweetalert';


export const registerUser = (user)=>async(dispatch)=>{
    dispatch({type:'Register_User_request'})
    try {
        const res =await axios.post('/api/users/register',user);
        dispatch({type:'Register_User_Success'})
        console.log(res)
    } catch (error) {
        
        dispatch({type:'Register_User_Fail',payload:error})
    }
}

export const loginUser = (user)=>async(dispatch)=>{
    dispatch({type:'Login_User_request'})
    try {
        const res =await axios.post('/api/users/login',user);
        dispatch({type:'Login_User_Success',payload:res.data});
        localStorage.setItem("currentUser",JSON.stringify(res.data));
        window.location.href='/';
       
    } catch (error) {
        dispatch({type:'Login_User_Fail',payload:error})
    }
}

export const logoutUser = ()=>async(dispatch)=>{
    
        localStorage.removeItem("currentUser");
        dispatch({type:'Logout_User_Success'});
        
        window.location.href='/login';
        
}

export const getAllusers = ()=> async(dispatch)=>{
    dispatch({type:'Get_Users_Request'})
    try {
        const res =await axios.get('/api/users/getallusers');
        dispatch({type:'Get_Users_Success',payload:res.data})
    } catch (err) {
        dispatch({type:'Get_Users_Fail',payload:err})
        
    }
} 

export const deleteUser = (userId)=> async(dispatch)=>{
      
    try {
        await axios.post('/api/users/deleteuser',{userId});
        swal("Good job!", "User Deleted SuccessFully", "success");
        window.location.href="/admin/userlist";
       
    } catch (err) {
        swal("Error in deleting user");
    }
}  