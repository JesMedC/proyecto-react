import './Navbar.css';

function Navbar() {
    return (
        <header>
            <nav className='nav-bar'>
                <p>logo</p>
                <ul className='nav-bar-items'>
                    <li>Inicio</li>
                    <li>Productos</li>
                    <li>Contacto</li>
                </ul>
                <p>carrito (3)</p>

            </nav>
        </header>
    );
};

export default Navbar;