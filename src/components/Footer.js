import React from 'react'
import styled from "styled-components";
import logo from "../images/logo.png";
import "./All.css";
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import map from "../images/map1.PNG";
import { mobile } from '../responsive'


const Container = styled.div`

width: 100%;
background-color: black;


color: white;
`;


const Section1 = styled.div`
width: 265px;
padding: 30px 30px;
padding-bottom: 0px;
text-align: center; 
${mobile({ padding: "30px 80px" })}
`;

const Section2 = styled.div`
width: 265px;
padding: 50px 50px;
padding-bottom: 0px;
font-size: 14px;
text-align: left; 
${mobile({ padding: "30px 80px" })}
`;

const Section3 = styled.div`
width: 265px;
padding: 50px 50px;
padding-bottom: 0px;
font-size: 14px;
text-align: left; 
${mobile({ padding: "30px 80px" })}
`;

const Section4 = styled.div`
width: 265px;
padding: 50px 50px;
padding-bottom: 0px;
font-size: 14px;
text-align: left; 
${mobile({ padding: "30px 80px" })}
`;

const Section5 = styled.div`
width: 265px;
padding: 50px 50px;
padding-bottom: 0px;
text-align: left; 
font-size: 15px;
${mobile({ padding: "30px 80px" })}
`;


const Wrap = styled.div`

display: flex; 
flex-direction: 1 coloumn;
${mobile({ display: "grid" })}
`;
const FooterBottom = styled.div `
border-top: 1px solid grey;
margin: 30px 70px;
padding-top: 20px;
padding-bottom: 20px;
text-align:center;
margin-bottom: 0px;
margin-top: 
`;

const Div1 = styled.div`

${mobile({ width: "300px", padding: "30px 0px" })}
`;
const Map1 = styled.div`

margin-left: -50px;
`;

function Footer() {
  return (
    <Container>
        <Wrap>
        <Section1>
          <a href='/'>
            <img src={logo} width="180px" />
            </a>
            <Div1 className='fot'>
            <span className='media'><FacebookIcon style={{ color: 'white',  height: 30, width: 30, cursor: 'pointer' }} /> </span>
            <span className='media'><InstagramIcon style={{ color: 'white',  height: 30, width: 30, cursor: 'pointer' }} /> </span>
            <span className='media'><TwitterIcon style={{ color: 'white',  height: 30, width: 30, cursor: 'pointer' }} /> </span>
            <span className='media'><LinkedInIcon style={{ color: 'white',  height: 30, width: 30, cursor: 'pointer' }} /> </span>
            </Div1>
        </Section1>
        <Section2>
            <b> Discover Grub Express</b> <br/><br/>
           <div className='link1'> <a href='/' className='link'>Blog</a> </div>
          <div className='link1'>  <a href='/faq' className='link'>FAQs</a> </div>
           <div className='link1'> <a href='/' className='link'>Privacy POlicy</a></div>
        </Section2>
        <Section3>
        <b> Quick Links</b> <br/><br/>
        <div className='link1'> <a href='/aboutus' className='link'>About Us</a> </div>
          <div className='link1'>  <a href='/courier' className='link'>Courier</a> </div>
           <div className='link1'> <a href='/logistic' className='link'>Logistics</a></div>
           <div className='link1'> <a href='/cod' className='link'>COD</a></div>
        </Section3>
        <Section4>
        <b> Grub For You</b> <br/><br/>
        <div className='link1'> <a href='/' className='link'>Vendor Login</a> </div>
          <div className='link1'>  <a href='/contact' className='link'>Contact Us</a> </div>
          <button className='signup' type='submit'>
                Sign Up Now
                </button>
        </Section4>
        <Section5>

        <b> Contact us</b> <br/><br/>
        <div className='link1'> <a href='' className='link'>grubexpresspakistan@gmail.com</a> </div>
          <div className='link1'>  <a href='' className='link'> +92 304 0671313</a> </div>
               <Map1> <a href='https://maps.app.goo.gl/5yBxhXaANGeutDew9' target="_blank"> <img className='map' src={map} width="250px"  /> </a></Map1>
        </Section5>
        </Wrap>
        <FooterBottom>
        ©   Copyright 2022,  Grub Express Pvt. Ltd.
        </FooterBottom>
    </Container>
  )
}

export default Footer
