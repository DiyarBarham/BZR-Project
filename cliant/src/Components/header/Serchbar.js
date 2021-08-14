import React from 'react'
import SearchBar from "material-ui-search-bar";
import { Button } from '@material-ui/core';
import SortByOptions from './Select';
const Serchbar = () => {
    return (

      <>
        <SearchBar
        onChange={() => console.log('onChange')}
        onRequestSearch={() => console.log('onRequestSearch')}
        style={{
          width:"600px",
          margin: '0 auto',
          position: "absolute",
          background:"rgb(195 211 223)"}} />
          


</>  
    )
}

export default Serchbar