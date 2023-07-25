import React from 'react'
import styled from "styled-components";
import "./All.css"
import loading from "../images/square.gif"
import sky from "../images/Just.jpg"
import logo from "../images/cap.PNG"
import { mobile } from '../responsive';


// ${mobile({ padding: "0px", flexDirection:"column" })}

const Container = styled.div`
    width: 100%;
    background-image: linear-gradient(to right , rgb(255, 140, 0),rgb(229, 136, 102), rgb(242, 205, 160) );

    display flex;
    flex-direction: 1 column;
    ${mobile({ width: "380px" })}
    
`;
const LeftDiv = styled.div`
    width:50%;
    padding: 100px;
    ${mobile({ padding: "100px 50px" })}
    
`;

const RightDiv = styled.div`
width:50%;
margin-top: -70px;

${mobile({  display: "none" })}
`;

const ImgDiv = styled.div`
margin-top: -650px;
margin-left: 50px;
${mobile({  display: "none" })}
`;


const Desc = styled.div`
    font-size: 50px;
    color: white;
    line-height: 120%;
    margin-bottom: 30px
    

`;
const Desc1 = styled.div`
    font-size: 50px;
    color: white;
    font-weight: bold;
    line-height: 90%;
    margin-bottom: 30px;

`;
const Desc2 = styled.div`
    font-size: 12px;
    color: white;
    margin-bottom: 30px;
    text-align: justify;
    margin-left: -20px;
    padding-left: 20px;
    border-left: 1px solid white;
    ${mobile({  display: "none" })}
`;


const Span = styled.span`

background-color: black;
padding: 2px 20px;
font-weight: bold;
border-radius: 50%;
margin-left: -20px;

`;


const Input = styled.input `
width: 200px;
padding-left: 20px;
height: 50px;
border-radius: 10px;
border: none;
${mobile({  width: "200px" , padding: "5px 20px" })}

`;

const Button1 = styled.button`
padding: 10px 20px;
height: 50px;
cursor: pointer;
background-color: black;
color: white;
border-radius: 10px;
border: none;
margin-bottom: 30px;
${mobile({  width: "70px" , padding: "5px 10px" , margin: "10px 60px" })}
`;
const ImgDiv1 = styled.img`
${mobile({  display: "none" })}

`;



function Home() {
  return (
    <Container  >
        <LeftDiv className='container1'>
            <Desc>
            <Span>B</Span>
            uilding Stronger Connections With
            </Desc>
            <Desc1>Innovative Global Solutions</Desc1>
            <Desc2>They can be booked and paid for online. Senders have the option to have their parcels collected by a courier or drop their parcel off at a nearby location to be picked up later by the courier.</Desc2>
            <Input  placeholder='Tracking Number' />
            <Button1>submit</Button1>
            <br />
      
            
        </LeftDiv>
        <RightDiv>
            
            <ImgDiv1 src={loading} width="650px" />
            
            <ImgDiv><img src={sky} width="550px" className='imgsc' /></ImgDiv>
        </RightDiv>
    </Container>
  )
}

export default Home



// const Bottom = styled.div`
// font-size: 50px;
// color: aliceblue;
// font-weight: bold;
// margin-left: 80px;
// `;
// const Text = styled.div`
// font-size: 35px;
// color: black;
// margin-top: -65px;
// margin-left: 220px;
// `;
// background-color: #d8672a;