import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight, FaCircle } from "react-icons/fa";
import styles from './Image-slider.module.scss'
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


return (
    <div className={styles.containerSlider}>
      <div className={styles.slidesWithArrows}>
        <FaChevronLeft onClick={leftArrowClick} />
        <div className={styles.slideStyles}>
            <img src={slides[currentIndex].url} alt="" />
        </div>
        <FaChevronRight onClick={rightArrowClick} />
      </div>
      <div className={styles.dotsContainer}>
        {slides.map((slide, slideIndex) => (
          <div
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
            className={`${slideIndex === currentIndex ? styles.active : ''} ${styles.dot}`}
          >
            <FaCircle />
          </div>
          ))}
      </div>
    </div>
  );
};

export default ImageSlider;