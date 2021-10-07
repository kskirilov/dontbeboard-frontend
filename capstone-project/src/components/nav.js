import './nav.css'
import { Link } from "react-router-dom";

function Nav() { 
    return (
        <div class="navbar">
            <ul>
                <li><Link to="./">Home</Link></li>
                <li><Link to="./games">Games</Link></li>
                <li><Link to="./about">About</Link></li>
            </ul>
        </div>
    )
}

export default Nav;