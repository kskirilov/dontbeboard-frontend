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
          ageGroup: 'all',
          bgColorAll: "#FF10F0",
          bgColorKids: "#FF10F0",
          bgColorTeens: "#FF10F0",
          bgColorAdult: "#FF10F0",
          bgColorFamily: "#FF10F0"
        };
        this.handleChangeAll = this.handleChangeAll.bind(this);
        this.handleChangeKids = this.handleChangeKids.bind(this);
        this.handleChangeTeens = this.handleChangeTeens.bind(this);
        this.handleChangeAdult = this.handleChangeAdult.bind(this);
        this.handleChangeFamily = this.handleChangeFamily.bind(this);      
      }


        handleChangeAll(event) {
          this.setState({ageGroup: event.target.value});
          this.setState({bgColorAll: "lightblue",
          bgColorKids: "#FF10F0",
          bgColorTeens: "#FF10F0",
          bgColorAdult: "#FF10F0",
          bgColorFamily: "#FF10F0"})
        }
        
        handleChangeKids(event) {
          this.setState({ageGroup: event.target.value});
          this.setState({bgColorAll: "#FF10F0",
          bgColorKids: "lightblue",
          bgColorTeens: "#FF10F0",
          bgColorAdult: "#FF10F0",
          bgColorFamily: "#FF10F0"});
        }
  
        handleChangeTeens(event) {
          this.setState({ageGroup: event.target.value});
          this.setState({bgColorAll: "#FF10F0",
          bgColorKids: "#FF10F0",
          bgColorTeens: "lightblue",
          bgColorAdult: "#FF10F0",
          bgColorFamily: "#FF10F0"});
        }
  
        handleChangeAdult(event) {
          this.setState({ageGroup: event.target.value});
          this.setState({bgColorAll: "#FF10F0",
          bgColorKids: "#FF10F0",
          bgColorTeens: "#FF10F0",
          bgColorAdult: "lightblue",
          bgColorFamily: "#FF10F0"});
        }

        handleChangeFamily(event) {
          this.setState({ageGroup: event.target.value});
          this.setState({bgColorAll: "#FF10F0",
          bgColorKids: "#FF10F0",
          bgColorTeens: "#FF10F0",
          bgColorAdult: "#FF10F0",
          bgColorFamily: "lightblue"});
        }


    render() {
        return (
            <div>
                <Nav/>
                <div class="button">
                <h1>What kind of game are you looking for?</h1>
                    <button class="btn btn--alpha" style={{backgroundColor: this.state.bgColorAll}} value="all" onClick={this.handleChangeAll}>All</button>
                    <button class="btn btn--alpha" style={{backgroundColor: this.state.bgColorKids}} value="kids" onClick={this.handleChangeKids}>Kids</button>
                    <button class="btn btn--alpha" style={{backgroundColor: this.state.bgColorTeens}} value="teens" onClick={this.handleChangeTeens}>Teens</button>
                    <button class="btn btn--alpha" style={{backgroundColor: this.state.bgColorAdult}} value="adult" onClick={this.handleChangeAdult}>Adult (18+)</button>
                    <button class="btn btn--alpha" style={{backgroundColor: this.state.bgColorFamily}} value="family" onClick={this.handleChangeFamily}>Family</button>

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


                    
                </div>
                <Footer/>
            </div>
        );
    }
}

export default withRouter(AgeGroupQuestion);

