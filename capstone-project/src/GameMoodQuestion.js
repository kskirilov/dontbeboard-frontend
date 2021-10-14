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
          gameMood: "fun"

        };
        this.handleChange = this.handleChange.bind(this);
      };

      handleChange(event) {
        this.setState({gameMood: event.target.value});
      }


    render() {
        return (
            <div>
                <Nav/>
                <div class="container">
                <div class="button">
                    <h1>What kind of game are you looking for?</h1>
                    <button class="btn btn--alpha" value="fun" onClick={this.handleChange}>Fun</button>
                    <button class="btn btn--alpha" value="drinking" onClick={this.handleChange}>Drinking</button>
                    <button class="btn btn--alpha" value="competitive" onClick={this.handleChange}>Competitive</button>
                    <button class="btn btn--alpha" value="strategy" onClick={this.handleChange}>Strategy</button>
                    <button class="btn btn--alpha" value="physicalActivity" onClick={this.handleChange}>Physical activity</button>

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


                    <p id="skip">Skip question</p>
                </div>
                <Footer/>
            </div>
            </div>
            );
        
                  }
}

export default withRouter(GameMoodQuestion);

