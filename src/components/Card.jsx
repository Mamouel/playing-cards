import React from 'react'
import backCardImg from "../style/backCardImg.png";

import heart from "../style/heart.png"
import diamond from "../style/diamond.png"
import club from "../style/club.png"
import spade from "../style/spade.png"

const Card = (props) => {

  const { suits, card, front, color } = props;


  const getCardSymbol = (suits) => {
    let symbol;
    switch(suits) {
      case 'Diamond':
        return symbol = diamond;
      case 'Heart':
        return symbol = heart;
      case 'Club':
        return symbol = club;
      case 'Spade':
        return symbol = spade;
      default:
        return symbol;
    }
  }

  if(front === true) {
    const cardSymbol = getCardSymbol(suits);
    return (
      
      <div  style={{ height: 282, width: 200, backgroundColor: "white", position: "relative", border: "1px solid black", borderRadius: 10, marginLeft: -180, color: `${color}`, fontSize: 20, textAlign: "center" }}>
        <div  style={{ position: "absolute", top: 5, left: 5 }}>
          <div style={{ width: 20 }}>{card}</div>
          <img src={cardSymbol} alt="suit-symbol" style={{ width: 20 }}/>

        </div>
        <div>
          <img src={cardSymbol} alt="suit-symbol" style={{ height: 40, position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)" }}/>
        </div>
        <div style={{ position: "absolute", bottom: 5, right: 5, transform: "rotate(-180deg)" }}>
          <div style={{ width: 20 }}>{card}</div>
          <img src={cardSymbol} alt="suit-symbol" style={{ width: 20 }}/>        
        </div>
      </div> 
    )
  } else {
    return (
      <div style={{ height: 282, width: 200, backgroundImage: `url(${backCardImg})`, backgroundSize: "cover", position: "relative", border: "1px solid black", borderRadius: 10, marginLeft: -180, color: `${color}` }}></div>
    )
  }
}

export default Card
