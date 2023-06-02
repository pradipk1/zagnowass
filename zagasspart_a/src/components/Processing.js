import React from 'react'
import image2 from '../images/image2.png';
import { useNavigate } from 'react-router-dom';

function Processing() {
    const navigate=useNavigate();
    setTimeout(()=>{
        navigate('/success');
    },2000);
  return (
    <div style={{width:'375px',margin:'20px auto'}}>
        <img src={image2} style={{width:'100%'}}></img>
    </div>
  )
}

export default Processing;