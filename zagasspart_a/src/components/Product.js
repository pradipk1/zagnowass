import React,{useState} from 'react'
import './Product.css'
import { useNavigate } from 'react-router-dom';

function Product() {
  const navigate=useNavigate();
  let [quantity,setQuantity]=useState(1);
  let [active,setActive]=useState('m');
  const productDetails = JSON.parse(localStorage.getItem("prod"));

  function handleClick(){
    navigate('/payment');
  }
  
  let prodImage={
    position: 'absolute',
    width: '375px',
    height: '430px',
    left: '0px',
    top: '0px',
    background:`url(${productDetails.image})`,
    backgroundSize:'375px',
    backgroundRepeat:'no-repeat',
    backgroundPosition:'center'
  }
  return (
    <div className='Product-Details-page-container'>
      <div style={prodImage}></div>
      <div className='mobile-battery-container'></div>
      <div className='prod-menu-bar'></div>
      <div className='prod-details-container'>
      <div className='prod-details-bg'></div>
        <div className='prod-meta-container'>
          <div className='prod-title-div'>
            <p>{productDetails.title}</p>
            <p>{productDetails.genre}</p>
          </div>
          <div className='prod-review'></div>
          <div className='prod-quantity-div'>
            <button className='prod-decr-btn' 
            disabled={quantity==1}
            style={{fontSize:'20px'}}
            onClick={()=>{setQuantity(quantity-1)}}>-</button>
            <span>{quantity}</span>
            <button className='prod-incr-btn' onClick={()=>{setQuantity(quantity+1)}}>+</button>
          </div>
          <div className='prod-stok-div'>Available in stok</div>
        </div>
        <div className='prod-size-container'>
          <p>Size</p>
          <div className='prod-size-div'>
            <div 
            onClick={()=>setActive('s')}
            className={`size-s-div size-cursor-pointer ${active=='s'?'active-size':''}`}
            >
              <span>S</span>
            </div>
            <div 
            onClick={()=>setActive('m')}
            className={`size-m-div size-cursor-pointer ${active=='m'?'active-size':''}`}
            >
              <span>M</span>
            </div>
            <div 
            onClick={()=>setActive('l')}
            className={`size-l-div size-cursor-pointer ${active=='l'?'active-size':''}`}
            >
              <span>L</span>
            </div>
            <div 
            onClick={()=>setActive('xl')}
            className={`size-xl-div size-cursor-pointer ${active=='xl'?'active-size':''}`}
            >
              <span>XL</span>
            </div>
            <div 
            onClick={()=>setActive('xxl')}
            className={`size-xxl-div size-cursor-pointer ${active=='xxl'?'active-size':''}`}
            >
              <span>XXL</span>
            </div>
          </div>
        </div>
        <div className='prod-desc-div'>
          <p className='prod-desc-title'>Description</p>
          <p className='prod-desc'>
          Get a little lift from these Sam Edelman sandals featuring ruched straps and leather lace-up ties, while a braided jute sole makes a fresh statement for summer.
          </p>
        </div>
        <div className='prod-total-price-div'>
          <p className='prod-total-price-p'>Total price</p>
          <span className='prod-total-price-span'>${productDetails.price*quantity}</span>
        </div>
        <div className='prod-buy-btn' onClick={handleClick}></div>
      </div>
    </div>
  )
}

export default Product