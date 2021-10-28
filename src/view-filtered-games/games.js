import Nav from '../components/nav';
import './games.css'
import { useState } from 'react';
import GamesContainer from './gamesContainer';
import Footer from '../components/footer';

function Games() {

    return (
        <>
            <Nav />
            
            <div>
                <GamesContainer />
            </div>

            <Footer />
        </>
    );
}

export default Games;

