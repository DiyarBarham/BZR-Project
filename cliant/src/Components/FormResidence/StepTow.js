import React, { useState } from 'react'

const StepTow = () => {
  const [address, setAddress] = useState('')
  const [location, setlocation] = useState('')
  const [destance, setDestance] = useState('')

  
  return (
    <div>
      <div className='row'>
        <div className='six columns'>
          <label>Address</label>
          <input
            className='u-full-width required'
            placeholder='test@mailbox.com'
            type='text'
            onChange={e => setAddress(e.target.value)}
            value={address}
            autoFocus
          />
        </div>
      </div>
      <div className='row'>
        <div className='six columns'>
          <label>location</label>
          <input
            className='u-full-width'
            placeholder='Confirm email'
            type='text'
            onChange={e => setlocation(e.target.value)}
            value={location}
          />
        </div>
      </div>
      <div className='row'>
        <div className='six columns'>
          <label>destanceFromUniversity</label>
          <input
            className='u-full-width'
            placeholder='Destance From University'
            type='email'
            onChange={e => setDestance(e.target.value)}
            value={destance}
          />
        </div>
      </div>
    </div>
  )
}
export default StepTow;