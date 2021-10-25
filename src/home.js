import './home.css'
import Nav from './components/nav.js';
import Footer from './components/footer.js';
import { Link } from 'react-router-dom';

function Homepage() { 

    return (
        <div>
            <Nav/>
            <div class="button">
<button class="btn btn--alpha"><span>Take Game Quiz!</span></button>
<button class="btn btn--beta"><span>Browse</span></button>


</div>
<Footer/>
</div>
        
        
    );
}

export default Homepage;

