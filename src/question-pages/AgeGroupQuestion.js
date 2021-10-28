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
//QUESTION 3
export class AgeGroupQuestion extends Component { 

    constructor(props) {
        super(props);
        this.state = {
          duration: this.props.location.state.duration,
          players: this.props.location.state.players,
          gameKind: this.props.location.state.gameKind,
          gameMood: this.props.location.state.gameMood,
          ageGroup: "all",
          bgColorAll: "white",
          bgColorKids: "white",
          bgColorTeens: "white",
          bgColorAdult: "white",
          bgColorFamily: "white"
        };
        
        this.handleChangeAll = this.handleChangeAll.bind(this);
        this.handleChangeKids = this.handleChangeKids.bind(this);
        this.handleChangeTeens = this.handleChangeTeens.bind(this);
        this.handleChangeAdult = this.handleChangeAdult.bind(this);
        this.handleChangeFamily = this.handleChangeFamily.bind(this);      
      }


        handleChangeAll(event) {
          this.setState({ageGroup: event.target.value});
          this.setState({bgColorAll: "#b27d50",
          bgColorKids: "white",
          bgColorTeens: "white",
          bgColorAdult: "white",
          bgColorFamily: "white"})
        }
        
        handleChangeKids(event) {
          this.setState({ageGroup: event.target.value});
          this.setState({bgColorAll: "white",
          bgColorKids: "#b27d50",
          bgColorTeens: "white",
          bgColorAdult: "white",
          bgColorFamily: "white"});
        }
  
        handleChangeTeens(event) {
          this.setState({ageGroup: event.target.value});
          this.setState({bgColorAll: "white",
          bgColorKids: "white",
          bgColorTeens: "#b27d50",
          bgColorAdult: "white",
          bgColorFamily: "white"});
        }
  
        handleChangeAdult(event) {
          this.setState({ageGroup: event.target.value});
          this.setState({bgColorAll: "white",
          bgColorKids: "white",
          bgColorTeens: "white",
          bgColorAdult: "#b27d50",
          bgColorFamily: "white"});
        }

        handleChangeFamily(event) {
          this.setState({ageGroup: event.target.value});
          this.setState({bgColorAll: "white",
          bgColorKids: "white",
          bgColorTeens: "white",
          bgColorAdult: "white",
          bgColorFamily: "#b27d50"});
        }


    render() {
        return (
            <div>
                <Nav/>
                <div class="question-container">
                <div class="button">
                <h1>What kind of game are you looking for?</h1>
                    <button class="btn btn--alpha" style={{backgroundColor: this.state.bgColorKids}} value="kids" onClick={this.handleChangeKids}>Kids</button>
                    <button class="btn btn--alpha" style={{backgroundColor: this.state.bgColorTeens}} value="teens" onClick={this.handleChangeTeens}>Teens</button>
                    <button class="btn btn--alpha" style={{backgroundColor: this.state.bgColorAdult}} value="adult" onClick={this.handleChangeAdult}>Adult (18+)</button>
                    <button class="btn btn--alpha" style={{backgroundColor: this.state.bgColorFamily}} value="family" onClick={this.handleChangeFamily}>Family</button>
                    <button class="btn btn--alpha" style={{backgroundColor: this.state.bgColorAll}} value="all" onClick={this.handleChangeAll}>All</button>

                    <Link to={{
                        pathname: '/games/?playerCount='+this.state.players+'&avgDuration='+this.state.duration+'&gameKind='+this.state.gameKind+'&gameMood='+this.state.gameMood+'&ageGroup='+this.state.ageGroup,
                        // '/games/'+this.state.players+"/"+this.state.duration+"/"+this.state.gameKind+"/"+this.state.gameMood+"/"+this.state.ageGroup,
                        state: {
                            players: this.state.players, 
                            duration: this.state.duration,
                            gameKind: this.state.gameKind,
                            gameMood: this.state.gameMood,
                            ageGroup: this.state.ageGroup
                        }
                    }}>   
                    <button class="btn btn--alpha" id="btnContinue"><span>Continue</span></button>
                    </Link>
                </div>
                </div>
                <Footer/>
            </div>
        );
    }
}

export default withRouter(AgeGroupQuestion);

