import React,{useState} from "react"
import {AddNewPizza} from '../../actions/pizzaActions'
import { useDispatch,useSelector } from "react-redux"
import { Form,Button, Row,Col} from "react-bootstrap"
import Loader from '../Loader'
import Error from '../Error'
import Success from '../Success'
const AddPizza = () => {
  const [name, setname] = useState('');
  const [sPrice, setsPrice] = useState();  
  const [mPrice, setmPrice] = useState();  
  const [lPrice, setlPrice] = useState();  
  const [image, setimage] = useState();  
  const [category , setcategory] = useState('');  
  const [description, setdescription] = useState('');  
  const dispatch = useDispatch();
  const addpizzaState = useSelector(state => state.AddPizzaReducer);
  const {loading,error,success} = addpizzaState


  const SubmitForm = (event)=>{
    event.preventDefault();
const pizza ={
  name:name,image:image,description:description,category:category,prices:{
    small:sPrice,
    medium:mPrice,
    large:lPrice
  }
}
dispatch(AddNewPizza(pizza));
  }
    return (
        <>
        {loading && (<Loader/>)}
        {error && (<Error error="Something Went Wrong"/>)}
        {success && (<Success success="Pizza Added Successfully"/>)}
       <Form onSubmit={SubmitForm} className="bg-light p-4">
  <Form.Group className="mb-3" controlId="name">
    <Form.Label>Name</Form.Label>
    <Form.Control type="text" value={name} onChange={(e)=>setname(e.target.value)} placeholder="Enter Pizza Name" />
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
    <Form.Group className="mb-3" controlId="image">
    <Form.Label>Image</Form.Label>
    <Form.Control type="text" value={image} onChange={(e)=>setimage(e.target.value)} placeholder="Image Url" />
  </Form.Group>
    <Form.Group className="mb-3" controlId="category">
    <Form.Label>Category</Form.Label>
    <Form.Control type="text" value={category} onChange={(e)=>setcategory(e.target.value)} placeholder="Pizza Category " />
</Form.Group>
  <Form.Group className="mb-3" controlId="description">
    <Form.Label>Description</Form.Label>
    <Form.Control type="text" value={description} onChange={(e)=>setdescription(e.target.value)} placeholder="Enter description about Pizza" />
  </Form.Group>
  <Button varient="primary" type="submit">
    Submit
  </Button>
</Form>
        </>
    )
}

export default AddPizza
