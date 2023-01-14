import { useState } from 'react'

const AddTestimonial = () => {
  const [formData, setFormData] = useState({
    name: '',
    testimonial: ''
  })

  const { name, testimonial } = formData

  const onChange = e => {
    setFormData(prevState => ({
      ...prevState,
      [e.target.name]: e.target.value
    }))
  }

  const onSubmit = e => {
    e.preventDefault()
    console.log(name, testimonial)
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
          overflow: 'hidden'
        }}
      >
        <div style={{ paddingBottom: '15px' }}>Add Testimonial</div>
        <form onSubmit={e => onSubmit(e)}>
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
