import Button from '../../UI/Button'
import BottomFilter from './BottomFilter'
import '../styles.css'
import { useState } from 'react'

type FileData = {
  src: string
  alt: string
}

type iProp = {
  images: FileData[]
}

const CarouselContainer = ({ images }: iProp) => {
  const length = images.length
  const [activeImg, setActiveImg] = useState(0)
  function handleSwipe(event: React.FormEvent<HTMLButtonElement>) {
    const curr = event.currentTarget.id
    if (curr === 'left') {
      if (activeImg == 0) {
        setActiveImg(length - 1)
      } else {
        setActiveImg(activeImg - 1)
      }
    } else {
      if (activeImg == length - 1) {
        setActiveImg(0)
      } else {
        setActiveImg(activeImg + 1)
      }
    }
  }
  return (
    <div>
      <div id="sameDiv">
        <Button type="button" id="left" onClick={(e) => handleSwipe(e)}>
          &#8592;
        </Button>
        <div id="imageContainer">
          {images.map((elem, id) => (
            <div
              style={
                activeImg == id ? { display: 'block' } : { display: 'none' }
              }
              key={id}
            >
              <img src={elem.src} alt={elem.alt} />
            </div>
          ))}
        </div>
        <Button type="button" id="right" onClick={handleSwipe}>
          &#8594;
        </Button>
      </div>
      <BottomFilter />
    </div>
  )
}

export default CarouselContainer
