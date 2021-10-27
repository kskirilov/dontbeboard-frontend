import './questions.css'
import Nav from '../components/nav.js';
import Footer from '../components/footer.js';

import {
    BrowserRouter as Router,
    Link,
    useLocation
  } from "react-router-dom";
import React, { Component } from 'react';
import { withRouter } from 'react-router'

//increase or reduce duration length by clicking + or - on the button sides

//QUESTION 2
export class DurationQuestion extends Component { 

    constructor(props) {
        super(props);
        this.state = {
          players: this.props.location.state,
          duration: 30,
        };
      }
    
    
    IncrementItem = () => {
        this.setState({ duration: this.state.duration + 15 });
      }
    DecreaseItem = () => {
      this.setState({ duration: this.state.duration - 15 });
    }

    render() {

        
    return (
        <div>
            <Nav/>
            <div class="question-container">
            <div class="button">
            <h1>How long do you have?</h1>
                <button class="btn btn--alpha">
                    <span>
                        <button onClick={this.DecreaseItem}>-</button>
                        { this.state.duration } minutes
                        <button onClick={this.IncrementItem}>+</button>
                    </span>
                </button>

                <Link to={{
                    pathname: '/h3/'+this.state.players+"/"+this.state.duration,
                    state: {
                      players: this.state.players, 
                      duration: this.state.duration}
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

export default withRouter(DurationQuestion);

