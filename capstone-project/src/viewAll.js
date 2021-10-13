import Nav from './components/nav';
import Footer from './components/footer';
import './viewAll.css'
import Card from './components/card';
import ViewAllContainer from './containers/viewAllContainer';

function ViewAll() {
    return (
        <div>  
        <Nav />
        <h1 id="game-name">All Games</h1>
            <div class="cards">
                <ViewAllContainer />
            </div>
            <Footer />
        </div>
    );
}

export default ViewAll;