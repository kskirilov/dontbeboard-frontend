import React, { Component } from "react"
import AllGames from '../components/allGames.js'
import { withRouter } from 'react-router'
import './gamesContainer.css'
  
//FINAL SCREEN WITH GAMES. APPLY FILTERS.
class GamesContainer extends Component {

    constructor (props){
        super(props);

        this.state = {
            loaded: false,
            games: [],
            duration: this.props.location.state.duration,
            players: this.props.location.state.players,
            gameKind: this.props.location.state.gameKind,
            gameMood: this.props.location.state.gameMood,
            ageGroup: this.props.location.state.ageGroup
          }
    }

    
    componentDidMount() {
       this.getGamesData();
    }

    getGamesData() {
        fetch('http://localhost:8080/api/games/?playerCount='+this.state.players+'&avgDuration='+this.state.duration+'&gameKind='+this.state.gameKind+'&gameMood='+this.state.gameMood+'&ageGroup='+this.state.ageGroup)
            .then((response) => response.json())
            .then(data => this.setState({games: data, loaded: true}))
            .catch(error => console.log(error)) 
    }

    

    render(){

        return (
            <>
                <h1 id="games-found">Games Found: {this.state.games.length}</h1>

                <div class="games-cards">
                    <AllGames games={this.state.games}/>
                </div>
                </>
            
        )
    }
  }

  export default withRouter(GamesContainer);
