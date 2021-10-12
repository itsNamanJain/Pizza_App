import React from 'react'
import {Navbar,Nav,Container} from 'react-bootstrap'
import {LinkContainer} from 'react-router-bootstrap'
import {GiFullPizza} from 'react-icons/gi'
const Topbar = () => {
    return (
        <>
        <Navbar bg="dark" variant="dark" expand="lg">
  <Container fluid>
   <h4 className="text-light">Pizza &nbsp; <GiFullPizza className="text-warning"/>  </h4>
   <Nav className="ms-auto">
     <LinkContainer to="/" >
       <Nav.Link>
         Home
       </Nav.Link>
     </LinkContainer>
     <LinkContainer to="/about" >
       <Nav.Link>
         About Us
       </Nav.Link>
     </LinkContainer>
     <LinkContainer to="/contact" >
       <Nav.Link>
         Contact Us
       </Nav.Link>
     </LinkContainer>
     <LinkContainer to="/terms" >
       <Nav.Link>
         Terms and Poilcy
       </Nav.Link>
     </LinkContainer>
   </Nav>
  </Container>
</Navbar>
        </>
    )
}

export default Topbar
