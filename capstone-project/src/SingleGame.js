import './home.css';
import Card from './components/card';
import Nav from './components/nav.js';
import Footer from './components/footer.js';
import { BrowserRouter as Router,Link,museLocation} from "react-router-dom";
import React, { Component } from 'react';
import { withRouter } from 'react-router'
import './SingleGame.css';




class SingleGame extends Component {
        constructor(props){
            super(props);
            this.state= {
                name: this.props.location.state.name,
                image: this.props.location.state.image,
                minPlayers: this.props.location.state.minPlayers,
                maxPlayers: this.props.location.state.maxPlayers,
                time: this.props.location.state.time,
                gameType: this.props.location.state.gameType,
                mood: this.props.location.state.mood,
                ageGroup: this.props.location.state.ageGroup,
                releaseDate: this.props.location.state.releaseDate,
                description: this.props.location.state.description,
                rules: this.props.location.state.rules
            }
        }

        
        
render() {
    return (
        <div>
            <Nav />
            <h1 id="game-name">{this.state.name}</h1>
            <div class="flex-container">
                <div class="image-container">
                    <img src={this.state.image} />
                </div>
                <div class="info-container">
                    <p>Release date: {this.state.releaseDate}</p>
                    <p>Number of players: {this.state.minPlayers}-{this.state.maxPlayers}</p>
                    <p>Time to play: {this.state.time} minutes</p>
                    <p>Game type: {this.state.gameType}</p>
                    <p>Game mood: {this.state.mood}</p>
                    <p>Age group: {this.state.ageGroup}</p>
                    <p>Description: {this.state.description}</p>
                    <p>Rules: {this.state.rules}</p>
                </div>
            </div>
            <Footer />
        </div>
    )
}

}

export default withRouter(SingleGame);