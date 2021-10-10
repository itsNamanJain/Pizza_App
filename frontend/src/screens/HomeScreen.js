import React,{useEffect} from 'react'
import {Container, Row,Col } from "react-bootstrap";
import {useDispatch,useSelector} from 'react-redux'
import {getAllPizzas} from "../actions/pizzaActions";
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
            {loading? (<h1>loading...</h1>):error?(<h1>Error</h1>):(
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
