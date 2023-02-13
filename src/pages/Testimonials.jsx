import { useEffect, useState } from 'react'
import { getDocs, collection } from 'firebase/firestore'
import { db } from '../firebase.config'
import TestimonialReadMore from '../components/TestimonialReadMore'
import ScrollingBanner from '../components/ScrollingBanner'

const Testimonials = () => {
  const [testimonialData, setTestimonialData] = useState([])

  useEffect(() => {
    fetchTestimonials()
  }, [])

  const fetchTestimonials = async () => {
    const querySnapshot = await getDocs(collection(db, 'Testimonials'))

    const testimonials = []

    querySnapshot.forEach(doc => {
      // doc.data() is never undefined for query doc snapshots
      const ref = doc.data()
      const id = doc.id

      // add id to object
      ref.id = id

      testimonials.push(ref)
    })

    setTestimonialData(prevState => testimonials)
  }

  return (
    <div>
      <div style={{ height: '80px', color: '#fff' }}></div>
      <div
        style={{
          overflow: 'auto',
          backgroundColor: '#e6e6e6',
          height: '100vh'
        }}
      >
        <ScrollingBanner />
        <div
          style={{
            display: 'flex',
            paddingTop: '40px',
            paddingBottom: '20px',
            justifyContent: 'center',
            fontSize: '2rem'
          }}
        >
          Testimonials
        </div>
        <div
          style={{
            paddingTop: '10px',
            display: 'flex',
            justifyContent: 'center'
          }}
        >
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              fontSize: '2rem',
              borderTop: 'solid',
              borderColor: '#c0c0c0',
              width: 'calc(100% - 80px)',
              maxWidth: '1700px',
              paddingTop: '35px',
              paddingBottom: '150px'
            }}
          >
            {!testimonialData ? (
              <div>Loading</div>
            ) : (
              testimonialData.map((testimonialInfo, idx) => {
                return (
                  <TestimonialReadMore
                    key={idx}
                    testimonialInfo={testimonialInfo}
                  />
                )
              })
            )}
          </div>
        </div>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            paddingBottom: '150px'
          }}
        >
          <div className='contact-container'>
            <div>
              <div style={{ width: '250px', height: '250px' }}>
                <img
                  style={{
                    borderRadius: '50%',
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover'
                  }}
                  src='Contact.jpg'
                  alt='KW LOGO'
                />
              </div>
              <div style={{ paddingTop: '15px', paddingBottom: '15px' }}>
                License #98047
              </div>
            </div>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                paddingLeft: '25px'
              }}
            >
              <div style={{ margin: '15px' }}>Pam Taylor</div>
              <div style={{ margin: '15px' }}>
                <i className='fa-solid fa-phone'></i>
                <span>&nbsp;&nbsp;Phone 1-425-530-1128</span>
              </div>
              <div style={{ margin: '15px', whiteSpace: 'nowrap' }}>
                <i className='fa-solid fa-envelope'></i>
                <span>&nbsp;&nbsp;Pamtaylor.kw@gmail.com</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Testimonials
