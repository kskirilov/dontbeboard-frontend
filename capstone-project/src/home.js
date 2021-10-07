import './home.css'
import Nav from './components/nav.js';

function Homepage() { 

    return (
        <div>
            <Nav/>
            <div class="button">
<button class="btn btn--alpha"><span>Take Game Quiz!</span></button>
<button class="btn btn--beta"><span>Browse</span></button>
</div>
</div>
        
        
    );
}

export default Homepage;

