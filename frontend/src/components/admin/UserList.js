import React,{useEffect} from 'react'
import { useDispatch,useSelector } from 'react-redux'
import {AiFillDelete} from 'react-icons/ai'
import { deleteUser, getAllusers } from '../../actions/userAction'
import Error from '../Error';
import Loader from '../Loader';
import { Table } from 'react-bootstrap'
const UserList = () => {
    const dispatch = useDispatch()
    const userState =  useSelector(state => state.getAllUsersReducer)
    const {loading,error,users} = userState
    useEffect(() => {
        dispatch(getAllusers())
    }, [dispatch])
    return (
        <div className="text-center">
            {loading && (<Loader/>)}
        {error && (<Error error="Something Went Wrong"/>)}
         <h2>User List</h2> 
         <Table striped bordered hover>
  <thead>
    <tr>
      <th>User Id</th>
      <th>Name</th>
      <th>Email</th>
      <th>Delete</th>
    </tr>
  </thead>
  <tbody>
   {
       users && users.map(user=>(
           <tr key={user._id}>
               <td>{user._id}</td>
               <td>{user.name}</td>
               <td>{user.email}</td>
               <td>
               <AiFillDelete style={{color:"red", cursor:"pointer"}} onClick={()=>{dispatch(deleteUser(user._id))}}/>
               </td>
           </tr>
       ))
   }
  </tbody>
</Table>
        </div>
    )
}

export default UserList
