import React, { Component } from "react"
import AllGames from '../components/allGames.js'
import Card from "../components/card.js";


class GamesContainer extends Component {

    constructor (props){
        super(props);

        this.state = {
            loaded: false,
            games: [{
                "id": 1,
                "gameName": "Hangman",
                "gamePhoto": "https://image.shutterstock.com/image-illustration/illustration-hangman-game-260nw-386156509.jpg",
                "gameDescription": "One player chooses a word and the rest have a minimum of 6 attempts to guess it",
                "gameRules": "1. Player 1 pick a word 2. Remaining players make a letter guess. If the letter is correct the player has to add it to the words else it is considered a wrong attempt",
                "releaseDate": "1650-01-01",
                "minPlayers": 2,
                "maxPlayers": 6,
                "avgDuration": 15,
                "gameKind": "penAndPaper",
                "gameMood": "fun",
                "ageGroup": "all"
            }]
          }

    }

    
    componentDidMount() {
       this.getGamesData();
    }

    getGamesData() {
        fetch('http://localhost:8080/api/games')
            .then((response) => response.json())
            .then(data => this.setState({games: data, loaded: true}))
            .catch(error => console.log(error))   
    }


    
    render(){

        return (
            <>
                <AllGames games={this.state.games}/>
            </>
        )
    }
  }

  export default GamesContainer;