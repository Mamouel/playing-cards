import React from "react";
import PropTypes from "prop-types";

import backCardImg from "../style/images/backCardImg.png";
import heart from "../style/images/heart.png";
import diamond from "../style/images/diamond.png";
import club from "../style/images/club.png";
import spade from "../style/images/spade.png";

import "../style/components/card.scss";

const Card = (props) => {

  const { suits, card, front, color } = props;

  const getCardSymbol = (suits) => {
    let symbol;
    switch(suits) {
      case "Diamond":
        return symbol = diamond;
      case "Heart":
        return symbol = heart;
      case "Club":
        return symbol = club;
      case "Spade":
        return symbol = spade;
      default:
        return symbol;
    };
  };

  if(front === true) {
    const cardSymbol = getCardSymbol(suits);
    return (
      <div className="card-container" style={{ color: `${color}` }}>
        <div  style={{ position: "absolute", top: 5, left: 5 }}>
          <div style={{ maxWidth: 20 }}>{card}</div>
          <img src={cardSymbol} alt="suit-symbol" style={{ maxWidth: 20 }}/>
        </div>
        <div>
          <img src={cardSymbol} alt="suit-symbol" style={{ height: 40, position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)" }}/>
        </div>
        <div style={{ position: "absolute", bottom: 5, right: 5, transform: "rotate(-180deg)" }}>
          <div style={{ maxWidth: 20 }}>{card}</div>
          <img src={cardSymbol} alt="suit-symbol" style={{ maxWidth: 20 }}/>        
        </div>
      </div> 
    );
  } else {
    return (
      <div className="card-container" style={{ backgroundImage: `url(${backCardImg})`, color: `${color}` }}></div>
    );
  };
};

Card.propTypes = {
  suits: PropTypes.string,
  card: PropTypes.string,
  front: PropTypes.bool,
  color: PropTypes.string
};

export default Card;
