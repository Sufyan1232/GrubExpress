import React from 'react'
import styled from "styled-components";
import "./All.css";
import courier from "../images/courier3.png";
import pakistan from "../images/pakistan.gif";
import icon1 from "../images/icon1.png";
import icon2 from "../images/icon2.png";
import icon4 from "../images/icon4.png";


const Container = styled.div`
text-align: center;
background-color: #eee;

`;


const Heading = styled.h1`
font-weight: bold;
padding-top: 100px;


`;


const Wrap = styled.div`
display: flex;
flex-direction: 1 column;
margin-left: 140px;
position: absolute;
top: 1110px;
padding: 20px 30px;

`
const Card1 = styled.div`
width: 200px;
height: 160px;
background-color: #d8672a;
padding: 20px;
cursor: pointer;
margin: 10px;
`;

const Card2 = styled.div`
width: 200px;
height: 150px;
background-color: rgb(46, 38, 94);
padding: 20px;
cursor: pointer;
margin: 10px;
margin-top: 15px
`;


const Desc = styled.div`
font-size: 17px;
color: white;

`;

function MeetNext() {
  return (
   <Container>
    <div className='courier'>
        <Heading>Where now meets next</Heading>
        <img src={pakistan} />
        <Wrap>
            <Card1>
                <img src={icon1} />
                <Desc>RATE & TRANSIT TIMES</Desc>
            </Card1>
            <Card2>
                <img src={icon4} width="60px" />
                <Desc>Ship</Desc>
            </Card2>
            <Card1>
                <img src={icon2} className='track'  />
                <Desc>Track</Desc>
            </Card1>
        </Wrap>
       
    </div>
   </Container>
  )
}

export default MeetNext
