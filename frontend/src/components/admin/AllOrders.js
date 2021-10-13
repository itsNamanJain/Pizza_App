import React,{useEffect} from 'react'
import {useDispatch,useSelector} from 'react-redux'
import { getAllOrders,deliverOrder } from '../../actions/orderAction'
import { Button, Table } from 'react-bootstrap';
import Loader from '../../components/Loader';
import Error from '../../components/Loader';
const AllOrders = () => {
    const dispatch = useDispatch()
    const allOrderState =  useSelector(state => state.allOrderReducer)
    const {loading,error,orders} = allOrderState;
    useEffect(() => {
        dispatch(getAllOrders())
    }, [dispatch])
    return (
        <div className="text-center">
        <h2>Order List</h2>
         {loading&&<Loader/>}
         {error&&<Error error="All orders request Fail"/>}
         <Table striped bordered hover>
  <thead>
    <tr>
      <th>Order Id</th>
      <th>Email</th>
      <th>User Id</th>
      <th>Amount</th>
      <th>Date</th>
      <th>Status</th>
    </tr>
  </thead>
  <tbody>
   {
     orders &&  orders.map((order) =>(
         <tr key ={order._id}>
         <td>{order._id}</td>
         <td>{order.email}</td>
         <td>{order.userid}</td>
         <td>{order.orderAmount}</td>
         <td>{order.createdAt.substring(0,10)}</td>
         <td>{order.isDelivered? <p className="text-success">Delivered</p>:(
             <>
             <Button className="btn-danger" onClick={()=>dispatch(deliverOrder(order._id))}>Deliver</Button>
             </>
         )}</td>
         </tr>
     ))
   }
  </tbody>
</Table>

        </div>
    )
}

export default AllOrders
