import React,{useEffect} from 'react'
import {Router, Switch, Route} from 'react-router-dom'
import {Container, Row,Col,Button,ButtonGroup} from 'react-bootstrap'
import {useSelector} from 'react-redux'
import UserList from '../components/admin/UserList'
import AllOrders from '../components/admin/AllOrders'
import AddPizza from '../components/admin/AddPizza'
import PizzaList from '../components/admin/PizzaList'
import { createBrowserHistory } from "history";
import EditPizza from '../components/admin/EditPizza'
const history = createBrowserHistory();

const AdminScreen = () => {

    const  userState = useSelector(state => state.loginUserReducer)
    const {currentUser} = userState
    useEffect(() => {
       if(localStorage.getItem('currentUser')===null || !currentUser.isAdmin){
           window.location.href = "/";
       }
    }, [currentUser.isAdmin])
    return (
        <Container>
        <Router history={history}>
        <Row>
        <h2 className="text-center bg-dark text-light p-2 m-2">Admin Panel</h2>
            <Col md={3}>
            <ButtonGroup vertical className="p-2 m-2">
  <Button onClick={()=>history.push('/admin/userlist')}  className="p-2 m-2">All Users</Button>
  <Button onClick={()=>history.push('/admin/pizzalist')}  className="p-2 m-2">All Pizzas</Button>
  <Button  onClick={()=>history.push('/admin/addpizza')} className="p-2 m-2">Add New Pizza</Button>
  <Button onClick={()=>history.push('/admin/allorders')}  className="p-2 m-2">Orders</Button>

</ButtonGroup>
            </Col>
            <Col md={9}>
           
                <Switch>
                    <Route exact path="/admin"><UserList/></Route>
                    <Route exact path="/admin/userlist"><UserList/></Route>
                    <Route exact path="/admin/editpizza/:pizzaId"><EditPizza/></Route>
                    <Route exact path="/admin/pizzalist"><PizzaList/></Route>
                    <Route exact path="/admin/addpizza"><AddPizza/></Route>
                    <Route exact path="/admin/allorders"><AllOrders/></Route>
                </Switch>
                
            </Col>

        </Row>
        </Router>
        </Container>
    )
}

export default AdminScreen
