const ActiveGrid = ({ url }) => {
  const link =
    'https://images.pexels.com/photos/186077/pexels-photo-186077.jpeg?cs=srgb&dl=pexels-binyamin-mellish-186077.jpg&fm=jpg'

  const link2 =
    'https://media.matrix.nwmls.com/mediaserver/GetMedia.ashx?t=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJUYWJsZUlEIjoiMTUiLCJUeXBlIjoiMSIsIm5iZiI6MTY3MzQ4NjgwNCwiTnVtYmVyIjowLCJ1c3IiOiJBT1RGIiwiU2l6ZSI6IjUiLCJleHAiOjE2NzM0ODg2MDQsImlhdCI6MTY3MzQ4NjgwNCwiS2V5IjoiMTMyMDQwNzE1In0.lHHcIUbsRTT4b9GU_GHg5iH6nMd-f18DRH7lXUPzat0'

  const link3 =
    'https://media.matrix.nwmls.com/mediaserver/GetMedia.ashx?t=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJUYWJsZUlEIjoiMTUiLCJUeXBlIjoiMSIsIm5iZiI6MTY3MzQ4NjgwNSwiTnVtYmVyIjowLCJ1c3IiOiJBT1RGIiwiU2l6ZSI6IjUiLCJleHAiOjE2NzM0ODg2MDUsImlhdCI6MTY3MzQ4NjgwNSwiS2V5IjoiMTI3MDI1MzU2In0.rAfsNmEmJgZsWrBvf5bZwMjlwUwadUOWDqkRLpfEvp4'
  return (
    <div className='active-grid'>
      {/* Map Through Listings Links */}
      <a
        target='_blank'
        rel='noopener noreferrer'
        href='https://www.google.com'
      >
        <div className='active-div'>
          <img className='active-img' src={link} alt='House' />
          <div className='active-header'>
            <div className='active-amount'>$599,950</div>
          </div>
          <div className='active-footer'>
            <div className='active-address'>4425 Woodson Crest Court</div>
            <div className='active-zipcode'>Mukilteo, WA 98275</div>
          </div>
        </div>
      </a>
      <a
        target='_blank'
        rel='noopener noreferrer'
        href='https://www.google.com'
      >
        <div className='active-div'>
          <img className='active-img' src={link2} alt='House' />
          <div className='active-header'>
            <div className='active-amount'>$1,600,000</div>
          </div>
          <div className='active-footer'>
            <div className='active-address'>1120 2nd Street</div>
            <div className='active-zipcode'>Mukilteo, WA 98275</div>
          </div>
        </div>
      </a>
      <a
        target='_blank'
        rel='noopener noreferrer'
        href='https://www.google.com'
      >
        <div className='active-div'>
          <img className='active-img' src={link3} alt='House' />
          <div className='active-header'>
            <div className='active-amount'>$2,000,000</div>
          </div>
          <div className='active-footer'>
            <div className='active-address'>829 2nd Street</div>
            <div className='active-zipcode'>Mukilteo, WA 98275</div>
          </div>
        </div>
      </a>
    </div>
  )
}
export default ActiveGrid
