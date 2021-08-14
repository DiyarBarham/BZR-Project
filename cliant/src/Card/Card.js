import React, { Component } from 'react';
import ReactCardCarousel from 'react-card-carousel';
import '../Card/cards.css'
import Header from '../components/header/Header'
import Serchbar from '../components/header/Serchbar';
import SortByOptions from '../components/header/Select';

class Card extends Component {
    static get CONTAINER_STYLE() {
      return {
        position: "relative",
        height: "60vh",
        width: "100%",
        right:"25%",
        flex: 1,
        justifyContent: "center",
        alignItems: "middle"
      };
    }
  
    static get CARD_STYLE() {
      return {
        height: "250px",
        width: "400px",
        paddingTop: "100px",
        textAlign: "center",
        background: "rgb(95 158 160)",
        color: "#FFF",
        fontFamily: "sans-serif",
        fontSize: "12px",
        textTransform: "uppercase",
        borderRadius: "10px",
        boxSizing: "border-box"
      };
    }
  
    render() {
      return (<>
        <div style={Card.CONTAINER_STYLE}>
          <ReactCardCarousel autoplay={true} autoplay_speed={3000}>
            <div style={Card.CARD_STYLE}>First Card</div>
            <div style={Card.CARD_STYLE}>Second Card</div>
            <div style={Card.CARD_STYLE}>Third Card</div>
            <div style={Card.CARD_STYLE}>Fourth Card</div>
            <div style={Card.CARD_STYLE}>Fifth Card</div>
          </ReactCardCarousel>
        </div>

         </>
      );
    }
  }
export default Card;