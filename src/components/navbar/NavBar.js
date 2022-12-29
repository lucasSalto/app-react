import './NavBar.css';
import CardWidget from '../cardwidget/CardWidget.js'

const NavBar = () => {

    return(
        <header>
            <ul>
                <li><a href="/#">Home</a></li>
                <li><a href="/#">Bicicletas</a></li>
                <li><a href="/#">Ubicacion</a></li>
                <li><a href="/#">Contactos</a></li>
                <div>
                <CardWidget></CardWidget>
                <span>3</span>
                </div>
            </ul>
        </header>
    )
}

export default NavBar




