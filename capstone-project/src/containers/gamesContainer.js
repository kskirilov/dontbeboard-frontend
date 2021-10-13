import React, { Component } from "react"
import AllGames from '../components/allGames.js'
import Card from "../components/card.js";
import { withRouter } from 'react-router'
  
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
        fetch('http://localhost:8080/api/games/'+this.state.players+'/'+this.state.duration+'/'+this.state.gameKind+'/'+this.state.gameMood+'/'+this.state.ageGroup)
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

  export default withRouter(GamesContainer);