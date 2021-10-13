import React, { useState } from 'react'
import './card.css'
import { Link } from 'react-router-dom'
import { withRouter } from 'react-router'

function Card(props) {

    return (
        <div className="card flip-card" styles="width: 18rem;">
            <div className="flip-card-inner">
                <div className="card-body flip-card-front">
                    <div className="centerText">
                        <img class="card-img-top" src={props.image} />
                        <p class="game-name">{props.name}</p>
                        <div class="game-properties">
                            <p class="player-number">{props.minPlayers}-{props.maxPlayers} players</p>
                            <p class="game-time">{props.time} minutes</p>
                            <p class="game-type">{props.gameType}</p>
                            <p class="game-mood">{props.mood}</p>
                            <p class="age-group">{props.ageGroup}</p>
                        </div>
                    </div>
                </div>
                <div className="card-body flip-card-back">
                    <p>Release date: {props.releaseDate}</p>
                    <p>Description: {props.description}</p>
                    <Link to={{
                        pathname: '/single-game',
                        state: {name: props.name,
                                image: props.image,
                                minPlayers: props.minPlayers,
                                maxPlayers: props.maxPlayers,
                                time: props.time,
                                gameType: props.gameType,
                                mood: props.mood,
                                ageGroup: props.ageGroup,
                                releaseDate: props.releaseDate,
                                description: props.description,
                                rules: props.rules
                        }
                    }}> 
                    <button class="btn btn--alpha"><span>See more information</span></button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default withRouter(Card)