import React,{useEffect} from 'react'
import {Container,Table } from "react-bootstrap";
import {useDispatch,useSelector} from 'react-redux'
import {AiFillEdit,AiFillDelete} from 'react-icons/ai'
import {deletePizza, getAllPizzas} from "../../actions/pizzaActions";
import Error from '../Error';
import Loader from '../Loader';
import { Link } from 'react-router-dom';

const PizzaList = () => {
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
            <div>
            <Table striped bordered hover size="sm">
  <thead>
    <tr>
      <th>Image</th>
      <th>Pizza Name</th>
      <th>Prices</th>
      <th>Category</th>
      <th>Action</th>
    </tr>
  </thead>
  <tbody>
    {
        pizzas && pizzas.map(pizza=>(
            <tr key={pizza.name}>
                <td><img src={pizza.image} alt="pizza" style={{height:"90px",width:"90px"}}/></td>
                <td>{pizza.name}</td>
                <td>Small : {pizza.prices[0]['small']}<br/>
                Medium : {pizza.prices[0]['medium']}<br/>
                Large : {pizza.prices[0]['large']}</td>
                <td>{pizza.category}</td>
                <td>{pizza.name}</td>
                <td>
                  <Link to={`/admin/editpizza/${pizza._id}`}>
                  <AiFillEdit style={{cursor:"pointer"}}/>
                  </Link>
                &nbsp;<AiFillDelete style={{color:"red", cursor:"pointer"}} onClick={()=>{dispatch(deletePizza(pizza._id))}}/></td>
            </tr>
        ))
    }
  </tbody>
</Table>
            </div>
        )}
            
        </Container>
        </>
    )
}

export default PizzaList
