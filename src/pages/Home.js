import ImageSlider from "../components/carousel2/ImageSlider"
import { images } from "../store/images"
import styles from './../components/carousel2/Image-slider.module.scss'

export const Home = () =>  {


  return (
    <div>
        <h2 className={styles.componentTitle}>Main Slider</h2>
        <div className={styles.containerImageSlider}>
            <ImageSlider slides={images} />
        </div>
    </div>
  )
}