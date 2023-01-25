import { useEffect, useState } from 'react'
import { doc, updateDoc } from 'firebase/firestore'
import { db } from '../firebase.config'
import { toast } from 'react-toastify'

const SoldUpdater = ({ listing, onRemove }) => {
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
    try {
      await updateDoc(ref, {
        sold: formData
      })

      toast.success('Status Updated')
      console.log('success')
    } catch (error) {
      toast.error('Failure to update')
      console.log(error)
    }
  }

  const handleCallback = e => {
    e.preventDefault()

    const doubleCheck = 'Are you sure you want to delete this?'
    if (window.confirm(doubleCheck) === true) {
      onRemove(id)
    } else {
      return toast.warning('Nothing deleted')
    }
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
        <div style={{ display: 'flex', justifyContent: 'space-evenly' }}>
          <input type='submit' className='form-submit' value='Submit' />
          <button className='form-submit' onClick={handleCallback}>
            Remove
          </button>
        </div>
      </form>
    </div>
  )
}
export default SoldUpdater
