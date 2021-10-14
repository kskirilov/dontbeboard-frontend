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


//QUESTION 1
class PlayersQuestion extends Component { 

    constructor(props) {
        super(props);
        this.state = {
          players: 2,
        };
      }
    
    
    IncrementItem = () => {
        this.setState({ players: this.state.players + 1 });
        console.log("decreased")
      }
      DecreaseItem = () => {
        this.setState({ players: this.state.players - 1 });
      }


      render() {

    return (
        <div>
            <Nav/>
            <div class="button">
            <h1>How many are playing today?</h1>
                <button class="btn btn--alpha">
                    <span>
                        <button onClick={this.DecreaseItem}>-</button>
                        { this.state.players } players
                        <button onClick={this.IncrementItem}>+</button>
                        {/* <button onClick={this.ToggleClick}>
                            { this.state.show ? 'Hide number' : 'Show number' }
                        </button>
                            { this.state.show ? <h2>{ this.state.clicks }</h2> : '' } */}
                    </span>
                </button>

                <Link to={{
                    pathname: '/h2/'+this.state.players,
                    state: this.state.players
                    }}>
                    <button class="btn btn--alpha" id="secondButton"><span>Continue</span></button>
                </Link>

                
            </div>
            <Footer/>
        </div>
        
        );
    }
}

export default withRouter(PlayersQuestion);

