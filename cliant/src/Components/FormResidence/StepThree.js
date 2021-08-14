import React, { useState } from 'react'

const StepThree = () => {
  const [images, setImages] = useState('')
  const [rooms, setRooms] = useState('')
  const [balcones, setBalcones] = useState('')
  return (
    <div>
      <div  className='row'>
        <div  className='six columns'>
          <label>images</label>
          <input
            className='u-full-width required'
            placeholder='Image of your residence'
            type='file'
            onChange={e => setImages(e.target.value)}
            value={images}
            autoFocus
          />
        </div>
      </div>
      <div className='row'>
        <div className='six columns'>
          <label>Number Rooms For Your Resedince/balcones</label>
          <input
            className='u-full-width'
            placeholder='number room of your residence '
            type='number'
            onChange={e => setRooms(e.target.value)}
            value={rooms}
          />
        </div>
      </div>
      <div className='row'>
        <div className='six columns'>
          <label>Balcones</label>
          <input
            className='u-full-width'
            placeholder='number balcones of your residence '
            type='number'
            onChange={e => setBalcones(e.target.value)}
            value={balcones}
          />
        </div>
      </div>
    </div>
  )
}
export default StepThree ;