import Nav from './components/nav';
import './about.css';
import React from 'react';
import Footer from './components/footer.js';

class About extends React.Component {

  constructor (props){
    super(props);

    this.state = {
        loaded: false,
        gameName: "",
        gamePhoto: "",
        gameDescription: "",
        gameRules: "",
        releaseDate: "",
        minPlayers: 0,
        maxPlayers: 0,
        avgDuration: 0,
        gameKind: "",
        gameMood: "",
        ageGroup: ""
    }

    this.addNewGame = this.addNewGame.bind(this);
    this.onGameNameChange = this.onGameNameChange.bind(this);
    this.onMinPlayersChange = this.onMinPlayersChange.bind(this);
    this.onMaxPlayersChange = this.onMaxPlayersChange.bind(this);
    this.onGameKindChange = this.onGameKindChange.bind(this);
    this.onGameMoodChange = this.onGameMoodChange.bind(this);
    this.onAgeGroupChange = this.onAgeGroupChange.bind(this);
    this.onAvgDurationChange = this.onAvgDurationChange.bind(this);
    this.onGameDescriptionChange = this.onGameDescriptionChange.bind(this);
    this.onReleaseDateChange = this.onReleaseDateChange.bind(this);
    this.onGamePhotoChange = this.onGamePhotoChange.bind(this);
    this.onGameRulesChange = this.onGameRulesChange.bind(this);
    this.onGameSubmission = this.onGameSubmission.bind(this);
    
}

onGameNameChange(evt) {
  this.setState({gameName: evt.target.value});
}

onMinPlayersChange(evt) {
  this.setState({minPlayers: evt.target.value});
}

onMaxPlayersChange(evt) {
  this.setState({maxPlayers: evt.target.value});
}

onGameKindChange(evt) {
  this.setState({gameKind: evt.target.value});
}

onGameMoodChange(evt) {
  this.setState({gameMood: evt.target.value});
}

onAgeGroupChange(evt) {
  this.setState({ageGroup: evt.target.value});
}

onAvgDurationChange(evt) {
  this.setState({avgDuration: evt.target.value});
}

onGameDescriptionChange(evt) {
  this.setState({gameDescription: evt.target.value});
}

onReleaseDateChange(evt) {
  this.setState({releaseDate: evt.target.value});
}

onGamePhotoChange(evt) {
  this.setState({gamePhoto: evt.target.value});
}

onGameRulesChange(evt) {
  this.setState({gameRules: evt.target.value});
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
      ageGroup: this.state.ageGroup
  }
  this.addNewGame(newGame);
  this.setState({gameName: "",
  gamePhoto: "",
  gameDescription: "",
  gameRules: "",
  releaseDate: "",
  minPlayers: "",
  maxPlayers: "",
  avgDuration: "",
  gameKind: "",
  gameMood: "",
  ageGroup: ""
});
  
}

addNewGame(newGame){
    fetch("http://localhost:8080/api/games",{
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newGame)
    })
}
    
  render() {
  return (
        <div>
        <Nav />
        <div class="background">
  <div class="container">
    <div class="screen">
      <div class="screen-header">
        <div class="screen-header-left">
          <div class="screen-header-button close"></div>
          <div class="screen-header-button maximize"></div>
          <div class="screen-header-button minimize"></div>
        </div>
        <div class="screen-header-right">
          <div class="screen-header-ellipsis"></div>
          <div class="screen-header-ellipsis"></div>
          <div class="screen-header-ellipsis"></div>
        </div>
      </div>
      <div class="screen-body">
        <div class="screen-body-item left">
          <div class="app-title">
          <span>♞ DontBeBoard.</span>
            <span>SUBMIT A GAME</span>
            </div>
        <div class="screen-body-item">
          <div class="app-form">
            <div class="app-form-group">
              <input class="app-form-control" value={this.gameName} placeholder="NAME" onChange={this.onGameNameChange}></input>
            </div>
            <div class="app-form-group">
              <input class="app-form-control" value={this.minPlayers} placeholder="MINIMUM NUMBER OF PLAYERS" onChange={this.onMinPlayersChange}></input>
            </div>
            <div class="app-form-group">
              <input class="app-form-control" value={this.maxPlayers} placeholder="MAXIMUM NUMBER OF PLAYERS" onChange={this.onMaxPlayersChange}></input>
            </div>
            <div class="app-form-group">
              <input class="app-form-control" value={this.gameKind} placeholder="TYPE" onChange={this.onGameKindChange}></input>
            </div>
            <div class="app-form-group">
              <input class="app-form-control" value={this.gameMood} placeholder="GAME MOOD" onChange={this.onGameMoodChange}></input>
            </div>
            <div class="app-form-group">
              <input class="app-form-control" value={this.ageGroup} placeholder="AGE" onChange={this.onAgeGroupChange}></input>
            </div>
            <div class="app-form-group">
              <input class="app-form-control" value={this.avgDuration} placeholder="ESTIMATED PLAY TIME" onChange={this.onAvgDurationChange}></input>
            </div>
            <div class="app-form-group">
              <input class="app-form-control" value={this.gameDescription} placeholder="DESCRIPTION" onChange={this.onGameDescriptionChange}></input>
            </div>
            <div class="app-form-group">
              <input class="app-form-control" value={this.releaseDate} placeholder="RELEASE DATE" onChange={this.onReleaseDateChange}></input>
            </div>
            <div class="app-form-group">
              <input class="app-form-control" value={this.gamePhoto} placeholder="PHOTO" onChange={this.onGamePhotoChange}></input>
            </div>
            <div class="app-form-group">
              <input class="app-form-control" value={this.gameRules} placeholder="RULES" onChange={this.onGameRulesChange}></input>
            </div>
            <div class="app-form-group buttons">
              <button class="app-form-button">CANCEL</button>
              <button class="app-form-button" onClick={this.onGameSubmission}>SUBMIT</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  </div>
</div>
<Footer />
</div>
    )
  }
}
export default About;
