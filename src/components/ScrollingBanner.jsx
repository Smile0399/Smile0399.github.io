const ScrollingBanner = () => {
  const images = [
    '1.jpg',
    '2.jpg',
    '3.jpg',
    '4.jpg',
    '5.jpg',
    '1.jpg',
    '2.jpg',
    '3.jpg',
    '4.jpg',
    '5.jpg'
  ]

  return (
    <div className='logo-slider'>
      <div className='logo-slider-div'>
        {images.map((image, index) => (
          <img
            className='logo-slider-img'
            key={index}
            src={image}
            alt='Banner'
          />
        ))}
      </div>
      <div className='logo-slider-div'>
        {images.map((image, index) => (
          <img
            className='logo-slider-img'
            key={index}
            src={image}
            alt='Banner'
          />
        ))}
      </div>
    </div>
  )
}

export default ScrollingBanner
