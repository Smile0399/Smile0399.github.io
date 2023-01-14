import { useEffect, useState } from 'react'
import { getDocs, collection } from 'firebase/firestore'
import { db } from '../firebase.config'

import SoldUpdater from './SoldUpdater'

const UpdateListing = () => {
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
          textAlign: 'center',
          backgroundColor: 'white',
          width: '300px',
          padding: '15px',
          borderRadius: '15px',
          overflow: 'hidden'
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center'
          }}
        >
          {listingData.length < 1 ? (
            <div>Loading</div>
          ) : (
            listingData.map(listing => {
              return <SoldUpdater key={listing.id} listing={listing} />
            })
          )}
        </div>
      </div>
    </div>
  )
}
export default UpdateListing
