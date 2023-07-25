import React from 'react'
import styled from "styled-components";
import CallIcon from '@mui/icons-material/Call';
import SearchIcon from '@mui/icons-material/Search';
import { mobile } from '../responsive';
import {Link } from "react-router-dom";
import "./All.css";

const Container = styled.div`
background-image: linear-gradient(to right , rgb(255, 140, 0), rgb(229, 136, 102) );
    height: 60px;
    padding: 10px;
    padding-right: 0px;
   
    border-bottom: 0px solid #eee  ;
    display: flex;
    ${mobile({ display: "none",})}
  `;


  const WrapIcon = styled.div`
  color: white;
  margin-left: 100px;
  justify-content: space between;
  width: 200px;
  margin-right: 200px;
  ${mobile({  margin: "10px", display:"flex" , margin:"10px 20px" })}
`;


  const Wrap = styled.div`
    color: white;
    justify-content: space-between;
 
  `;
  const Track = styled.input`
  background-color: #eee;
  width: 200px;
  border: none;

    padding-left: 30px;
    ${mobile({  padding:"10px"  })}
`;


const TrackBtn = styled.button`
text-align: center;
padding: 15px;
height: 44px;
padding-top: 5px;
background-color: black;
border: none
cursor: pointer;
margin-right: 50px;
margin-top: -2px;
`;
// const Link = styled.a`
// text-decoration: none;
// color: white;
// padding-right: 20px;
// padding-top: 5px;
//  ${mobile({ padding: "10px", right: "0px" , width: "380px"})}

 



const Top = () => {
  return (
    <Container>
        <WrapIcon>
        <SearchIcon style={{ color: 'white',  height: 30, width: 30, cursor: 'pointer' }} />
        <CallIcon style={{ color: 'white',  height: 27, width: 30, cursor: 'pointer' }} />
        </WrapIcon>
        <Track placeholder='Tracking Number' />
        <TrackBtn><img src='https://mulphilog.com/assets/images/mb-btn.png' width="30px" /></TrackBtn>
        <Wrap>
             <Link to="/carrers" className='linkcontact' >Business Solutions</Link>
            <Link to="/carrers" className='linkcontact' >Careers</Link>
            <Link to="/carrers" className='linkcontact' >Free Home Pickup</Link>
            <Link to="/cod" className='linkcontact' >COD Portal</Link>
        </Wrap>
    </Container>
  )
}

export default Top




