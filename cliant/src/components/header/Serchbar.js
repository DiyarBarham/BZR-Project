import React from 'react'
import SearchBar from "material-ui-search-bar";
const Serchbar = () => {
    return (

        <SearchBar
        onChange={() => console.log('onChange')}
        onRequestSearch={() => console.log('onRequestSearch')}
        style={{
          margin: '0 auto',
          marginTop:"120px",
          maxWidth: 800,
          background:"rgb(195 211 223)"
        
        }}
        
      />
    )
}

export default Serchbar