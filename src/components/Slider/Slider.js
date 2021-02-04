import React, { useState } from 'react';
import "./Slider.css";

const imagePaths = ["/images/slider1.png", "/images/slider2.png"]

function Slider() {

  const [index, setIndex] = useState(0);

  const nextSlide = () => {
    if(index < imagePaths.length) {
      setIndex(index + 1);
    }
  }

  const prevSlide = () => {
    if( index > 0) {
      setIndex(index -1)
    }
  }

  
  
  return (
    <div className="slider">
      <img src={ index == 0 ? imagePaths[0] : imagePaths[1]} alt="slider-image" className="slider__image" />
      <div className="slider__navigation">
      <button onClick={prevSlide} className="slider__btnLeft" disabled={index == 0}> - </button>
      <button onClick={nextSlide} className="slider__btnRight" disabled={index == imagePaths.length - 1}> + </button>
      </div>
    </div>
  )
}

export default Slider;
