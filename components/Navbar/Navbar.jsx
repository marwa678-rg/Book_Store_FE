//Imports
import React from 'react'
import {Navbar as BNavbar, Container, Nav} from"react-bootstrap";
import { Link } from 'react-router-dom';
import { FaBookOpenReader } from "react-icons/fa6";

//Internal Imports

export const Navbar = () => {
  return (
   <BNavbar expand="md"  bg="dark" data-bs-theme="dark"  >
    <Container>
     
        
        <BNavbar.Brand as ={Link} className="d-flex   align-items-center gap-2">
           <FaBookOpenReader size={20} className="text-danger   align-items-center" />
             <span>Book-World</span> 
        </BNavbar.Brand>
        
      
       
        <BNavbar.Toggle />

        <BNavbar.Collapse  >
          <Nav className='ms-auto' >
                <Nav.Link as={Link} to='/'>HOME</Nav.Link>
                <Nav.Link as={Link} to='login'>Login</Nav.Link>
                <Nav.Link as={Link} to='/register'>Register</Nav.Link>


          </Nav>



        </BNavbar.Collapse>











    </Container>
  </BNavbar>
       
  )
}

