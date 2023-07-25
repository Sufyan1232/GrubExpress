import React, { useState } from 'react';
import styled from 'styled-components';
import {mobile} from "../responsive"


const Container = styled.div`
width: 100%;
text-align: center;
padding: 20px 170px;
${mobile({ padding: "0px 25px" })}
`;

const Div = styled.div`
padding: 100px;
${mobile({ padding: "50px 30px" , width: "340px" })}
`;


const Span = styled.span`
font-size: 50px;
font-weight: lighter;
color: grey;
padding-right: 20px;
`;

const Span1 = styled.span`
font-size: 50px;
font-weight: bold;
`;

const Section = styled.div`
width:80%;
padding: 0px 0px;
border-radius: 0px;
margin-bottom: 20px;
text-align: left;
`;

const Show = styled.button`
padding: 20px 30px;
border: none;
background-color: #eee;
border-top-left-radius: 10px;
border-top-right-radius: 10px;
font-size: 20px;
width: 1000px;
${mobile({ padding: "10px 20px" , width: "340px" })}
`;
const Hide = styled.div`
padding: 20px 30px;
border: none;
background-color: #eee;
border-bottom-right-radius: 10px;
border-bottom-left-radius: 10px;
background-color: orangered;
color: white;
font-size: 17px;
text-align: center;
width: 1000px;
${mobile({ padding: "10px 20px" , width: "340px" })}
`;

const Div1 = styled.div`

`;


function Faq() {

       
        const [show1, setShow1] = useState(false);
        const [show2, setShow2] = useState(false);
        const [show3, setShow3] = useState(false);
        const [show4, setShow4] = useState(false);
        const [show5, setShow5] = useState(false);
        const [show6, setShow6] = useState(false);
        const [show7, setShow7] = useState(false);
       


  return (
    <Container>
        <Div><Span>Frequently Asked</Span> <Span1>Question.</Span1></Div>
        <Section>
            <Div1>
            <Show type='button' onClick={() => setShow1(!show1)}>
                
                How can i track my shipments?
            </Show>
            {show1 && <Hide>Shipments can be tracked through the dedicated portal on the homepage by entering the tracking ID/Consignment Number.</Hide>}
            </Div1>

            
        </Section>


       

        <Section>
            <Div1>
            <Show type='button' onClick={() => setShow2(!show2)}>
                
                How can I get in touch with GrubExpress for any querries or customer support?
            </Show>
            {show2 && <Hide>You can get in touch with our representatives by directly calling our helpline at +92 304 0671313 or sending an email to grubexpresspakistan@gmail.com.</Hide>}
            </Div1>            
        </Section>

        <Section>
            <Div1>
            <Show type='button' onClick={() => setShow3(!show3)}>
                
                How can I get in touch with GrubExpress through social media?
            </Show>
            {show3 && <Hide>Shipments can be tracked through the dedicated portal on the homepage by entering the tracking ID/Consignment Number.</Hide>}
            </Div1>            
        </Section>

        <Section>
            <Div1>
            <Show type='button' onClick={() => setShow4(!show4)}>
                
                What are GrubExpress operating hours?
            </Show>
            {show4 && <Hide>GrubExpress operates Monday to Saturday from 9 A.M (morning) to 5:30 P.M (evening).</Hide>}
            </Div1>            
        </Section>

        <Section>
            <Div1>
            <Show type='button' onClick={() => setShow5(!show5)}>
                
                Does GrubExpress offer Same Day Service?
            </Show>
            {show5 && <Hide>Yes, GrubExpress offers same-day delivery in Karachi, Lahore, and Islamabad to locations within each respective city.</Hide>}
            </Div1>            
        </Section>

        <Section>
            <Div1>
            <Show type='button' onClick={() => setShow6(!show6)}>
                
                Does GrubExpress offer Holiday Service?
            </Show>
            {show6 && <Hide>Yes, GrubExpress offers a special holiday delivery service for Sundays/Weekend and Festive/Religious Holidays across Pakistan.</Hide>}
            </Div1>            
        </Section>

        <Section>
            <Div1>
            <Show type='button' onClick={() => setShow7(!show7)}>
                
                How do i find out GrubExpress rates?
            </Show>
            {show7 && <Hide>You can find GrubExpress rates for each service on the respective page or use the cost calculator to generate an estimate depending on the type of service required and the weight/size category.</Hide>}
            </Div1>            
        </Section>

       
    </Container>
  )
}

export default Faq
