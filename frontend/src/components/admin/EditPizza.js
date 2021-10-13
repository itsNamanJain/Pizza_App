import React,{useEffect,useState} from 'react'
import { useParams } from 'react-router-dom';
import { useDispatch,useSelector } from "react-redux"
import { Form,Button, Row,Col} from "react-bootstrap"
import Loader from '../Loader'
import Error from '../Error'
import Success from '../Success'
// import Success from '../Success'
import {getPizzaById, updatePizza} from '../../actions/pizzaActions'
const EditPizza = () => {
    
    const [name, setname] = useState('');
    const [sPrice, setsPrice] = useState();  
    const [mPrice, setmPrice] = useState();  
    const [lPrice, setlPrice] = useState();  
    const [image, setimage] = useState();  
    const [category , setcategory] = useState('');  
    const [description, setdescription] = useState('');  
    const {pizzaId } = useParams();
    const dispatch = useDispatch(); 
    const getPizzaByState = useSelector((state)=>state.getPizzaByIdReducer)
    const {loading,error,pizza} = getPizzaByState;
    const updatePizzaState = useSelector((state)=>state.updatePizzaByIdReducer)
    const {updateloading,updateerror,updatesuccess} = updatePizzaState;
    useEffect(() => {
      if(pizza) {
         if(pizza._id===pizzaId){
            setname(pizza.name);
            setcategory(pizza.category)
            setdescription(pizza.description)
            setimage(pizza.image)
            setsPrice(pizza.prices[0]['small'])
            setmPrice(pizza.prices[0]['medium'])
            setlPrice(pizza.prices[0]['large'])
        }
        else{
          dispatch(getPizzaById(pizzaId)) ;
        }}
        else{
           dispatch(getPizzaById(pizzaId));
        }
    }, [pizza,pizzaId,dispatch])

 const SubmitForm = (event)=>{
    event.preventDefault();
const updatedPizza ={
  _id:pizzaId,
  name:name,image:image,description:description,category:category,prices:{
    small:sPrice,
    medium:mPrice,
    large:lPrice
  }
}
dispatch(updatePizza(updatedPizza));
  }

    return (
        <>
            {loading && (<Loader/>)}
            {updateloading && (<Loader/>)}

        {error && (<Error error="Something Went Wrong"/>)}
        {updateerror && (<Error error="Something Went Wrong"/>)}
        {updatesuccess && (<Success success="Pizza Updated Successfully"/>)}
        
       <Form onSubmit={SubmitForm} className="bg-light p-4">
  <Form.Group className="mb-3" controlId="name">
    <Form.Label>Name</Form.Label>
    <Form.Control type="text" value={name} onChange={(e)=>setname(e.target.value)} placeholder="Enter Pizza Name" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="description">
    <Form.Label>Description</Form.Label>
    <Form.Control type="text" value={description} onChange={(e)=>setdescription(e.target.value)} placeholder="Enter description about Pizza" />
  </Form.Group>
  <Row>
  <Form.Group as={Col} className="mb-3" controlId="sprice">
    <Form.Label>Small Price</Form.Label>
    <Form.Control type="text" value={sPrice} onChange={(e)=>setsPrice(e.target.value)} placeholder=" Small Pizza Price" />
  </Form.Group>   <Form.Group as={Col} className="mb-3" controlId="mprice">
    <Form.Label>Medium Price</Form.Label>
    <Form.Control type="text" value={mPrice} onChange={(e)=>setmPrice(e.target.value)} placeholder=" Medium Pizza Price" />
  </Form.Group>   <Form.Group as={Col} className="mb-3" controlId="lprice">
    <Form.Label>Large Price</Form.Label>
    <Form.Control type="text" value={lPrice} onChange={(e)=>setlPrice(e.target.value)} placeholder=" Large Pizza Price" />
  </Form.Group>    
    </Row>
       <Form.Group className="mb-3" controlId="category">
    <Form.Label>Category</Form.Label>
    <Form.Control type="text" value={category} onChange={(e)=>setcategory(e.target.value)} placeholder="Pizza Category " />
</Form.Group>
   <Form.Group className="mb-3" controlId="image">
    <Form.Label>Image</Form.Label>
    <Form.Control type="text" value={image} onChange={(e)=>setimage(e.target.value)} placeholder="Image Url" />
  </Form.Group>
  <Button varient="primary" type="submit">
    Submit
  </Button>
</Form>
        </>
    )
}

export default EditPizza
