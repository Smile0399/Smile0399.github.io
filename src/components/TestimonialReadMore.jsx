import { useState } from 'react'

const TestimonialReadMore = ({ testimonialInfo }) => {
  const { testimonial, name } = testimonialInfo
  const testimonialSplit = testimonial.split(' ').splice(0, 88).join(' ')
  const testimonialSplit2 = testimonial.split(' ').slice(88).join(' ')
  // remove the space at the end of the last word
  const testimonialSplit3 = testimonialSplit2.substring(
    0,
    testimonialSplit2.length - 1
  )

  const [readMore, setReadMore] = useState({
    dotsDisplay: 'inline',
    buttonHTML: 'Read More',
    moreText: 'none'
  })

  const [open, setOpen] = useState(false)

  const handleOpen = () => {
    setOpen(!open)
  }

  const { dotsDisplay, buttonHTML, moreText } = readMore

  const readMoreChange = () => {
    if (dotsDisplay === 'inline') {
      handleOpen()
      setReadMore({
        dotsDisplay: 'none',
        buttonHTML: 'Read Less',
        moreText: 'inline'
      })
    } else {
      handleOpen()
      setReadMore({
        dotsDisplay: 'inline',
        buttonHTML: 'Read More',
        moreText: 'none'
      })
    }
  }

  return (
    <div className='testimonial-container'>
      "{testimonialSplit}
      <span style={{ display: dotsDisplay }}>...</span>
      <span style={{ display: moreText }}> {`${testimonialSplit3}"`}</span>
      <div className='testimonial-signature'>~ {name}</div>
      <div onClick={readMoreChange} className='testimonial-readmore-div'>
        {buttonHTML}&nbsp;&nbsp;
        <i className={`fa-solid fa-angle-down ${open ? 'rotate' : ''}`}></i>
      </div>
    </div>
  )
}
export default TestimonialReadMore
