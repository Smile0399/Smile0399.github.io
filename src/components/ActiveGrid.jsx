import { useEffect, useState } from 'react'
import { getDocs, collection } from 'firebase/firestore'
import { db } from '../firebase.config'
import { Link } from 'react-router-dom'

const ActiveGrid = ({ url }) => {
  const [listingData, setListingData] = useState([])

  useEffect(() => {
    fetchListings()
  }, [])

  const fetchListings = async () => {
    const querySnapshot = await getDocs(collection(db, 'Listings'))

    const listings = []

    querySnapshot.forEach(doc => {
      // doc.data() is never undefined for query doc snapshots
      const ref = doc.data()
      const id = doc.id

      // add id to object
      ref.id = id

      listings.push(ref)
    })

    setListingData(prevState => listings)
  }

  return (
    <div className='active-grid'>
      {!listingData ? (
        <div>Loading</div>
      ) : (
        listingData.map(listing => {
          const { imageUrl, price, street, city, state, zipcode, link } =
            listing

          const formatPrice = price
            .toString()
            .replace(/\B(?=(\d{3})+(?!\d))/g, ',')

          return (
            <a target='_blank' rel='noopener noreferrer' href={link}>
              <div className='active-div'>
                <img className='active-img' src={imageUrl} alt='House' />
                <div className='active-header'>
                  <div className='active-amount'>${formatPrice}</div>
                </div>
                <div className='active-footer'>
                  <div className='active-address'>{street}</div>
                  <div className='active-zipcode'>
                    {city}, {state} {zipcode}
                  </div>
                </div>
              </div>
            </a>
          )
        })
      )}
    </div>
  )
}
export default ActiveGrid
