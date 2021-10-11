import React,{useState} from 'react'
import {Card,Button,Row,Col,Modal} from 'react-bootstrap'
import {AiOutlineShoppingCart} from 'react-icons/ai'
import {BiRupee} from 'react-icons/bi'
import {useDispatch} from 'react-redux'
import { cartAction } from '../actions/cartAction'

const Pizza = ({pizza}) => {
    const [varient, setvarient] = useState("small");
    const [quantity, setquantity] = useState(1);
    const [show, setShow] = useState(false);
    const dispatch = useDispatch();

    const AddtoCartHandler = ()=>{
      dispatch(cartAction(pizza,quantity,varient));
    }

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
    return (
        <>
         <Card className="mt-5">
  <Card.Img variant="top" src={pizza.image} style={{height:"200px",cursor:"pointer"}} onClick={handleShow}/>
  <Card.Body>
    <Card.Title>{pizza.name}</Card.Title>
    <Card.Text>
      <Row>
          <Col md={6}>
              <h6>Varient</h6>
              <select  value={varient}  onChange={(e)=>setvarient(e.target.value)}>
                  {pizza.varients.map((varient)=>(
                      <option>{varient}</option>
                  ))}
              </select>
          </Col>
          <Col md={6}>
          <h6>Qunatity</h6>
          <select  value={quantity}  onChange={(e)=>setquantity(e.target.value)}>
                {[...Array(10).keys()].map((v,i)=>(
                    <option value={i+1} onChange={(e)=>setquantity(e.target.value)}>{i+1}</option>
                ))}
              </select>
          </Col>
      </Row>
    </Card.Text>
    <Card.Text>
    <Row>
          <Col md={6}>
              <h6 className="mt-2">Price: {pizza.prices[0][varient]*quantity} <BiRupee/> </h6>
          </Col>
          <Col md={6}>
              <Button onClick={AddtoCartHandler } className="bg-success text-white">Add to Cart <AiOutlineShoppingCart/> </Button>
          </Col>
      </Row>
    </Card.Text>
  </Card.Body>
</Card>   

<Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{pizza.name} </Modal.Title>
        </Modal.Header>
        <Modal.Body><div>
        <Card.Img variant="top" src={pizza.image} style={{height:"250px"}}/>
        </div>
        <div>{pizza.description}</div> </Modal.Body>
      </Modal>
        </>
    )
}

export default Pizza
