import SearchBar from "material-ui-search-bar";
import React, { useState } from  'react';
import axios from 'axios';
const SearchBbr = () => {
    const [price, setPrice] = useState("");
    const [distance, setDistance] = useState("");
    const [gender, setGender] = useState("");

    const valPrice = (value) => {
        setPrice(value);
        conditionsearch();
    }
    const valDistance = (value) => {
        setDistance(value);
        conditionsearch();
    }
    const valGender = (value) => {
        setGender(value);
        conditionsearch();
    }
    const conditionsearch = (e) =>{
        e.preventDefault();
        if(price != "" && distance !="" && gender != ""){
            axios.get('http://localhost:8000/api/residence/all/'+gender+'/'+price+'/'+distance)
            // .then(res => )
        } else if(distance != "" && gender != ""){
            axios.get('http://localhost:8000/api/residence/destanceandgender/'+distance+'/'+gender)
            // .then(res => )
        } else if(gender != "" && price != ""){
            axios.get('http://localhost:8000/api/residence/priceandgender/'+price+'/'+gender)
            // .then(res => )
        } else if(price != "" && distance !=""){
            axios.get('http://localhost:8000/api/residence/destanceandprice/'+distance+'/'+price)
            // .then(res => )
        } else if(price != ""){
            axios.get('http://localhost:8000/api/residence/price/'+price)
            // .then(res => )
        } else if(distance !=""){
            axios.get('http://localhost:8000/api/residence/destance/'+distance)
            // .then(res => )
        } else if(gender != ""){
            axios.get('http://localhost:8000/api/residence/gender/'+gender)
            // .then(res => )
        } else{
            axios.get('http://localhost:8000/api/allresidence')
            // .then(res => )
        }
    }
    return (
    
        <div></div>
    )
}

export default SearchBar
