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
export class GameKindQuestion extends Component { 

    constructor(props) {
        super(props);
        this.state = {
          duration: this.props.location.state.duration,
          players: this.props.location.state.players,
          gameKind: "all",
        //   black: true
        };
        this.handleChange = this.handleChange.bind(this);
      };
    //     return (
    //          <div>
    //              <button className={button}
    //                      onClick={this.changeColor.bind(this)}>
    //                        Button
    //               </button>
    //          </div>
    //     )
    // }


      handleChange(event) {
        // this.setState({black: !this.state.black});
        this.setState({gameKind: event.target.value});
        // this.state.gameKind = event.target.value;
      }


    render() {
        // let button = this.state.black ? "blackButton" : "neonGreen";
        return (
            <div>
                <Nav/>
                <div class="button">
                <h1>What kind of game are you looking for?</h1>
                    <button class="btn btn--alpha" value="all" onClick={this.handleChange}>All</button>
                    <button class="btn btn--alpha" value="cards" onClick={this.handleChange}>Cards</button>
                    <button class="btn btn--alpha" value="board" onClick={this.handleChange}>Board</button>
                    <button class="btn btn--alpha" value="noEquipment" onClick={this.handleChange}>No Equipment</button>
                    <button class="btn btn--alpha" value="videoGames" onClick={this.handleChange}>Video games</button>

                    <Link to={{
                        pathname: '/h4/'+this.state.gameKind,
                        state: {
                            players: this.state.players, 
                            duration: this.state.duration,
                            gameKind: this.state.gameKind
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

export default withRouter(GameKindQuestion);

