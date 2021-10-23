import './home.css'
import Nav from './components/nav.js';
import Footer from './components/footer.js';
import { Link } from 'react-router-dom';

function Homepage() { 

    return (
        <div>
            <Nav/>
            <div class="button">
            <h1>How many are playing today?</h1>
                <button class="btn btn--alpha"><span>30 minutes</span></button>
                <button class="btn btn--alpha" id="secondButton"><span>Continue</span></button>
                <p id="skip">Skip question</p>

            </div>
<Footer/>
</div>
        
        
    );
}

export default Homepage;

