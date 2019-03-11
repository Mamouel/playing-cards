import React, { Component } from 'react';
import Card from "./components/Card" ;
import { deckArray } from "./components/DeckArray";


class App extends Component {

  constructor() {
    super();
    this.state = {
      cardsArray: deckArray,
      cardPicked: [],
      front: true
    }
  }

  shuffle = (array) => {
    let currentIndex = array.length, temporaryValue, randomIndex;
    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
    this.setState({ cardsArray: array, cardPicked: [] })
    return array;
  }

  dealOneCard = () => {
    let cardsArray = this.state.cardsArray;
    const randomItem = cardsArray[Math.floor(Math.random()*cardsArray.length)];
    const newCardsArray = cardsArray.filter(element => element.index !== randomItem.index)
    this.setState({ cardsArray: newCardsArray })
    let cardsPickedArray = this.state.cardPicked;
    cardsPickedArray.length < 52 &&
    cardsPickedArray.push(randomItem);
    this.setState({ cardPicked: cardsPickedArray })
  }

  flip = () => {
    this.setState({ front: !this.state.front})
  }

  render() {
    const cardsArray = this.state.cardsArray;
    const cardsPickedArray = this.state.cardPicked;

    return (
      <div style={{ width: "90%" }}>
        <div style={{ display: "flex", marginLeft: 200, justifyContent: "center", height: 300, marginTop: 40 }}>
          {cardsArray && cardsArray.map((card, index) => {
            return (
              <div>
                <Card  suits={card.suits} card={card.card} key={index} color={card.color} front={this.state.front}/>
              </div>
            ) 
          })}
        </div>
        <div style={{ marginTop: 40, textAlign: "center" }}>
          <button onClick={() => this.shuffle(deckArray)}>Shuffle</button>
          <button onClick={() => this.dealOneCard()}>Deal one card</button>
          <button onClick={() => this.flip()}>Flip</button>
        </div>
        <div style={{ display: "flex", marginLeft: 200, justifyContent: "center", marginTop: 40 }}>
          {cardsPickedArray && cardsPickedArray.map((card, index) => {
            return (
              <div>
                <Card suits={card.suits} card={card.card} key={index} color={card.color} front={true}/>
              </div>
            ) 
          })}
        </div>
      </div>
    );
  }
}

export default App;
