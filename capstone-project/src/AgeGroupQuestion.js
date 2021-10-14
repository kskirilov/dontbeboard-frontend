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
//QUESTION 3
export class AgeGroupQuestion extends Component { 

    constructor(props) {
        super(props);
        this.state = {
          duration: this.props.location.state.duration,
          players: this.props.location.state.players,
          gameKind: this.props.location.state.gameKind,
          gameMood: this.props.location.state.gameMood,
          ageGroup: 'all'
        };
        this.handleChange = this.handleChange.bind(this);
      }

      handleChange(event) {
        // alert(event.target.value)
        this.setState({ageGroup: event.target.value});
        // this.setState({bgColor: 'blue'});
      }


    render() {
        return (
            <div>
                <Nav/>
                <div class="button">
                <h1>What kind of game are you looking for?</h1>
                    <button class="btn btn--alpha" value="all" onClick={this.handleChange}>All</button>
                    <button class="btn btn--alpha" value="kids" onClick={this.handleChange}>Kids</button>
                    <button class="btn btn--alpha" value="teens" onClick={this.handleChange}>Teens</button>
                    <button class="btn btn--alpha" value="adult" onClick={this.handleChange}>Adult (18+)</button>
                    <button class="btn btn--alpha" value="family" onClick={this.handleChange}>Family</button>

                    <Link to={{
                        pathname: '/games/'+this.state.players+"/"+this.state.duration+"/"+this.state.gameKind+"/"+this.state.gameMood+"/"+this.state.ageGroup,
                        state: {
                            players: this.state.players, 
                            duration: this.state.duration,
                            gameKind: this.state.gameKind,
                            gameMood: this.state.gameMood,
                            ageGroup: this.state.ageGroup
                        }
                    }}>   
                    <button class="btn btn--alpha"><span>Continue</span></button>
                    </Link>


                    <p id="skip">Skip question</p>
                </div>
                <Footer/>
            </div>
        );
    }
}

export default withRouter(AgeGroupQuestion);

