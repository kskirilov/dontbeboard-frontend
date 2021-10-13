import Nav from './components/nav';
import './games.css'
import Card from './components/card';
import ViewAllContainer from './containers/viewAllContainer';

function ViewAll() {
    return (
        <div>
        <Nav />
            <div class="cards">
                <ViewAllContainer />
            </div>
        </div>
    );
}

export default ViewAll;