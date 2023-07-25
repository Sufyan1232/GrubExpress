import React from 'react'
import "./Page.css";
import styled from 'styled-components';
import c1 from "../images/c1.jpg"
import c2 from "../images/c2.jpg"
import c3 from "../images/c3.png"
import c4 from "../images/c4.png"
import { mobile } from '../responsive';



const Container = styled.div`
width: 100%;
${mobile({ width: "380px" })}
`;


const Courier1 = styled.div`
text-align: center;
padding: 200px;
background-image: url("../images/log3.jpg");
background-repeat: no-repeat;
background-blend-mode: darken;
background-size: cover;
background-position: center center ;
background-color: rgba(0, 0, 0, 0.795);
${mobile({ padding: "100px", align: "center" })}

`;


const Wrap = styled.div`
width: 100%;
text-align: center;
padding: 100px;
${mobile({ padding: "30px", align: "center" })}
`;

const Span = styled.span`
font-size: 50px;
font-weight: lighter;

`;

const Span1 = styled.span`
font-size: 50px;
font-weight: bolder;


`;

const Span2 = styled.div`
padding-top: 30px;
margin: 0px 100px;
color: grey;
font-size: 17px;
${mobile({ margin: "0px 20px", align: "center" })}

`;

const Wrap1 = styled.div`
width: 100%;
text-align: center;
margin-bottom: 50px;
`;

const Span3 = styled.span`
margin-right: 10px;


`;

const Img = styled.img`
border: 5px solid white;
-webkit-box-shadow: 0 0 10px grey;
        box-shadow: 0 0 10px grey;
border-radius: 10px;

`;


function Courier() {
  return (
    <Container>
    <div>
      <div className='courier4'>
        <Courier1>
      <h1 className='c2'> Grub Express </h1>
         <h1 className='c1'> Courier </h1>
         </Courier1>
     </div>
      <Wrap>
        <Span>On Time - </Span>
        <Span1>Every Time.</Span1>
        <div>
          <Span2>
          A curated selection of courier services that can be customized to perfectly match your requirements and ensure timely delivery to over 1600+ domestic and 200+ global locations.
          </Span2>
        </div>
      </Wrap>
      <Wrap1>
          <Span3><Img src={c1} width={350} /></Span3>
          <Span3><Img src={c2} width={350}/></Span3>
          <Span3><Img src={c3} width={350}/></Span3>
      </Wrap1>


      <Wrap1>
          <Span3><Img src={c4} width={350} /></Span3>
         
      </Wrap1>



    </div>
    </Container>
  )
}

export default Courier
