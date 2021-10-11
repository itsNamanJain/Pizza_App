import React,{useEffect} from 'react'
import {getOrders} from '../actions/orderAction'
import { useSelector,useDispatch} from 'react-redux'

const Orders = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getOrders())
    }, [])
    return (
        <>
            
        </>
    )
}

export default Orders
