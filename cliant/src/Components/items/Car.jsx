import React, {useEffect, useState} from 'react';
import './Carousel.css';
import axios from 'axios';
import { ReactComponent as ArrowLeft } from './left-arrow.svg';
import { ReactComponent as ArrowRight } from './right-arrow.svg';
import { ReactComponent as Circle } from './right-arrow.svg';
const inactiveColour = 'hsla(221, 0%, 88%, 0.81)';
const activeColour = 'hsla(221, 0%, 49%, 0.98)';


const Car=(props)=>{
    const [items, setItems] = useState([]);
    useEffect(()=>{
        axios.get("http://localhost:8000/api/allresidence/")
        .then(res => {
            setItems(res.data);
        })
    },[]);


    const activatePreviousSlide = () => {
        let leftIndex = 0;
        if (this.state.leftCard - 1 === -1) { // checking for out of bounds
            leftIndex = this.state.arrayLength - 1; // set left to last index
        }
        else {
            leftIndex = this.state.leftCard - 1; // moving back by one card
        }
        this.setState({
            rightCard: this.state.activeIndex,
            activeIndex: this.state.leftCard,
            leftCard: leftIndex
        })
    }
    const activateNextSlide = () => {
        let rightIndex = 0;
        if (this.state.rightCard + 1 === this.state.arrayLength) { // checking for out of bounds
            rightIndex = 0; // set rightCard to beginning of array
        }
        else {
            rightIndex = this.state.rightCard + 1; // moving forward by one card
        }
        this.setState({
            leftCard: this.state.activeIndex,
            activeIndex: this.state.rightCard,
            rightCard: rightIndex
        })
    }
        return(
            <div>
                {
                    items.map((item) =>
                    {
                        return(
                            <h1>{item.name}</h1>
                        );
                    }
                    )
                }
                <h1>hiiiiiiiiiiii</h1>
            </div>
        )
}
export default Car