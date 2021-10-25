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
//QUESTION 4
export class GameMoodQuestion extends Component { 

    constructor(props) {
        super(props);
        this.state = {
          duration: this.props.location.state.duration,
          players: this.props.location.state.players,
          gameKind: this.props.location.state.gameKind,
          gameMood: "all",
          bgColorFun: "#FF10F0",
          bgColorDrinking: "#FF10F0",
          bgColorCompetitive: "#FF10F0",
          bgColorStrategy: "#FF10F0",
          bgColorPhysicalActivity: "#FF10F0"

        };
        
        this.handleChangeFun = this.handleChangeFun.bind(this);
        this.handleChangeDrinking = this.handleChangeDrinking.bind(this);
        this.handleChangeCompetitive = this.handleChangeCompetitive.bind(this);
        this.handleChangeStrategy = this.handleChangeStrategy.bind(this);
      };

      handleChangeFun(event) {
        this.setState({gameMood: event.target.value});
        this.setState({bgColorFun: "lightblue",
        bgColorDrinking: "#FF10F0",
        bgColorCompetitive: "#FF10F0",
        bgColorStrategy: "#FF10F0"})
      }
      
      handleChangeDrinking(event) {
        this.setState({gameMood: event.target.value});
        this.setState({bgColorFun: "#FF10F0",
        bgColorDrinking: "lightblue",
        bgColorCompetitive: "#FF10F0",
        bgColorStrategy: "#FF10F0",
        bgColorPhysicalActivity: "#FF10F0"});
      }

      handleChangeCompetitive(event) {
        this.setState({gameMood: event.target.value});
        this.setState({bgColorFun: "#FF10F0",
        bgColorDrinking: "#FF10F0",
        bgColorCompetitive: "lightblue",
        bgColorStrategy: "#FF10F0",
        bgColorPhysicalActivity: "#FF10F0"});
      }

      handleChangeStrategy(event) {
        this.setState({gameMood: event.target.value});
        this.setState({bgColorFun: "#FF10F0",
        bgColorDrinking: "#FF10F0",
        bgColorCompetitive: "#FF10F0",
        bgColorStrategy: "lightblue",
        bgColorPhysicalActivity: "#FF10F0"});
      }

    render() {
        return (
            <div>
                <Nav/>
                <div class="question-container">
                <div class="button">
                    <h1>What kind of game are you looking for?</h1>
                    <button class="btn btn--alpha" style={{backgroundColor: this.state.bgColorFun}} value="fun" onClick={this.handleChangeFun}>Fun</button>
                    <button class="btn btn--alpha" style={{backgroundColor: this.state.bgColorDrinking}} value="drinking" onClick={this.handleChangeDrinking}>Drinking</button>
                    <button class="btn btn--alpha" style={{backgroundColor: this.state.bgColorCompetitive}} value="competitive" onClick={this.handleChangeCompetitive}>Competitive</button>
                    <button class="btn btn--alpha" style={{backgroundColor: this.state.bgColorStrategy}} value="strategy" onClick={this.handleChangeStrategy}>Strategy</button>

                    <Link to={{
                        pathname: '/h5/'+this.state.gameMood,
                        state: {
                            players: this.state.players, 
                            duration: this.state.duration,
                            gameKind: this.state.gameKind,
                            gameMood: this.state.gameMood
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

export default withRouter(GameMoodQuestion);

