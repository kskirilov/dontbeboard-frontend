import './questions.css'
import Nav from '../components/nav.js';
import Footer from '../components/footer.js';

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
          bgColorAll: "white",
          bgColorCards: "white",
          bgColorBoard: "white",
          bgColorNoEquipment: "white",
          bgColorVideoGames: "white"

        };
        this.handleChangeAll = this.handleChangeAll.bind(this);
        this.handleChangeCards = this.handleChangeCards.bind(this);
        this.handleChangeBoard = this.handleChangeBoard.bind(this);
        this.handleChangeNoEquipment = this.handleChangeNoEquipment.bind(this);
        this.handleChangeVideoGames = this.handleChangeVideoGames.bind(this);

      };
   

      handleChangeAll(event) {
        this.setState({gameKind: event.target.value});
        this.setState({bgColorAll: "#b27d50",
        bgColorCards: "white",
        bgColorBoard: "white",
        bgColorNoEquipment: "white",
        bgColorVideoGames: "white"})
      }
      
      handleChangeCards(event) {
        this.setState({gameKind: event.target.value});
        this.setState({bgColorAll: "white",
        bgColorCards: "#b27d50",
        bgColorBoard: "white",
        bgColorNoEquipment: "white",
        bgColorVideoGames: "white"});
      }

      handleChangeBoard(event) {
        this.setState({gameKind: event.target.value});
        this.setState({bgColorAll: "white",
        bgColorCards: "white",
        bgColorBoard: "#b27d50",
        bgColorNoEquipment: "white",
        bgColorVideoGames: "white"});
      }

      handleChangeNoEquipment(event) {
        this.setState({gameKind: event.target.value});
        this.setState({bgColorAll: "white",
        bgColorCards: "white",
        bgColorBoard: "white",
        bgColorNoEquipment: "#b27d50",
        bgColorVideoGames: "white"});
      }

      handleChangeVideoGames(event) {
        this.setState({gameKind: event.target.value});
        this.setState({bgColorAll: "white",
        bgColorCards: "white",
        bgColorBoard: "white",
        bgColorNoEquipment: "white",
        bgColorVideoGames: "#b27d50"});
      }


    render() {
        return (
            <div>
                <Nav/>
                <div class="question-container">
                <div class="button">
                <h1>What kind of game are you looking for?</h1>
                    <button class="btn btn--alpha" style={{backgroundColor: this.state.bgColorCards}} value="cards" onClick={this.handleChangeCards}>Cards</button>
                    <button class="btn btn--alpha" style={{backgroundColor: this.state.bgColorBoard}} value="board" onClick={this.handleChangeBoard}>Board</button>
                    <button class="btn btn--alpha" style={{backgroundColor: this.state.bgColorNoEquipment}} value="noEquipment" onClick={this.handleChangeNoEquipment}>No Equipment</button>
                    <button class="btn btn--alpha" style={{backgroundColor: this.state.bgColorVideoGames}} value="videoGames" onClick={this.handleChangeVideoGames}>Video games</button>
                    <button class="btn btn--alpha" style={{backgroundColor: this.state.bgColorAll}} value="all" onClick={this.handleChangeAll}>All</button>

                    <Link to={{
                        pathname: '/h4/'+this.state.gameKind,
                        state: {
                            players: this.state.players, 
                            duration: this.state.duration,
                            gameKind: this.state.gameKind
                        }
                    }}>   
                    <button class="btn btn--alpha" id="btnContinue"><span>Continue</span></button>
                    </Link>


                    </div>
                </div>
                <Footer/>
            </div>
        );
    }
}

export default withRouter(GameKindQuestion);

