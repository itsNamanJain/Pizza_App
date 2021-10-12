import React,{useEffect} from 'react'
import {getOrders} from '../actions/orderAction'
import { useSelector,useDispatch} from 'react-redux'
import Loader from './Loader'
import Error from './Error'
import {Row,Col, Container} from 'react-bootstrap'

const Orders = () => {
    const orderState  = useSelector((state)=>state.getOrderReducer)
    const {loading, orders,error} = orderState
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getOrders())
    }, [dispatch])
    return (
        <>
         <Container>
            <h2>Your Orders</h2>
            {loading && <Loader/>}
            {error && <Error error="Something went Wrong"/>}
            {
                orders && orders.map(order=>(
                   
                    <Row>
                        <Col md={4} key={order.userid}>
                        
                           { order.orderItems.map(item=>(
                                <h6 key={item.name}>{item.name} [{item.varient}] * {item.quantity} = {item.price}</h6>
                           )) }
                        </Col>
                        <Col md={4}>
                            <h4>Address</h4>
                            <h6>Street : {order.shippingAddress.street}</h6>
                            <h6>City : {order.shippingAddress.city}</h6>
                            <h6>Pincode : {order.shippingAddress.pincode}</h6>
                            <h6>Country : {order.shippingAddress.country}</h6>
                        </Col>
                        <Col md={4}>
                            <h4>Order Info </h4>
                            <h6>Order Amount : {order.orderAmount}</h6>
                            <h6>Transaction Id : {order.transactionId}</h6>
                            <h6>Order Id : {order._id}</h6>
                        </Col>

                    </Row>
                   
                ))
            }
            </Container>
        </>
    )
}

export default Orders
