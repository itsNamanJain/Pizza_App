import React,{useEffect} from 'react'
import { useParams } from 'react-router-dom';
import { useDispatch,useSelector } from 'react-redux'
import {getPizzaById} from '../../actions/pizzaActions'
const EditPizza = ({match}) => {
    const {pizzaId } = useParams();
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getPizzaById(pizzaId))
    }, [dispatch])
    return (
        <div>
            <h2>Edit Pizza</h2>
        </div>
    )
}

export default EditPizza
