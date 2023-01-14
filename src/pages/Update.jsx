import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { auth } from '../firebase.config'

import AddListing from '../components/AddListing'
import AddTestimonial from '../components/AddTestimonial'
import UpdateListing from '../components/UpdateListing'

const Update = () => {
  const navigate = useNavigate()

  useEffect(() => {
    auth.onAuthStateChanged(user => {
      if (!user) {
        navigate('/')
      }
    })
  })

  return (
    <div>
      <div>
        <div style={{ height: '80px', color: '#fff' }}></div>
        <div
          style={{
            overflow: 'auto',
            backgroundColor: '#e6e6e6',
            height: '100vh'
          }}
        >
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-evenly',
              flexWrap: 'wrap',
              paddingBottom: '150px'
            }}
          >
            <div style={{ flex: '50%' }}>
              <AddListing />
            </div>
            <div style={{ flex: '50%' }}>
              <AddTestimonial />
            </div>
            <div>
              <UpdateListing />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Update
