import Nav from './components/nav';
import './about.css';
import './addgame.css'
import Footer from './components/footer.js';
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
        isStandardCards: false
      };
  
      this.handleInputChange = this.handleInputChange.bind(this);
      this.onGameKindChange = this.onGameKindChange.bind(this);
      this.onGameMoodChange = this.onGameMoodChange.bind(this);
      this.onAgeGroupChange = this.onAgeGroupChange.bind(this);

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
            selectedGameKind: event.target.value
        });
    }
    onGameMoodChange(event) {
        this.setState({
            selectedGameMood: event.target.value
        });
    }
    onAgeGroupChange(event) {
        this.setState({
            selectedAgeGroup: event.target.value
        });
    }


    render() {
      return (
        <>
        <Nav/>
        {/* <div class="background">
        <div class="container">
        <div class="screen">   
        <div class="screen-body">
        <div class="app-form" onSubmit={this.onGameSubmission}>
        <form>
        <div class="screen-body-item left">
        <div class="app-title"> ♞ DontBeBoard. <br/> ADD A GAME  </div>
        <div class="screen-body-item"> */}
        <form>
            <label class="app-form-group"> 
                Game name:
                <input class="app-form-control" placeholder="monopoly" name="gameName" type="text" value={this.state.gameName} onChange={this.handleInputChange} />
            </label>
            <label class="app-form-group">
                Game photo (URL):
                <input class="app-form-control" placeholder="www.yourlink.com" name="gamePhoto" type="text" value={this.state.gamePhoto} onChange={this.handleInputChange} />
            </label>
            <label>
                Minimum players <input name="minimumPlayers" type="number" value={this.state.minPlayers} onChange={this.handleInputChange} />
            </label>
            <label>
                Maximum players:
                <input class="app-form-control" name="maximumPlayers" type="number" value={this.state.maxPlayers} onChange={this.handleInputChange} />
            </label>
            <label>
                Estimated duration (minutes):
                <input class="app-form-control" name="estimatedDuration" type="number" value={this.state.avgDuration} onChange={this.handleInputChange} />
            </label>
    {/* GAME TYPE */}
            <br/>
            What's the type of this game?              
            <div className="radio">
                <input type="radio" value="board" checked={this.state.selectedGameKind === "Board"} onChange={this.onGameKindChange}/><span>Board</span>
                <input type="radio" value="cards" checked={this.state.selectedGameKind === "Cards"} onChange={this.onGameKindChange}/><span>Card</span>
                <input type="radio" value="videoGame" checked={this.state.selectedGameKind === "Video Game"} onChange={this.onGameKindChange}/><span>Video Game</span>
                <input type="radio" value="noEquipment" checked={this.state.selectedGameKind === "No Equipment"} onChange={this.onGameKindChange}/><span>No Equipment/Other</span>
            <div>
            Selected option is : {this.state.selectedGameKind}
            
            </div>
                Tick here if standard card deck: 
                <input name="isStandardCards" type="checkbox" checked={this.state.isStandardCards} onChange={this.handleInputChange} />
            </div>

    {/* GAME MOOD */}
        <div class="app-form-group">
            <br/>
            What mood do you associate with playing this game?
            <div className="radio"> 
                <input
                type="radio"
                value="fun"
                checked={this.state.selectedGameMood === "Fun"}
                onChange={this.onGameMoodChange}
                />
                <span>Fun</span>
                <input
                type="radio"
                value="drinking"
                checked={this.state.selectedGameMood === "Drinking"}
                onChange={this.onGameMoodChange}
                />
                <span>Drinking</span>
                <input
                type="radio"
                value="strategy"
                checked={this.state.selectedGameMood === "Strategy"}
                onChange={this.onGameMoodChange}
                />
                <span>Strategy</span>
                <input
                type="radio"
                value="competitive"
                checked={this.state.selectedGameMood === "Competitive"}
                onChange={this.onGameMoodChange}
                />
                <span>Competitive</span>
                <input
                type="radio"
                value="other"
                checked={this.state.selectedGameMood === "Other"}
                onChange={this.onGameMoodChange}
                />
                Other
            {/* <div>
            Selected option is : {this.state.selectedGameMood}
            </div> */}
            <br/>
            </div>
        </div>


    {/* AGE GROUP */}
    <div class="app-form-group">
            <br/>
            What is the appropriate age for this game?
            <div className="radio"> 
                <input
                type="radio"
                value="any"
                checked={this.state.selectedAgeGroup === "Any age"}
                onChange={this.onAgeGroupChange}
                />
                <span>Any age</span>
                <input
                type="radio"
                value="kids"
                checked={this.state.selectedAgeGroup === "Kids"}
                onChange={this.onAgeGroupChange}
                />
                <span>Kids</span>
                <input
                type="radio"
                value="family"
                checked={this.state.selectedAgeGroup === "Family"}
                onChange={this.onAgeGroupChange}
                />
                <span>Family</span>
                <input
                type="radio"
                value="adult"
                checked={this.state.selectedAgeGroup === "Adult"}
                onChange={this.onAgeGroupChange}
                />
                <span>Adult</span>
            {/* <div>
            Selected option is : {this.state.selectedAgeGroup}
            </div> */}
        </div>
        </div>

    {/* DESCRIPTION, RULES, RELEASE DATE */}
            <div class="app-form-group">
                    Game description:
                    <input class="app-form-control"
                    placeholder="qwdwqd"
                    name="gameDescription"
                    type="text"
                    value={this.state.gameDescription}
                    onChange={this.handleInputChange} />
            </div>
            <div class="app-form-group">
                    Game rules:
                    <input class="app-form-control"
                    placeholder="qwdwqd"
                    name="gameRules"
                    type="text"
                    value={this.state.gameRules}
                    onChange={this.handleInputChange} />
            </div>
            <div>
            The rules are: {this.state.gameRules}
            </div>
        
            <br/>
            <div class="app-form-group">
                Release date:
                <input class="app-form-control"
                name="releaseDate"
                type="date"
                value={this.state.releaseDate}
                onChange={this.handleInputChange} />
            {/* <div>
            The release date of the game is : {this.state.releaseDate}
            </div> */}
            </div>
            <br/>
            <div class="app-form-group buttons">
                <input class="app-form-button" type="submit" value="Submit" />
            </div>
        </form>
{/* 
        </div>
        </div>
            </form>
        </div>
        </div>
        </div>
        </div>
        </div> */}
        </>
      );
    }
  }

  export default withRouter(AddGame);