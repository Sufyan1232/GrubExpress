import React, { useState } from 'react'
import styled from 'styled-components'
import delivery from "../images/del.webp"
import box from "../images/box.jpg"
import flyer from "../images/flyer1.png"
import night from "../images/night.jpg"
import icone from "../images/icone.png"
import icone2 from "../images/icone2.png"
import {mobile} from "../responsive";


import cards1 from "../images/cards1.PNG"
import cards2 from "../images/cards2.PNG"
import cards3 from "../images/cards3.PNG"
import cards4 from "../images/cards4.PNG"


import "./All.css";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';


const Container = styled.div`
background-color: black;
padding: 100px 150px;

padding-left: 0px;
display: flex;
flex-direction: 1 column;
width: 100%;
${mobile({ display: "grid" , padding: "10px 0px"})}
`;

const Service = styled.div`

transform: rotate(-90deg);
font-weight: bold;
font-size: 120px;
color: rgb(24, 23, 23);
width: 600px;
${mobile({ transform: "none"})}
`;

const Left = styled.div`
width: 50%;
color: white;
margin-left: -90px;
${mobile({ margin: "10px 20px"})}

`;

const Right = styled.div`
width: 50%;
color: white;
${mobile({ padding: "0px 40px", height: "400px"})}
`;

const Desc1 = styled.div`
color: orangered;
padding-bottom: 25px;
`;
const Desc2 = styled.div`
font-weight: lighter;
font-size: 45px;
`;
const Desc3 = styled.div`
font-weight: bold;
font-size: 45px;
margin-top: -20px;
padding-bottom: 40px;
`;
const Desc4 = styled.div`
width:300px;
font-size: 17px;
`;

const Card = styled.div`
background-color: white;
border-radius: 15px;
width: 400px;
height: 550px;
text-align: center;
padding-top: 10px;
margin-bottom: 20px;
`;
const P = styled.div`
color: black;
padding: 20px 30px;
`;
const Img1 = styled.img`
width: 400px;
${mobile({ width: "300px", padding: "0px 0px"})}

`;


function Slider() {


  const [selectedImage, setSelectedImage] = useState(0);
  const [allImages, setAllImages] = useState([cards1, cards2, cards3, cards4]);

  return (

   <Container>
    <Service>Service</Service>
    <Left>
        <Desc1>REAL SOLUTIONS, REAL FAST!</Desc1>
        <Desc2>We Deliver</Desc2>
        <Desc3>Trust.</Desc3>
        <Desc4>Our customized logistics solutions help you create a streamlined supply chain for your global requirements with ease and precision.</Desc4>
       
    </Left>


    <Right>
    <Img1  src={allImages[selectedImage]} />
    <br/>

    <div className='cardslider'>
    <button onClick={() => { 
                if(selectedImage > 0)
                setSelectedImage(selectedImage - 1)
            }}
            className='icone'>
                <img src={icone2} />
            </button>

            <button onClick={() => { 
                if(selectedImage < allImages.length - 1)
                setSelectedImage(selectedImage + 1)
            }}
            className='icone'>
                <img src={icone} />
            </button>
            </div>

    </Right>
   </Container>
  )
}

export default Slider




{/* <Card>
<img src={delivery} width="380px"  className='deli'/>
<h2 className='over'>Same Day Delivery</h2>
<P>
  Ensure time delivery within the same working day,
  Send packages and parcels across.
</P>
<button className='ArrowForwardIosIcon'><ArrowForwardIosIcon /> </button>
</Card>
<Card>
<img src={box} width="380px"  className='deli'/>
<h2 className='over'>My box</h2>
<P>
  Send packages and parcels across a wide range of weight and size categories.
</P>
<button className='ArrowForwardIosIcon'><ArrowForwardIosIcon /> </button>
</Card>
<Card>
<img src={flyer} width="380px"  height="250px" className='deli'/>
<h2 className='over'>My Flyer</h2>
<P>
  Safely send documents or small parcels across the globe through trustes channels.
</P>
<button className='ArrowForwardIosIcon'><ArrowForwardIosIcon /> </button>
</Card>
<Card>
<img src={night} width="380px"  height="250px" className='deli'/>
<h2 className='over'>Overnight Delivery</h2>
<P>
  Ensure express delivery of your packages and parcels overight 
  without having to worry about deadlines.
</P>
<button className='ArrowForwardIosIcon'><ArrowForwardIosIcon /> </button>
</Card> */}