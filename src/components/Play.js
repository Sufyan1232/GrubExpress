import React, { useState } from 'react';
import styled from 'styled-components'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import cycle from "../images/cycle.gif"
import CloseIcon from '@mui/icons-material/Close';
import './All.css'
import {mobile} from "../responsive"
import PlayArrowIcon from '@mui/icons-material/PlayArrow';


const Plays = styled.button`
width: 70px;
height: 70px;
background-color: white;
border-radius: 50%;
border: none;

`;

const Img1 = styled.img`
width: 600px;
${mobile({ width: "100px"})}
`;


function Play() {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


  return (
    <>
            <Plays onClick={handleShow}>
            <PlayArrowIcon style={{ color: '#de5e1a',  height: 70, width: 70, cursor: 'pointer' }} />
            </Plays>

      <Modal show={show} onHide={handleClose} >
        
        <div>
        <Img1 src={cycle}  />
        </div>
        
      </Modal>
    </>
  )
}

export default Play;



{/* <button onClick={handleClose} className='cycle'><CloseIcon /></button> */}
