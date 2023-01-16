import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { auth } from '../firebase.config'
import { signInWithEmailAndPassword } from 'firebase/auth'

const Login = () => {
  const [formData, setFormData] = useState({
    email: 'AdminOnly@kw.com',
    password: ''
  })

  const { email, password } = formData

  const navigate = useNavigate()

  useEffect(() => {
    auth.onAuthStateChanged(user => {
      if (user) {
        navigate('/Update')
      }
    })
  })

  const onChange = e => {
    setFormData(prevState => ({
      ...prevState,
      [e.target.name]: e.target.value
    }))
  }

  const onLogin = e => {
    e.preventDefault()
    console.log(`${email}, ${password}`)

    signInWithEmailAndPassword(auth, email, password)
      .then(userCredential => {
        // Signed in
        const user = userCredential.user

        console.log(user)

        navigate('/Update')
        // ...
      })
      .catch(error => {
        const errorCode = error.code
        const errorMessage = error.message
        console.log(errorCode, errorMessage)
      })
  }

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
              justifyContent: 'center',
              paddingTop: '40px',
              paddingBottom: '20px',
              fontSize: '2rem'
            }}
          >
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                textAlign: 'center',
                backgroundColor: 'white',
                width: '300px',
                padding: '15px',
                borderRadius: '15px'
              }}
            >
              <div style={{ paddingBottom: '15px' }}>Login</div>
              <form onSubmit={e => onLogin(e)}>
                <input
                  type='text'
                  className='login-email'
                  placeholder='Email'
                  id='email'
                  name='email'
                  readOnly
                  defaultValue='AdminOnly@kw.com'
                />

                <input
                  type='password'
                  className='login-password'
                  placeholder='Password'
                  id='password'
                  name='password'
                  value={password}
                  onChange={onChange}
                />

                <input type='submit' className='form-submit' value='Login' />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Login
