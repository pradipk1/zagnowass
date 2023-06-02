import React from 'react'
import './Payment.css'
import { useNavigate } from 'react-router-dom';

function Payment() {
    const navigate=useNavigate();
    function handleSubmit(){
        event.preventDefault();
        let cardNumber=document.getElementById('card-number').value;
        let name=document.getElementById('name').value;
        let date=document.getElementById('date').value;
        let securityCode=document.getElementById('security').value;
        if(cardNumber=='' || cardNumber.length<16){
            alert('Please enter valid card number')
        }
        else if(name==''){
            alert("Please enter the name");
        }
        else if(date==''){
            alert('Please enter expiry date');
        }
        else if(securityCode=='' || securityCode.length<3){
            alert('Please enter valid security code');
        }
        else{
            navigate('/processing');
        }
    }
  return (
    <div className='payment-page-container'>
        <form className='payment-form' onSubmit={handleSubmit}>
            <div className='form-inp-div'>
                <label className='label'>Card Number</label>
                <input id='card-number' type='number' className='form-inp-tag type-number' placeholder='Enter Card Number'></input>
            </div>
            <div className='form-inp-div'>
                <label className='label'>Name on Card</label>
                <input id='name' type='text' className='form-inp-tag' placeholder='Enter Name'></input>
            </div>
            <div className='flex-form-inp-container'>
                <div className='form-inp-div'>
                    <label className='label'>Expiration Date</label>
                    <input id='date' type='text' className='form-inp-tag' placeholder='MM/YY' style={{width:'100%'}}></input>
                </div>
                <div className='form-inp-div'>
                    <label className='label'>Security code</label>
                    <input id='security' type='number' className='form-inp-tag type-number' placeholder='Enter Security Code' style={{width:'100%'}}></input>
                </div>
            </div>
            <button type='submit' className='pay-now-btn'>Pay now</button>
        </form>
    </div>
  )
}

export default Payment