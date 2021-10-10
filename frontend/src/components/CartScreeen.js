import React from 'react'
import {AiOutlineMinusCircle,AiOutlinePlusCircle,AiFillDelete} from 'react-icons/ai'

import {Container,Row,Col} from 'react-bootstrap'
import { useSelector ,useDispatch} from 'react-redux'
import {cartAction,deleteAction} from '../actions/cartAction'
const CartScreeen = () => {
    const cartState=  useSelector(state => state.cartReducer);
    const cartItems = cartState.cartItems; 
    const dispatch = useDispatch();
    const t = (pre, cur) => pre =pre + cur;
    console.log(cartItems);
    const subTotal = cartItems.reduce((x,items)=>x+items.price,0);

    return (
        <Container>
            <Row className="mt-5">
                <Col md={6}>
                    <h4>Cart Items</h4>
                    <Row>
                        {cartItems.map((items)=>(
                            <>
                            <Col md={7}>
                                <h5>{items.name} [{items.varient}]</h5>
                                <p>Price : {items.quantity} x {items.prices[0][items.varient]} = {items.price}</p>
                                <p>Quantity :&nbsp;<AiOutlineMinusCircle style={{cursor:"pointer"}} onClick={()=>dispatch(cartAction(items,items.quantity-1,items.varient))} className="text-danger"/> {items.quantity} &nbsp;<AiOutlinePlusCircle className="text-success" style={{cursor:"pointer"}} onClick={()=>dispatch(cartAction(items,items.quantity+1,items.varient))}/></p>
                                <p onClick={()=>dispatch(deleteAction(items))}   style={{cursor:"pointer"}}><AiFillDelete/>&nbsp; Delete </p>
                            </Col>
                            <Col md={5}>
                           <img alt={items.name} src={items.image} style={{width:"80px",height:"90px",borderRadius:"10px",cursor:"pointer"}} className="m-1"/>
                           
                            </Col>
                            <hr/>
                            </>
                        ))}
                    </Row>
                </Col>
                <Col md={4}>
                    <h4>Payment Info</h4>
                    <h5>SubTotal :</h5>
                    <h5>Rs. {subTotal} /-</h5>
                </Col>
            </Row>
        </Container>
    )
}

export default CartScreeen
