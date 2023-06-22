import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight, FaCircle } from "react-icons/fa";
import './Image-slider.module.scss'
/* import "./imageSlider.css";
 */
const ImageSlider = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const leftArrowClick = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };
  const rightArrowClick = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };
  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  }


/*   style={{backgroundImage: `url(${slides[currentIndex].url})`}} */
  console.log(slides[currentIndex].url)
return (
    <div className="containerSliderStyles">
      <div className="slidesWithArrows">
        <FaChevronLeft className="arrow" onClick={leftArrowClick} />
        <div className="slideStyles">
            <img src={slides[currentIndex].url} alt="" />
        </div>
        <FaChevronRight className="arrow" onClick={rightArrowClick} />
      </div>
      <div className="dotsContainer">
        {slides.map((slide, slideIndex) => (
          <div
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
            className={`${slideIndex === currentIndex ? 'active' : ''} dot`}
          >
            <FaCircle />
          </div>
          ))}
      </div>
    </div>
  );
};

export default ImageSlider;