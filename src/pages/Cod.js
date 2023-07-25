import React from 'react'
import styled from 'styled-components'
import "./Page.css";
import man from "../images/man.jpg";
import { mobile } from '../responsive';


const Container = styled.div`
width: 100%;
${mobile({ width: "380px" })}
`;

const Cod1 = styled.div`
text-align: center;
padding: 200px;
background-image: url("../images/cash.avif");
background-repeat: no-repeat;
background-blend-mode: darken;
background-size: cover;
background-position: center center ;
background-color: rgba(0, 0, 0, 0.795);
${mobile({ padding: "100px", align: "center" })}
`;

const Wrap = styled.div`
width: 100%;
display: flex;
flex-direction: 1 column;
padding: 200px 200px;
${mobile({ padding: "30px 80px", align: "center" })}
`;


const Span4 = styled.div`
width: 50%;
${mobile({ display: "none" })}

`;
const Span5 = styled.div`
width: 50%;
${mobile({ width: "100%" })}
`;
const Img = styled.img`
margin-top: -150px;

`;

const P = styled.div`
margin-bottom: 50px;
color: grey;



`;

function Cod() {
  return (
    <Container>
    <div className='courier3'>
      <Cod1>
    <h1 className='c2'> Cash On </h1>
       <h1 className='c1'>Delivery. </h1>
       </Cod1>
   </div>


   <Wrap>

      <Span5>
        <P>
        Grub brings the most innovative courier and business solutions for its customers in Pakistan. Whether you’re a growing startup or small business, or a multinational conglomerate, Grub can help you extend your reach across the country.
        </P>

        <P>
        The Grub COD service lets customers send shipments and receive payments on delivery through a fast and easy process to over 1600+ locations. Not only that, but GrubExpress also offers a much more convenient registration process that is immediate and hassle-free!
        </P>

        <P>
        With no limitations on minimum shipment quantity and quick paybacks, Grub COD is the perfect choice for small businesses and corporate clients alike!
        </P>
      </Span5>
      <Span4>
        <Img src={man} />
      </Span4>

   </Wrap>


   </Container>
  )
}

export default Cod
