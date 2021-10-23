import Nav from './components/nav';
import './games.css'
import { useState } from 'react';

import GamesContainer from './containers/gamesContainer';
import Footer from './components/footer';

function Games() {

    return (
        <div>
            <Nav />
            
            <div>
                <GamesContainer />
            </div>
            <Footer />
        </div>
    );
}

export default Games;

