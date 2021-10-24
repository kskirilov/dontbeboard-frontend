import './nav.css'
import { Link } from "react-router-dom";

function Nav() { 
    return (
        <div class="navbar">
            <ul>
                <li><Link to="/view-all">♞ DontBeBoard.</Link></li>
                <li><Link to="/">New Search</Link></li>
                <li><Link to="/view-all">View All</Link></li>
                <li><Link to="/add-game">Suggest A Game</Link></li>
            </ul>
        </div>
    )
}


export default Nav;