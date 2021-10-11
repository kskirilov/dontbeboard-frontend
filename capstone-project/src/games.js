import Nav from './components/nav';
import './games.css'
import Card from './components/card';
import GamesContainer from './containers/gamesContainer';

function Games() {
    return (
        <div>
        <Nav />
                <div class="cards">
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <GamesContainer />
                </div>
        </div>
    );
}

export default Games;