import React, { useEffect, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import styles from "./Image-slider.module.scss";
import { getImages } from "../../request/images";
import { ContainerSlider } from "./ContainerSlider";
import { Button } from "./Button";
import { ButtonDot } from "./ButtonDot";
import {shuffle} from 'lodash'
/* import "./imageSlider.css";
 */

const ImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [images, setImages] = useState([]);

  const lenghtOfSlider =[];
  const getNumbers = () => {
    for(let i=0; i<10;i++)
    lenghtOfSlider.push(i)
  };
  getNumbers();

  useEffect(() => {
    getImages()
      /* .then(shuffle(setImages)) */
      .then((images) => {
        const shuffledImages = shuffle(images);
        setImages(shuffledImages);
      })
      .catch((error) => console.log(error));
  }, []);
  console.log(images)
 
/*   const shuffleImages= shuffle(images)
  console.log('shuffle array', shuffleImages); */

  const leftArrowClick = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? lenghtOfSlider.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };
  const rightArrowClick = () => {
    const isLastSlide = currentIndex === lenghtOfSlider.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };
  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <ContainerSlider>
      <div className={styles.slidesWithArrows}>
      <Button onClick={leftArrowClick} icon = {<FaChevronLeft />} /> 
        <div className={styles.slideStyles}>
        {images[currentIndex] ? <img src={images[currentIndex].images[0]} /> : null}
        {images[currentIndex] && <p className={styles.namePokemon}>{images[currentIndex].name}</p>}
        </div>
        <Button onClick={rightArrowClick} icon = {<FaChevronRight />} /> 
      </div>
      <div className={styles.dotsContainer}>
        {lenghtOfSlider.map((slide, slideIndex) => (

          <ButtonDot
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
            isActive={slideIndex === currentIndex}
          />
        ))}
      </div>
    </ContainerSlider>
  );
};

export default ImageSlider;
