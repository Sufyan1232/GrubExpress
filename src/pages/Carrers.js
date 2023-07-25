import React from 'react'
import styled from 'styled-components'
import "./Page.css"
import { mobile } from '../responsive';

const Container = styled.div`
width: 100%;
${mobile({ width: "380px" })}

`;
const Carrer1 = styled.div`
text-align: center;
    padding: 200px;
    background-image: url("../images/coming.avif");
    background-repeat: no-repeat;
    background-blend-mode: darken;
    background-size: cover;
    background-position: center center ;
    background-color: rgba(0, 0, 0, 0.795);
    ${mobile({ padding: "100px" })}
`;

function Carrers() {
  return (
  <Container>
        <div className='courier6'>
          <Carrer1>
          <h1 className='c2'> Coming </h1>
           <h1 className='c1'> soon </h1>
           </Carrer1>
     </div>
  </Container>
  )
}

export default Carrers
