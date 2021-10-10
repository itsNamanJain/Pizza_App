import React from "react";
import { Navbar, Nav, Container,NavDropdown } from "react-bootstrap";
import { useDispatch,useSelector } from "react-redux";
import { BiLogIn } from "react-icons/bi";
import { LinkContainer } from "react-router-bootstrap";
import {AiOutlineShoppingCart,AiOutlineUser} from 'react-icons/ai';
import { logoutUser } from "../actions/userAction";
import {FaUserPlus} from 'react-icons/fa'
const NavTop = () => {
  const dispatch = useDispatch();
  const cartState = useSelector((state)=>state.cartReducer);
  const userState = useSelector((state)=>state.loginUserReducer)
  const {currentUser} = userState;
 
  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
        <Container>
          <Navbar.Brand href="/">Pizza Delivery </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto">
            {

              currentUser?(<>
                <LinkContainer to ="/" >
                <Nav.Link>
                <NavDropdown
          id="nav-dropdown-dark-example"
          title={currentUser.name}
          menuVariant="dark"
        >
          <NavDropdown.Item href="/order">My Orders</NavDropdown.Item>
          <NavDropdown.Item href="/logout" onClick={()=>{
            dispatch(logoutUser());
      
          }}>Logout</NavDropdown.Item>
        </NavDropdown>
                </Nav.Link>
              </LinkContainer>
              </>
              ):(
                <>
                <LinkContainer to="/login" activeClassName>
                <Nav.Link>
                  <BiLogIn /> Login
                </Nav.Link>
              </LinkContainer>
              <LinkContainer to="/register" activeClassName>
                <Nav.Link>
                  <FaUserPlus /> Register
                </Nav.Link>
              </LinkContainer>
              </>
              )
            }
              
              <LinkContainer to="/cart" activeClassName>
                <Nav.Link>
                <AiOutlineShoppingCart/> Cart {cartState.cartItems.length}
                </Nav.Link>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavTop;
