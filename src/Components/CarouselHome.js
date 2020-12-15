import React from "react";
import card1 from "../Components/images/card1.svg";
import card2 from "../Components/images/card2.svg";
//import card3 from "../Components/images/card3.svg";
import { Link } from "react-router-dom";
import { Carousel } from "react-bootstrap";
import axios from "axios";

export default function CarouselHome() {
  const sendEmail = e => {
    e.preventDefault();
    return alert("Your email was sent");
  };

  return (
    <div>
      <Carousel className='carousel'>
        <Carousel.Item interval={10000}>
          <img className='d-block w-100' src={card1} alt='card1' />
          <Carousel.Caption>
            <p>
              <Link to='/products'>
                <input
                  type='submit'
                  value='Shop Now'
                  className='input-carousel'
                />
              </Link>
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={5000}>
          <img className='d-block w-100' src={card2} alt='card2' />
          <Carousel.Caption>
            <p>
              <Link to='/products'>
                <input
                  type='submit'
                  value='Shop Holiday Gifts'
                  className='input-carousel'
                />
              </Link>
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        {/* <Carousel.Item interval={1000}>
          <img className='d-block w-100' src={card3} alt='card3' />
          <Carousel.Caption>
            <p>
              <Link to='/products'>
                <input
                  type='submit'
                  value='Shop Holiday Gifts'
                  className='input-carousel'
                />
              </Link>
            </p>
          </Carousel.Caption>
        </Carousel.Item> */}
      </Carousel>
      <div className='info-container'>
        <div className='notify-container'>
          <form className='contact-form' onSubmit={sendEmail}>
            <h4>SIGN UP TO OUR NEWSLETTER </h4>
            <p>
              to receive beauty trends & exclusives straight to your inbox
            </p>
            <input
              type='email'
              className='email'
              placeholder='Type your email'
            />
            <input type='submit' className='submit' value='Sign up' />
          </form>
        </div>
        <div className='service'>
          <ul>
            <h3>Services</h3>
            <li>
              <Link to='/' className='text-link'>
                Home
              </Link>
            </li>
            <li>
              <Link to='/contact' className='text-link'>
                Contact
              </Link>
            </li>
            <li>
              <Link to='/login' className='text-link'>
                My Account
              </Link>
            </li>
          </ul>
        </div>
        <div className='about'>
          <ul>
            <h3>About us</h3>
            <li>
              <Link to='/about' className='text-link'>
                About
              </Link>
            </li>
            <li>
              <Link to='/blog' className='text-link'>
                Blog
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
