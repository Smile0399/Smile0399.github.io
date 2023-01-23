import { useState } from 'react'
import { collection, addDoc } from 'firebase/firestore'
import { db } from '../firebase.config'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

const AddTestimonial = () => {
  const [formData, setFormData] = useState({
    name: '',
    testimonial: ''
  })

  const { name, testimonial } = formData

  const navigate = useNavigate()

  const onChange = e => {
    setFormData(prevState => ({
      ...prevState,
      [e.target.name]: e.target.value
    }))
  }

  const onSubmit = e => {
    e.preventDefault()

    if (!name || !testimonial) {
      return alert('Missing information')
    }

    // Create full testimonial object
    const fullTestimonial = { name, testimonial }

    // Add testimonial to firestore
    const addTestimonial = async fullTestimonial => {
      try {
        console.log(fullTestimonial)
        await addDoc(collection(db, 'Testimonials'), fullTestimonial)

        toast.success('Upload Successful')
        navigate('/Testimonials')
      } catch (e) {
        toast.error('Failed to add Testimonial')
        console.error('Error adding document ', e)
      }
    }

    addTestimonial(fullTestimonial)
  }

  return (
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
          borderRadius: '15px',
          overflow: 'hidden',
          height: '550px'
        }}
      >
        <div style={{ paddingBottom: '15px' }}>Add Testimonial</div>
        <form onSubmit={e => onSubmit(e)} autoComplete='off'>
          <input
            type='text'
            className='update-input'
            placeholder='name'
            id='name'
            name='name'
            value={name}
            onChange={onChange}
          />
          <textarea
            rows='20'
            cols='5'
            type='text'
            className='update-input'
            placeholder='testimonial'
            id='testimonial'
            name='testimonial'
            value={testimonial}
            onChange={onChange}
          ></textarea>
          <input
            type='submit'
            className='form-submit'
            value='Add Testimonial'
          />
        </form>
      </div>
    </div>
  )
}
export default AddTestimonial
