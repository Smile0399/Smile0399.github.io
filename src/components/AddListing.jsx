import { useState } from 'react'
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL
} from 'firebase/storage'
import { db } from '../firebase.config'

const AddListing = () => {
  const [formData, setFormData] = useState({
    url: '',
    price: '',
    street: '',
    city: '',
    state: '',
    zipcode: '',
    sold: false
  })

  const { url, price, street, city, state, zipcode, sold } = formData
  const onChange = e => {
    setFormData(prevState => ({
      ...prevState,
      [e.target.name]: e.target.value
    }))
  }

  const onMutate = e => {
    setFormData(prevState => ({
      ...prevState,
      url: e.target.files
    }))
  }

  const onSubmit = e => {
    e.preventDefault()

    if (!url || !price || !street || !city || !state || !zipcode) {
      return alert('Missing information')
    }

    // check to make sure the image is of a valid type
    const isValid = /\.(jpg|jpeg|png)$/i.test(url[0].name)
    if (!isValid) {
      return alert('Invalid file type please select a jpg, jpeg, or png file')
    }

    const listing = { url, price, street, city, state, zipcode, sold }
    console.log(listing)
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
            type='file'
            className='update-input'
            id='url'
            label='url'
            name='url'
            accept='image/*'
            onChange={onMutate}
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
