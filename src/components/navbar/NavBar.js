import { Link } from 'react-router-dom';

import './NavBar.css';
import CardWidget from '../cardwidget/CardWidget.js'

const NavBar = () => {

    return(
        <header>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/productos">Productos</Link> </li>
                <li><Link to="/nosotros">Nosotros</Link></li>
                <div>
                    <CardWidget/>
                    <span>3</span>
                </div>
            </ul>
        </header>
    )
}

export default NavBar




