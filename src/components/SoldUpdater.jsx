import { useEffect, useState } from 'react'
import { doc, updateDoc } from 'firebase/firestore'
import { db } from '../firebase.config'

const SoldUpdater = ({ listing }) => {
  const { price, street, city, state, zipcode, sold, id } = listing

  const [formData, setFormData] = useState('')

  useEffect(() => {
    setFormData(sold)
  }, [])

  const onChangeValue = e => {
    setFormData(e.target.value)
    console.log(e.target.value)
  }

  const onSubmit = async e => {
    e.preventDefault()

    const ref = doc(db, 'Listings', id)

    console.log(id)
    console.log(formData)
    await updateDoc(ref, {
      sold: formData
    })

    console.log('success')
  }

  return (
    <div
      style={{
        fontSize: '14px',
        fontWeight: '600',
        background: 'red',
        marginBottom: '15px',
        paddingTop: '15px',
        paddingBottom: '15px',
        borderRadius: '15px',
        background: '#e6e6e6'
      }}
    >
      <div>
        {street} {city}
      </div>
      <div>
        {state} {zipcode}
      </div>
      <form onSubmit={e => onSubmit(e)}>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-evenly',
            paddingBottom: '15px'
          }}
        >
          <div>
            <input
              type='radio'
              id='update-radio-active'
              name='update-radio-select'
              value='Active'
              checked={formData === 'Active'}
              onChange={onChangeValue}
            />
            <label>Active</label>
          </div>
          <div>
            <input
              type='radio'
              id='update-radio-sold'
              name='update-radio-select'
              value='Sold'
              checked={formData === 'Sold'}
              onChange={onChangeValue}
            />
            <label>Sold</label>
          </div>
        </div>
        <input type='submit' className='form-submit' value='Submit' />
      </form>
    </div>
  )
}
export default SoldUpdater
