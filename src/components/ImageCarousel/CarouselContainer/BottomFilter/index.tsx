import '../../styles.css'

type iProps = {
  activeBlock: number
  len: number
}

const BottomFilter = ({ activeBlock, len }: iProps) => {
  return (
    <div id="filterComponent">
      {Array.from({ length: len }, (_, index) => (
        <div
          className={
            index == activeBlock ? 'filledCircleStyle' : 'emptyCircleStyle'
          }
        ></div>
      ))}
    </div>
  )
}

export default BottomFilter
