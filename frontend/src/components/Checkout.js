import React from 'react'
import { Button } from 'react-bootstrap';
import {useDispatch,useSelector} from 'react-redux'
import StripeCheckout from 'react-stripe-checkout';
import {placeOrder} from '../actions/orderAction'
import Loader from './Loader'
import Success from './Success'
import Error from './Error'

const Checkout = ({subTotal}) => {
    const orderState = useSelector((state)=>state.placeOrderReducer);
    const {loading,success,error} = orderState
    const dispatch = useDispatch();
    const tokenHandler= (token)=>{
        dispatch(placeOrder(token,subTotal))
    }
    return (
        <>
        { loading && (<Loader/>)}
        { success &&( <Success success="Order Placed Successfully"/>)}
        { error && (<Error error="Something went Wrong"/>)}

            <StripeCheckout
            amount={subTotal*100}
            shippingAddress
            token={tokenHandler}
            stripeKey="pk_test_51JixCWSIlYuLp39RXZcnL0LtWdBz5D9yrPnCapmMcXeBThAhYfU0TMR0jVs671U4YZwWKflpwSLfHLW0aAvQKUlU00VtsyI5NF"
            currency="INR"
            >
                <Button>Pay Now</Button>
            </StripeCheckout>
        </>
    )
}

export default Checkout
