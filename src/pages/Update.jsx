import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { auth } from '../firebase.config'

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
          <div>Template starts here</div>
        </div>
      </div>
    </div>
  )
}
export default Update
