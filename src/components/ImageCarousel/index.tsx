import { images } from './images'
import CarouselContainer from './CarouselContainer'

const ImageCarousel = () => {
  return (
    <div>
      <CarouselContainer images={images}></CarouselContainer>
    </div>
  )
}
export default ImageCarousel
