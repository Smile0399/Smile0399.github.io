import { useState } from 'react'
import {
  getStorage,
  ref,
  uploadBytes,
  uploadBytesResumable,
  getDownloadURL
} from 'firebase/storage'
import { collection, addDoc } from 'firebase/firestore'
import { db } from '../firebase.config'
import { useNavigate } from 'react-router-dom'

const AddListing = () => {
  const [formData, setFormData] = useState({
    image: '',
    price: '',
    street: '',
    city: '',
    state: '',
    zipcode: '',
    link: '',
    sold: false
  })
  const { image, price, street, city, state, zipcode, link, sold } = formData

  const navigate = useNavigate()

  const onChange = e => {
    setFormData(prevState => ({
      ...prevState,
      [e.target.name]: e.target.value
    }))
  }

  const onMutate = e => {
    setFormData(prevState => ({
      ...prevState,
      image: e.target.files
    }))
  }

  const onSubmit = async e => {
    e.preventDefault()

    if (!image || !price || !street || !city || !state || !zipcode || !link) {
      return alert('Missing information')
    }

    // check to make sure the image is of a valid type
    const isValid = /\.(jpg|jpeg|png)$/i.test(image[0].name)
    if (!isValid) {
      return alert('Invalid file type please select a jpg, jpeg, or png file')
    }

    // save the image in firebase and return url
    const storeImage = async image => {
      return new Promise((resolve, reject) => {
        const storage = getStorage()
        const fileName = `${image[0].name}`

        const storageRef = ref(storage, 'images/' + fileName)
        const uploadTask = uploadBytesResumable(storageRef, image[0])

        uploadTask.on(
          'state_changed',
          snapshot => {
            const progress =
              (snapshot.bytesTransferred / snapshot.totalBytes) * 100
            console.log('Upload is ' + progress + '% done')
            switch (snapshot.state) {
              case 'paused':
                console.log('Upload is paused')
                break
              case 'running':
                console.log('Upload is running')
                break
              default:
                break
            }
          },
          error => {
            console.log('Failed upload')
            reject(error)
          },
          () => {
            // Handle successful uploads on complete
            // For instance, get the download URL: https://firebasestorage.googleapis.com/...
            getDownloadURL(uploadTask.snapshot.ref).then(downloadURL => {
              resolve(downloadURL)
            })
          }
        )
      })
    }

    // url
    const imageUrl = await storeImage(image)

    // Recreate object with new imageUrl
    const listing = {
      imageUrl,
      price,
      street,
      city,
      state,
      zipcode,
      link,
      sold
    }

    // Add listing to firestore
    const addListing = async listing => {
      try {
        console.log(listing)
        const docRef = await addDoc(collection(db, 'Listings'), {
          Listings: listing
        })

        navigate('/Active')
      } catch (e) {
        console.error('Error adding document ', e)
      }
    }

    addListing(listing)
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
            id='image'
            label='image'
            name='image'
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
          <input
            type='text'
            className='update-input'
            placeholder='link'
            id='link'
            name='link'
            value={link}
            onChange={onChange}
          />
          <input type='submit' className='form-submit' value='Add Listing' />
        </form>
      </div>
    </div>
  )
}
export default AddListing
