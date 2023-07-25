import React from 'react'
import styled from 'styled-components'
import { mobile} from '../responsive'


const Container = styled.div`
background-color: #eee;
width: 100%;
padding: 100px;
text-align: center;
${mobile({  width:"100%", padding: "100px 0px", align: "center"})}
`;

const Heading1 = styled.span`
font-size: 50px;
font-weight: lighter;

`;

const Span = styled.span`
font-size: 50px;
font-weight: bold;

`;

const Wrap = styled.div`
background-color: white;
-webkit-box-shadow: 0 0 10px grey;
        box-shadow: 0 0 10px grey;
margin: 50px;
width: 90%;
border-radius: 20px;
display: flex;
flex-direction: 1 column;
padding: 50px 50px;
${mobile({ display: "grid" , padding: "20px 0px"  , margin: "20px"})}
`;


const Left = styled.div`
width: 50%;
text-align: justify;
padding: 50px;
font-weight: bold;
`;

const Right = styled.div`
width: 50%;
text-align: left;
padding: 50px;
font-weight: bold;
${mobile({ padding: "50px"})}
`;


const Input = styled.input`
margin-left: 20px;
height: 40px;
width: 200px;
padding: 10px 10px;
background-color: rgb(214, 229, 243);
border: none;
border-radius: 10px;
`;

const Button = styled.button`
background-color: #f46010;
padding: 20px 40px;
margin-top: 30px;
margin-left: -180px;
color: white;
border: none;
border-radius: 10px;
${mobile({ margin: "10px" ,width: "230px"})}
`;

const Div1 = styled.div`
${mobile({  width:"340px" , padding: "0px 20px"  })}
`;

function Qoute() {
    
  return (
        <Container>

           <Div1> <Heading1>Get A </Heading1><Span>Quote Now!</Span></Div1>
            <Wrap>
                <Left>
                    <div className='input'>
                        <span className='colon'>  Name  </span>  : 
                        <Input />
                      </div>
                      <div className='input'>
                        <span className='colon'>  NTN#  </span>  : 
                        <Input />
                      </div>
                      <div className='input'>
                        <span className='colon'>  Mobile  </span>  : 
                        <Input />
                      </div>
                      <div className='input'>
                        <span className='colon'>  CNIC#  </span>  : 
                        <Input />
                      </div>
                      <div className='input'>
                        <span className='colon'>  City# </span>  : 
                        <Input />
                      </div>
                      
                      
                </Left>
                <Right>
                <div className='input'>
                        <span className='colon'>  Company  </span>  : 
                        <Input />
                      </div>
                      <div className='input'>
                        <span className='colon'>  Business  </span>  : 
                        <Input />
                      </div>
                      <div className='input'>
                        <span className='colon'>  Address  </span>  : 
                        <Input />
                      </div>
                      <div className='input'>
                        <span className='colon'>  Email# </span>  : 
                        <Input />
                      </div>
                      <div className='input'>
                        <span className='colon'>  Account  </span>  : 
                        <Input />
                      </div>
                     
                      <Button>Get A Quote Now!</Button>
                
                </Right>
               

            </Wrap>
        </Container>
  )
}

export default Qoute
