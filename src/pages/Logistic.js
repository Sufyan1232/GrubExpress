import React from 'react'
import styled from 'styled-components'
import "./Page.css";
import { mobile } from '../responsive';


const Container = styled.div`
width: 100%;
${mobile({ width: "380px" })}
`;

const Logistic1 = styled.div`
text-align: center;
    padding: 200px;
    background-image: url("../images/log1.avif");
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
${mobile({ margin: "0px 30px", align: "center" })}
`;


function Logistic() {
  return (

    <Container>
    <div className='courier2'>
      <Logistic1>
    <h1 className='c2'> Grub Express </h1>
       <h1 className='c1'>Logistics. </h1>
       </Logistic1>
   </div>

   <Wrap>
        <Span>Wherever, whenever - </Span>
        <Span1>GrubExpress Logistics.</Span1>
        <div>
          <Span2>
          Logistics is there. Our third-party logistics services are a game-changer for any business. From carrying your raw materials or finished goods to one place from another, warehousing, tagging, packing and sorting and to delivering it to your end consumer in time and with absolute reliability, we have got it all managed.




          </Span2>
        </div>
      </Wrap>
   </Container>
  )
}

export default Logistic
