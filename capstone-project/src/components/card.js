import React, { useState } from 'react'
import './card.css'

function Card(props) {

    return (
        <div className="card flip-card" styles="width: 18rem;">
            <div className="flip-card-inner">
                <div className="card-body flip-card-front">
                    {/* <img src={props.imageSrc} className="card-img-top" alt="..." /> */}
                    <div className="centerText">
                        <p>Game name: {props.name}</p>
                    </div>
                </div>
                <div className="card-body flip-card-back">
                    <p>Number of players: {props.minPlayers}-{props.maxPlayers}</p>
                    <p>Time to play: {props.time}</p>
                    <p>Type of game: {props.gameType}</p>
                    <p>Mood: {props.mood}</p>
                    <p>Age group: {props.ageGroup}</p>
                </div>
            </div>
        </div>
    )
}

export default Card