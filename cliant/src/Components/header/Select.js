
import React  from 'react'
import Select from 'react-select'

const options = [
    { value: 'price', label: 'price' },
    { value: 'Destance', label: 'Destance' },
    { value: 'Male', label: 'Male' },
    { value: 'Female    ', label: 'Female' }
  ]

const SortByOptions = () => (
    <div style={{width:"400px" ,display:"inline-block"}}>
   <label style={{backgroundColor:"cadetblue",borderRadius:"5px"}}> Sorted By : </label>
    
    <Select
    
    isMulti
    name="options"
    options={options}
    className="basic-multi-select"
    classNamePrefix="select"
  />

  </div>
)


export default SortByOptions;