import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from "./images/xpress1.png"
import "./Styles/main.css"
import styled from 'styled-components';

import Aboutus from "./pages/Aboutus";
import Courier from "./pages/Courier";
import Logistic from "./pages/Logistic";
import Cod from './pages/Cod';
import Contact from "./pages/Contact";
import Carrers from "./pages/Carrers";
import { Link } from "react-router-dom"
import GrubHome from './pages/GrubHome';
import Faq from './components/Faq';


const Wrap = styled.div`


`;

const Meauto = styled.nav`


`;




function Header() {
  return (
 


    <Wrap>
      <Navbar expand="lg" className='neww'>
      <Container>
        <Navbar.Brand href="/" className='brand'><img src={logo} width="130px" className='logoimg' /></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
        <Meauto>
          <Nav className="me-auto">
         
            <Link to="/aboutus" className='menucolor'>AboutUs</Link>
            <Link to="/courier" className='menucolor'>Courier</Link>
            <Link to="/logistic" className='menucolor'>Logistics</Link>
            <Link to="/cod" className='menucolor'>COD</Link>
            <Link to="/contact" className='menucolor'>ContactUs</Link>
          
         
          </Nav>
          <button className='rates'>Rate Checker</button>
          </Meauto>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </Wrap>



   
  

 
  )
}

export default Header;
