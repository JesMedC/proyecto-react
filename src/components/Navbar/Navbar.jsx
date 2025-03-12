import './Navbar.css';
import CartWidget from '../CartWidget/Cartwidget';

function Navbar() {
    return (
        <header>
            <nav className='nav-bar'>
                <img src="../../assets/Logo.png" alt="Logo" className="nav-bar-logo" /> 
                <ul className='nav-bar-items'>
                    <li>Inicio</li>
                    <li>Productos</li>
                    <li>Contacto</li>
                </ul>
                <CartWidget /> {/* Renderizamos el widget del carrito */}

            </nav>
        </header>
    );
};

export default Navbar;