import { images } from './mock'
import CarouselContainer from './CarouselContainer'

const ImageCarousel = () => {
  return (
    <div>
      <CarouselContainer images={images}></CarouselContainer>
    </div>
  )
}
export default ImageCarousel
