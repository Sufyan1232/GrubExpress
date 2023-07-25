import React from 'react';
import styled from "styled-components";
import "./Page.css";
import New from '../components/New';
import ge from "../images/ge.jpg"
import { mobile } from '../responsive';

const Container = styled.div`
    width: 100%;
    ${mobile({ width: "380px" })}
    
`;

const About = styled.div`
text-align: center;
padding: 200px;
background-image: url("../images/about1.avif");
background-repeat: no-repeat;
background-blend-mode: darken;
background-size: cover;
background-position: center center ;
background-color: rgba(0, 0, 0, 0.795);
    ${mobile({ padding: "100px", align: "center" })}
    
`;

const Img = styled.img`
    width: 900;
    ${mobile({ width: "380px", margin: "0px -50px" })}
    
`;


function Aboutus() {
  return (
    <Container>
    <div>
      <div className='aboutus'>
        <About>
        <span className='about1' >About</span ><span className='about2'>Us</span>
        </About>
    </div>
    <div className='aboutus3'>
      <Img src={ge} width=""className=' aboutus2' />
    </div>
    <New />
  </div>
  </Container>
  )
}

export default Aboutus
