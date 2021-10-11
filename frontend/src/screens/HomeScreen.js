import React,{useEffect} from 'react'
import {Container, Row,Col } from "react-bootstrap";
import {useDispatch,useSelector} from 'react-redux'
import {getAllPizzas} from "../actions/pizzaActions";
import Error from '../components/Error';
import Loader from '../components/Loader';
import Pizza from '../components/Pizza';
const HomeScreen = () => {
    const dispatch = useDispatch();
    const pizzaState = useSelector(state=>state.getAllPizzaReduces);
    const {loading,pizzas,error} = pizzaState;
    useEffect(()=>{
        dispatch(getAllPizzas())
    },[dispatch])
    return (
        <>
            <Container>
            {loading? (<Loader/>):error?(<Error>error</Error>):(
                <Row>
                    {pizzas.map((pizza)=>(
                        <Col md={4}>
                        <Pizza pizza={pizza}/>
                        </Col>
                    ))}
                </Row>
            )}
                
            </Container>
        </>
    )
}

export default HomeScreen
