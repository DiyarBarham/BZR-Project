import React, { useState } from 'react';
import Select from 'react-select'

const StepOne = () => {

    const options = [
        { value: 'male', label: 'male' },
        { value: 'female', label: 'female' },
        
      ]

  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [gender, setGender] = useState('')
    

  return (
    <div>
      <div className='row'>
        <div className='six columns'>
          <label>Name Resedince</label>
          <input
            className='u-full-width'
            placeholder='First Name'
            type='text'
            onChange={e => setFirstName(e.target.value)}
            value={firstName}
            autoFocus
          />
        </div>

      </div>
      <div className='row'>
        <div className='six columns'>
          <label>description</label>
          <input
            className='u-full-width'
            placeholder='Last Name'
            type='text'
            onChange={e => setLastName(e.target.value)}
            value={lastName}
          />
        </div>
      </div>
      <div className='row'>
        <div style={{width:"45%" ,marginLeft:"27.5%"}} className='six columns'>
          <label>Gender</label>
          <Select  options={options} onChange={(e)=>setGender(e.value)} />
          <br/> 
          
      
        </div>
      </div>
      
    </div>
  )
}
export default StepOne;