import styled from 'styled-components'
import React from 'react'
import sign from "../images/sign1.PNG";
import Play from './Play';
import {mobile} from "../responsive"




const Container = styled.div `
width: 100%;
padding: 50px 150px;
background-color: black;
display: flex;
flex-direction: 1 coloumn;
border-bottom: 5px dashed #d8672a;
${mobile({  padding: "50px 25px" , display: "grid"})}

`;

const Left = styled.div`
width: 60%;
padding-top: 100px;
padding-left: 100px;
${mobile({  padding: "50px 0px"  })}
`;

const Right = styled.div`
width:30%;
padding-top: 100px;
${mobile({  display: "show" , padding: "0px" })}
`;


const Desc1 = styled.div`
color:  #d8672a;
font-size: 17px;
padding-bottom: 25px;
${mobile({  width:"300px" })}
`;

const Desc2 = styled.div`
color:  #d8672a;
font-size: 50px;
color: rgb(236, 236, 236);
font-weight: lighter;
${mobile({  width:"340px"})}
`;

const Desc3 = styled.div`
color:  white;
font-size: 50px;
font-weight: bold;
padding-bottom: 30px;
line-height: 100%;
${mobile({  width:"340px"})}
`;


const Desc4 = styled.div`
color:  white;
font-size: 20px;
font-family: 'Courier New', Courier, monospace;
font-weight: normal;
padding-bottom: 30px;
font-style: italic;
${mobile({  width:"340px"})}
`;

const Desc5 = styled.div`
color:  white;
font-size: 17px;
font-weight: normal;
padding-bottom: 80px;
${mobile({  width:"340px"})}

`;

const Button = styled.button`
cursor: pointer;
color: white;
background-color: #de5e1a;
font-size: 17px;
padding: 20px 20px;
border: none;

`;

const Img1 = styled.img`
width: 550px;
${mobile({  width:"340px"})}
`;





function New() {
  return (
    <Container>
        <Left>
            <Desc1>AFFORDABLE PRICE, CERTIFIED FORWARDERS</Desc1>
            <Desc2>Safe, Reliable &</Desc2>
            <Desc3>Express Courier Solutions.</Desc3>
            <Desc4>That Save Your Time!</Desc4>
            <Desc5>We pride ourselves on providing the best transport and shipping services globally through an integrated network of 750+ courier centers in Pakistan handling more than 2 Million shipments annually. Our services combine the merits of skilled personnel, innovative technological solutions, and decades of experience in integrated supply chain management to ensure that you receive the best experience possible.</Desc5>
            <Button>Open an Account</Button>
        </Left>
        <Right>
            <Img1 src={sign}  />
            <Play />
        </Right>
    </Container>
  )
}

export default New
