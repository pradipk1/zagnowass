import React from 'react'
import './Home.css'
import { useNavigate } from 'react-router-dom'


function Home() {
    const navigate = useNavigate();
    function handleClick1(){
        console.log("Clicked!")
        let productDetails = {
            title:'The Marc Jacobs',
            genre:'Traveler Tote',
            price:195,
            image:'https://s3-alpha-sig.figma.com/img/6190/2463/b8de088543fd8a35f9dadf55ca6a52d9?Expires=1686528000&Signature=F7oGHwSLrPbmZfrrOMFMTTwXzONCLYPZ~TM8bHdTToCACctM-OmZZxy3pWAzKb4kC-reJyHPW9xcNghJcIrB3c~r1I-izP4amqys1-U2Zf5aDIudD3QiUpHnI5D-HBjygqz6uqqeafJjdLYqeoIcKrMR~enu20lma6D6A1wmnPL22cfo~81vHpeH2IP7BF4lxvFTqTABCuhFc2AhR4SaBAEo48DBYMNdUODu~Zac0Um2oVV9HhZ8j3D~bsXaD7njXNQ7myOvGQFjY7k0ec5565VjR4PyYX8AfsduTB0mUFMyrYJsS2W79Kwla4okQZxLeVz7uqmvmgAyhuYNVFyWcA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',

        }
        localStorage.setItem("prod",JSON.stringify(productDetails));
        navigate('/product');
    }
    function handleClick2(){
        console.log("Clicked!")
        let productDetails = {
            title:'Axel Arigato',
            genre:'Clean 90 Triple Sneakers',
            price:245,
            image:'https://s3-alpha-sig.figma.com/img/6c03/f685/2a9d6e19a5c70a1083cfd12e96fa5464?Expires=1686528000&Signature=IuqA7mGGf9rVZp5v8eWJyYOg--kvz8tC6FDQJcZ7RUmD4172nGkdLXuVTNgjavHxskaX02NXdyyzwRo2sbFt8uiFce6q5gXlf-hQNV0nWqKWcAYR46~YFGkaZjd-KR0SiHrnv0cNpRvwDKBqmMa2YVpQ4rDDiY1QQr11RhuQjo9X8XQOrktXjZrclR8RH3kMUCoMlM9gUNcg5kk9o055DYmzbSl0HogpkVbxdcixiOIZwblGRWyIVI8CqlPn2dUATJXZB7XD49Y3kWArZwgNVLz2c-TeYkuM6dB67F-8gJNz663qE07C6PU4GZR~1Q0fu9auBcPq06Wf28MOPObzMg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',

        }
        localStorage.setItem("prod",JSON.stringify(productDetails));
        navigate('/product');
    }
  return (
    <div className='home-container'>
        
        <div className='menubar-div'></div>
        <div className='avatar-div'></div>
        <div className='home-title-div'>
            <p style={{color:'#000000'}}>Welcome,</p>
            <p style={{color:'#666666'}}>Our Fashion App</p>
        </div>
        <div className='home-search-div'></div>
        <div className='home-offer-container'></div>
        <div className='new-arrivals-container'>
            <div className='new-arrivals-title-div'>
                <p>New Arrivals</p>
                <p>View All</p>
            </div>
            <div className='home-prod01-container' onClick={handleClick1}></div>
            <div className='home-prod02-container' onClick={handleClick2}></div>
        </div>
        <div className='home-navigation-bar-container'>
            <div className='home-nav-home-div'></div>
        </div>
    </div>
  )
}

export default Home