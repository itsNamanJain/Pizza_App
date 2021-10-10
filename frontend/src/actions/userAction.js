import axios from  'axios';


export const registerUser = (user)=>async(dispatch)=>{
    dispatch({type:'Register_User_request'})
    try {
        const res =await axios.post('/api/users/register',user);
        dispatch({type:'Register_User_Success'})
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
        dispatch({type:'Logout_User_Success'})
        window.location.href='/login';
        
}