import { useState } from 'react'

const AddListing = () => {
  const [formData, setFormData] = useState({
    url: '',
    street: '',
    price: '',
    city: '',
    state: '',
    zipcode: ''
  })

  const { url, street, price, city, state, zipcode } = formData
  const onChange = e => {
    setFormData(prevState => ({
      ...prevState,
      [e.target.name]: e.target.value
    }))
  }

  const onSubmit = e => {
    e.preventDefault()
    console.log(url, price, street, city, state, zipcode)
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
          borderRadius: '15px'
        }}
      >
        <div style={{ paddingBottom: '15px' }}>Add Listing</div>
        <form onSubmit={e => onSubmit(e)}>
          <input
            type='text'
            className='update-input'
            placeholder='url'
            id='url'
            name='url'
            value={url}
            onChange={onChange}
          />
          <input
            type='text'
            className='update-input'
            placeholder='price'
            id='price'
            name='price'
            value={price}
            onChange={onChange}
          />
          <input
            type='text'
            className='update-input'
            placeholder='street'
            id='street'
            name='street'
            value={street}
            onChange={onChange}
          />
          <input
            type='text'
            className='update-input'
            placeholder='city'
            id='city'
            name='city'
            value={city}
            onChange={onChange}
          />
          <input
            type='text'
            className='update-input'
            placeholder='state'
            id='state'
            name='state'
            value={state}
            onChange={onChange}
          />
          <input
            type='text'
            className='update-input'
            placeholder='zipcode'
            id='zipcode'
            name='zipcode'
            value={zipcode}
            onChange={onChange}
          />
          <input type='submit' className='form-submit' value='Add Listing' />
        </form>
      </div>
    </div>
  )
}
export default AddListing
