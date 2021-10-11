import React,{useState} from 'react'
import { Form,Container,Button } from 'react-bootstrap'
import {useSelector,useDispatch}  from 'react-redux'
import {registerUser} from '../actions/userAction'
import Error from './Error'
import Loader from './Loader'
import Success from './Success'
const Register = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const dispatch = useDispatch();
    const registerState = useSelector((state)=>state.registerUserReducer)
    const {error,success,loading} = registerState;

    const handleRegister =async (e)=>{
         if(password!==confirmPassword){
             alert("password And Confirm Password should be same");
         }
         else if(password.length<8){
             alert("password leght should be atleast 8");
         }
         else{
             const user = {name,email,password,confirmPassword}
             dispatch(registerUser(user));
         }
         e.preventDefault();
         
    }
    
    return (
        <>
        {loading && <Loader/>}
        {success && <Success success="User Register Success"/>}
        {error && <Error error="User Register error"/>}

        <Container className="mt-5">
        <Form>
        <Form.Group className="mb-3" controlId="formBasicName">
<Form.Label>Name</Form.Label>
<Form.Control type="text" placeholder="Enter Name" required value={name} onChange={(e)=>setName(e.target.value)} />
</Form.Group>
<Form.Group className="mb-3" controlId="formBasicEmail">
<Form.Label>Email address</Form.Label>
<Form.Control type="email" placeholder="Enter email" required value={email} onChange={(e)=>setEmail(e.target.value)}/>
</Form.Group>

<Form.Group className="mb-3" controlId="formBasicPassword">
<Form.Label>Password</Form.Label>
<Form.Control type="password" placeholder="Password" required value={password} onChange={(e)=>setPassword(e.target.value)} />
</Form.Group>
<Form.Group className="mb-3" controlId="formBasicConPassword">
<Form.Label>Confirm Password</Form.Label>
<Form.Control type="password" placeholder="Confirm Password" required value={confirmPassword} onChange={(e)=>setConfirmPassword(e.target.value)} />
</Form.Group>
<Form.Group className="mb-3" controlId="formBasicCheckbox">
<Form.Check type="checkbox" label="Check me out" />
</Form.Group>
<Button variant="primary" onClick={handleRegister}>
Submit
</Button>
</Form>
    </Container>
    </>
    )
}

export default Register
