import './home.css'
import Nav from './components/nav.js';
import Footer from './components/footer.js';

import {
    BrowserRouter as Router,
    Link,
    useLocation
  } from "react-router-dom";
import React, { Component } from 'react';
import { withRouter } from 'react-router'
//QUESTION 3
export class GameKindQuestion extends Component { 

    constructor(props) {
        super(props);
        this.state = {
          duration: this.props.location.state.duration,
          players: this.props.location.state.players,
          gameKind: "all",
          bgColorAll: "#FF10F0",
          bgColorCards: "#FF10F0",
          bgColorBoard: "#FF10F0",
          bgColorNoEquipment: "#FF10F0",
          bgColorVideoGames: "#FF10F0"

        };
        this.handleChangeAll = this.handleChangeAll.bind(this);
        this.handleChangeCards = this.handleChangeCards.bind(this);
        this.handleChangeBoard = this.handleChangeBoard.bind(this);
        this.handleChangeNoEquipment = this.handleChangeNoEquipment.bind(this);
        this.handleChangeVideoGames = this.handleChangeVideoGames.bind(this);

      };
   

      handleChangeAll(event) {
        this.setState({gameKind: event.target.value});
        this.setState({bgColorAll: "lightblue",
        bgColorCards: "#FF10F0",
        bgColorBoard: "#FF10F0",
        bgColorNoEquipment: "#FF10F0",
        bgColorVideoGames: "#FF10F0"})
      }
      
      handleChangeCards(event) {
        this.setState({gameKind: event.target.value});
        this.setState({bgColorAll: "#FF10F0",
        bgColorCards: "lightblue",
        bgColorBoard: "#FF10F0",
        bgColorNoEquipment: "#FF10F0",
        bgColorVideoGames: "#FF10F0"});
      }

      handleChangeBoard(event) {
        this.setState({gameKind: event.target.value});
        this.setState({bgColorAll: "#FF10F0",
        bgColorCards: "#FF10F0",
        bgColorBoard: "lightblue",
        bgColorNoEquipment: "#FF10F0",
        bgColorVideoGames: "#FF10F0"});
      }

      handleChangeNoEquipment(event) {
        this.setState({gameKind: event.target.value});
        this.setState({bgColorAll: "#FF10F0",
        bgColorCards: "#FF10F0",
        bgColorBoard: "#FF10F0",
        bgColorNoEquipment: "lightblue",
        bgColorVideoGames: "#FF10F0"});
      }

      handleChangeVideoGames(event) {
        this.setState({gameKind: event.target.value});
        this.setState({bgColorAll: "#FF10F0",
        bgColorCards: "#FF10F0",
        bgColorBoard: "#FF10F0",
        bgColorNoEquipment: "#FF10F0",
        bgColorVideoGames: "lightblue"});
      }


    render() {
        return (
            <div>
                <Nav/>
                <div class="question-container">
                <div class="button">
                <h1>What kind of game are you looking for?</h1>
                    <button class="btn btn--alpha" style={{backgroundColor: this.state.bgColorAll}} value="all" onClick={this.handleChangeAll}>All</button>
                    <button class="btn btn--alpha" style={{backgroundColor: this.state.bgColorCards}} value="cards" onClick={this.handleChangeCards}>Cards</button>
                    <button class="btn btn--alpha" style={{backgroundColor: this.state.bgColorBoard}} value="board" onClick={this.handleChangeBoard}>Board</button>
                    <button class="btn btn--alpha" style={{backgroundColor: this.state.bgColorNoEquipment}} value="noEquipment" onClick={this.handleChangeNoEquipment}>No Equipment</button>
                    <button class="btn btn--alpha" style={{backgroundColor: this.state.bgColorVideoGames}} value="videoGames" onClick={this.handleChangeVideoGames}>Video games</button>

                    <Link to={{
                        pathname: '/h4/'+this.state.gameKind,
                        state: {
                            players: this.state.players, 
                            duration: this.state.duration,
                            gameKind: this.state.gameKind
                        }
                    }}>   
                    <button class="btn btn--alpha"><span>Continue</span></button>
                    </Link>


                    </div>
                </div>
                <Footer/>
            </div>
        );
    }
}

export default withRouter(GameKindQuestion);

