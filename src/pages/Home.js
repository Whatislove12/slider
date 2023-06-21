import ImageSlider from "../components/carousel2/ImageSlider"
import { images } from "../store/images"

export const Home = () =>  {
    const generalSlideStyles = {
        width: '500px',
        height: '280px',
        margin: '0 auto',
    }

  return (
    <div>
        <h2>Main Slider</h2>
        <div style={generalSlideStyles}>
            <ImageSlider slides={images} />
        </div>
    </div>
  )
}