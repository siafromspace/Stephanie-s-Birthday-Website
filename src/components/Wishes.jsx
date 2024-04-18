import React from 'react'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default function Wishes() {
  const birthdayMessages = [
    "Wishing you a fantastic birthday filled with love and joy!",
    "May your special day be as wonderful as you are. Happy birthday!",
    "Sending you smiles for every moment of your special day. Happy birthday!",
    // Add more birthday messages as needed
  ];
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    <Slider {...settings}>
      {birthdayMessages.map((message, index) => (
        <div className='wishes' key={index}>
          <p>{message}</p>
        </div>
      ))}
    </Slider>
  )
}
