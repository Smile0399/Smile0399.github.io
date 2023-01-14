import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { auth } from '../firebase.config'

import AddListing from '../components/AddListing'
import AddTestimonial from '../components/AddTestimonial'

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
            <AddListing />
            <AddTestimonial />
          </div>
        </div>
      </div>
    </div>
  )
}
export default Update
