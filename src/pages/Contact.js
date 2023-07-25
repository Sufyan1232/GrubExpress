import React from 'react'
import styled from 'styled-components'
import "./Page.css"
import { GrMail } from 'react-icons/gr';
import { BsFillTelephoneFill } from 'react-icons/bs';
import { ImLocation2 } from 'react-icons/im';
import emailjs from "emailjs-com";
import logo from '../images/logo11.png';
import { mobile } from '../responsive';

const Container = styled.div`
width: 100%;
${mobile({ width: "380px" })}

`;


const Contact1 = styled.div`
width:100%;
display: flex;
flex-direction: 1 column;


`;

const Cl = styled.div`
width: 50%;
${mobile({ display: "none" })}


`;
const Cr = styled.div`
width: 50%;
text-align: center;
padding-top:200px;
background-color:rgb(210, 94, 49);
${mobile({ width: "100%", padding: "30px 0px" })};


`;

const Wrap = styled.div`
width: 100%;
padding: 100px 100px;
display: flex;
${mobile({ display: "grid" })}
`;
const Left = styled.div`
width: 50%;
padding: 50px 100px;
${mobile({ padding: "50px 10px", margin: "0px -80px" })}
`;
const Right = styled.div`
width: 50%;
${mobile({ width: "350px" })}
`;
const Ccright = styled.div`
width: 500px;
background-color: rgb(249, 250, 215);
padding: 50px 50px;
border: 1px solid rgb(249, 250, 215);
margin-top: 100px;
border-radius: 10px;
${mobile({  margin:"10px -130px " })}
`;



const Contact = () => {

  function sendEmail(e) {
    e.preventDefault();
    emailjs.sendForm('service_u6i476a','template_s2w8zbd',e.target,'WFQsL73ouwpS7OBu6')
    .then(res => {
      console.log(res);
    }).catch((err) => console.log(err));
  }


  return (
    <Container>

      <Contact1>
        <Cl>
          <div className='grlogo'><img src={logo} /></div>
        </Cl>
        <Cr>
        <h1 className='c4'> Contact </h1>
         <h1 className='c4'> Us. </h1>
        </Cr>
      </Contact1>

      {/* <div className='courier5'>
      <h1 className='c4'> Contact </h1>
         <h1 className='c3'> Us. </h1>
     </div> */}

      <Wrap>
        <Left>
            <div>
              <span className='get'>Get In</span>
              <span className='touch'>Touch.</span>
            </div>
            <div className='cc1'>Have any inquiry or some feedback for us?</div>
            <div className='cc2'>Fill out the details and our customer care representative will establish a contact with you.</div>
          
            <div className='cc3'>
               <div><GrMail size={40}/></div>
               <div className='cc4'>
                <h1>Email</h1>
                <p style={{color:"grey"}}>grubexpresspakistan@gmail.com</p>
                </div>
            </div>

            <div className='cc3'>
               <div><BsFillTelephoneFill size={40}/></div>
               <div className='cc4'>
                <h1>Phone</h1>
                <p className='phone1' style={{color:"grey"}}>+92 304 0671313</p>
                </div>
            </div>


            <div className='cc3'>
               <div><ImLocation2 size={40}/></div>
               <div className='cc4'>
                <h1>Head Office</h1>
                <p className='phone1' style={{color:"grey"}}>bIC, STC New campus, Jhang Rd، inside Government college university، near Children hospital, Faisalabad, Punjab</p>
                </div>
            </div>


        </Left>
        <Right>
      
              <Ccright>
                <form onSubmit={sendEmail}>
                  <input className='ccinput' name='name' type="text" placeholder="full name" /><br /><br />
                  <input className='ccinput' name='user_email' type="email" placeholder="email address" /><br /><br />
                  <input className='ccinput' name="subject" type="text" placeholder="subject" /><br /><br />
                  <textarea className='ccinput1' name='message' placeholder='message'></textarea><br /><br />

                  <button className='ccbtn'>Submit Now</button>

                </form>
                </Ccright>
          
        </Right>
      </Wrap>


    </Container>
  )
}

export default Contact
