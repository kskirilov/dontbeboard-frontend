import Nav from './components/nav';
import './games.css'
import { useState } from 'react';

import GamesContainer from './containers/gamesContainer';
import Footer from './components/footer';

function Games() {

    return (
        <div>
            <Nav />
            <h1 id="games-found">Games Found</h1>
            <div class="games-cards">
                <GamesContainer />
            </div>
            <Footer />
        </div>
    );
}

export default Games;