import Nav from '../components/nav';
import './games.css'
import { useState } from 'react';
import GamesContainer from './gamesContainer';
// import footer from '../components/footer';

function Games() {

    return (
        <div>
            <Nav />
            
            <div>
                <GamesContainer />
            </div>
            <footer />
        </div>
    );
}

export default Games;

