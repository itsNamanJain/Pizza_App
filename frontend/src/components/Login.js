import React,{useState,useEffect} from 'react'
import { Form,Container,Button } from 'react-bootstrap'
import {useSelector,useDispatch}  from 'react-redux'
import {loginUser} from '../actions/userAction'
const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();

    const handleLogin =async ()=>{
     const user = {email,password};
     console.log(user)
     dispatch(loginUser(user));
 }
 useEffect(() => {
   if(localStorage.getItem("currentUser")){
     window.location.href="/";
   }
 }, [])

    return (
        <Container className="mt-5">
            <Form>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email"  required value={email} onChange={(e)=>setEmail(e.target.value)}/>
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" required value={password} onChange={(e)=>setPassword(e.target.value)} />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group>
  <Button variant="primary" onClick={handleLogin}>
    Submit
  </Button>
</Form>
        </Container>
    )
}

export default Login
