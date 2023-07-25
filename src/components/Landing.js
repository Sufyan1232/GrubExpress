import React from 'react'
import "./All.css";
import styled from 'styled-components';
import icon1 from "../images/icon1.png";
import icon2 from "../images/icon2.png";
import icon4 from "../images/icon4.png";
import {mobile} from "../responsive";



const Heading = styled.h1`
font-weight: bold;
padding-top: 0px;
color: rgb(44, 44, 42);
${mobile({  margin: "20px", padding:"30px 0px", width: "300px" })}
`;


const Wrap = styled.div`
display: flex;
flex-direction: 1 column;
margin-left: 140px;
${mobile({  margin: "0px" , padding: "0px 70px" , align: "center" , display: "grid"  })}
padding: 20px 30px;


`
const Card1 = styled.div`
width: 200px;
height: 160px;
background-image: linear-gradient(to right , rgb(255, 140, 0), rgb(229, 136, 102) );
padding: 20px;
cursor: pointer;
margin: 10px;
${mobile({  margin: "0px" })}

`;

const Card2 = styled.div`
width: 200px;
height: 150px;
Background-color: black;
padding: 20px;
cursor: pointer;
margin: 10px;
margin-top: 15px
${mobile({  margin: "0px 0px" , height: "160px" , padding: " 0px" })}
`;


const Desc = styled.div`
font-size: 17px;
color: white;

`;

const Div1 = styled.div`
padding: 150px;
${mobile({  padding: "0", margin: "20px" , width : "250px" })}
background-color: rgba(255, 255, 255, 0.759);
`;


function Landing() {
  return (
    
    <div className='pakistan'>
     <Div1>
      <Heading>Where now meets next</Heading>
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
        </Div1>
    </div>
    
  )
}

export default Landing
