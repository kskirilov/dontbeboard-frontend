import Nav from '../components/nav';
import './addgame.css'
import Footer from '../components/footer.js';
import {
    BrowserRouter as Router,
    Link,
    useLocation
  } from "react-router-dom";
import React, { Component } from 'react';
import { withRouter } from 'react-router'


export class AddGame extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        gameName: "",
        gamePhoto: "",
        minPlayers: 2,
        maxPlayers: 4,
        avgDuration: 45,
        gameRules: "",
        gameDescription: "",
        isStandardCards: false,
        releaseDate: "",
        gameKind: "",
        gameMood: "",
        ageGroup: "",
        gameCost: ""
      };
  

      this.handleInputChange = this.handleInputChange.bind(this);
      this.onGameKindChange = this.onGameKindChange.bind(this);
      this.onGameMoodChange = this.onGameMoodChange.bind(this);
      this.onAgeGroupChange = this.onAgeGroupChange.bind(this);
      this.addNewGame = this.addNewGame.bind(this);
      this.onGameSubmission = this.onGameSubmission.bind(this);

    }
  
    handleInputChange(event) {
      const target = event.target;
      const value = target.type === 'checkbox' ? target.checked : target.value;
      const name = target.name;
  
      this.setState({
        [name]: value
      });
    }
    
    onGameKindChange(event) {
        this.setState({
            gameKind: event.target.value
        });
    }
    onGameMoodChange(event) {
        this.setState({
            gameMood: event.target.value
        });
    }
    onAgeGroupChange(event) {
        this.setState({
            ageGroup: event.target.value
        });
    }

    onGameSubmission(evt) {
        evt.preventDefault();
        const newGame = {
            gameName: this.state.gameName,
            gamePhoto: this.state.gamePhoto,
            gameDescription: this.state.gameDescription,
            gameRules: this.state.gameRules,
            releaseDate: this.state.releaseDate,
            minPlayers: this.state.minPlayers,
            maxPlayers: this.state.maxPlayers,
            avgDuration: this.state.avgDuration,
            gameKind: this.state.gameKind,
            gameMood: this.state.gameMood,
            ageGroup: this.state.ageGroup,
            gameCost: this.state.gameCost,
            isStandardCards: this.state.isStandardCards
        }
        this.addNewGame(newGame);
        alert("Your suggestion for "+ this.state.gameName + " was successfully submitted");
        this.setState({
            gameName: "",
            gamePhoto: "",
            gameDescription: "",
            gameRules: "",
            releaseDate: "",
            minPlayers: 2,
            maxPlayers: 4,
            avgDuration: 45,
            gameKind: "",
            gameMood: "",
            ageGroup: "",
            gameCost: "",
            isStandardCards: false
      });
        
      }

    addNewGame(newGame){
        fetch("https://dontbeboard-backend.herokuapp.com/api/suggestions",{
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newGame)
        })
    }

    render() {
      return (
        <>

        <Nav/>
        <div class="background">
        <div class="container">
        <div class="screen">   
        <div class="screen-body">
        <div class="app-form">
        <form onSubmit={this.onGameSubmission}>
        <div class="screen-body-item left">
        <div class="app-title"> ♞ DontBeBoard. <br/> SUGGEST A GAME  </div>
        <div class="screen-body-item">

            {/* GAME NAME, PHOTO, PLAYERS, DURATION */}
            <label class="app-form-group"> 
            <div class="prompt">Game name: <input class="app-form-control" placeholder="monopoly" name="gameName" type="text" value={this.state.gameName} onChange={this.handleInputChange} required/></div>
            </label>
            <label class="app-form-group">
            <div class="prompt">Game photo (URL): <input class="app-form-control" placeholder="www.yourlink.com" name="gamePhoto" type="text" value={this.state.gamePhoto} onChange={this.handleInputChange}/></div>
            </label>
            <label class="app-form-group">
            <div class="prompt">Minimum players <input class="app-form-control" name="minPlayers" type="number" value={this.state.minPlayers} onChange={this.handleInputChange}/></div>
            </label>
            <label class="app-form-group">
            <div class="prompt">Maximum players: <input class="app-form-control" name="maxPlayers" type="number" value={this.state.maxPlayers} onChange={this.handleInputChange}/></div>
            </label>
            <label class="app-form-group"> 
            <div class="prompt">Estimated duration (minutes): <input class="app-form-control" name="avgDuration" type="number" value={this.state.avgDuration} onChange={this.handleInputChange}/></div>
            </label>

        <div class="radioButtons">
            {/* RADIO 1: GAME TYPE */}
            <div class="app-form-group">
            <div class="prompt">What's the type of this game?</div>   
                     
            <div className="radio">
                <input type="radio" value="board" checked={this.state.gameKind === "board"} onChange={this.onGameKindChange}/><span>Board</span>
                <input type="radio" value="card" checked={this.state.gameKind === "card"} onChange={this.onGameKindChange}/><span>Card</span>
                <input type="radio" value="videoGame" checked={this.state.gameKind === "videoGame"} onChange={this.onGameKindChange}/><span>Video Game</span>
                <input type="radio" value="noEquipment" checked={this.state.gameKind === "noEquipment"} onChange={this.onGameKindChange}/><span>No Equipment/Other</span>
                <div>Tick here if standard card deck: <input name="isStandardCards" type="checkbox" checked={this.state.isStandardCards} onChange={this.handleInputChange} /></div>
            </div>
            </div>
             {/* <div> The type is : {this.state.selectedGameKind} </div> */}


            {/* RADIO 2: GAME MOOD */}
            <div class="app-form-group">
            <div class="prompt">What mood do you associate with playing this game?</div>
            <div className="radio"> 
                <input type="radio" value="fun" checked={this.state.gameMood === "fun"} onChange={this.onGameMoodChange}/><span>Fun</span>
                <input type="radio" value="drinking" checked={this.state.gameMood === "drinking"} onChange={this.onGameMoodChange}/><span>Drinking</span>
                <input type="radio" value="strategy" checked={this.state.gameMood === "strategy"} onChange={this.onGameMoodChange}/><span>Strategy</span>
                <input type="radio" value="competitive" checked={this.state.gameMood === "competitive"} onChange={this.onGameMoodChange}/><span>Competitive</span>
                <input type="radio" value="other" checked={this.state.gameMood === "other"} onChange={this.onGameMoodChange}/><span>Other</span>
            </div>
            </div>


            {/* RADIO 3: AGE GROUP */}
            <div class="app-form-group">
            <div class="prompt">What is the appropriate age for this game?</div>
            <div className="radio"> 
                <input type="radio" value="all" checked={this.state.ageGroup === "all"} onChange={this.onAgeGroupChange}/><span>Any age</span>
                <input type="radio" value="kids" checked={this.state.ageGroup === "kids"} onChange={this.onAgeGroupChange}/><span>Kids</span>
                <input type="radio" value="family" checked={this.state.ageGroup === "family"} onChange={this.onAgeGroupChange}/><span>Family</span>
                <input type="radio" value="adult" checked={this.state.ageGroup === "adult"} onChange={this.onAgeGroupChange}/><span>Adult</span>
            </div>
            </div>
        </div>

        {/* DESCRIPTION, RULES, RELEASE DATE */}
            <div class="app-form-group">
            <div class="prompt">Game description: <input class="app-form-control" placeholder="" name="gameDescription" type="text" value={this.state.gameDescription} onChange={this.handleInputChange}/></div>
            </div>
            <div class="app-form-group">
            <div class="prompt">Game rules: <input class="app-form-control" placeholder="" name="gameRules" type="text" value={this.state.gameRules} onChange={this.handleInputChange} /></div>
            </div>
            <div class="app-form-group">
            <div class="prompt">Release date: <input class="app-form-control" name="releaseDate" type="date" value={this.state.releaseDate} onChange={this.handleInputChange} /></div>
                         {/* <div> The release date of the game is : {this.state.releaseDate} </div> */}
            </div>
            <div class="app-form-group">
            <div class="prompt">Game cost: <input class="app-form-control" pattern="^\d*(\.\d{0,2})?$" min="0" value="0" step="0.01" placeholder="19.99" name="gameCost" type="number" value={this.state.gameCost} onChange={this.handleInputChange}/></div>
            </div>

            <div class="app-form-group buttons">
                <input class="app-form-button" type="submit" value="Submit" />
            </div>
        </div>
        </div>
        </form>
        </div>
        </div>
        </div>
        </div>
        </div>
        </>
      );
    }
  }

  export default withRouter(AddGame);