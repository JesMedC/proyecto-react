import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../CartContext/CartContext'; // Importamos el contexto
import CartWidget from '../CartWidget/CartWidget';
import './Navbar.css';

function Navbar() {
  const [showCart, setShowCart] = useState(false);

  const { cart } = useContext(CartContext); // Accedemos al contexto del carrito

  // Calcular el total de productos sumando las cantidades de los productos
  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);

  const toggleCart = () => {
    setShowCart(!showCart);
  };

  return (
    <header>
      <nav className="nav-bar">
        <Link to="/">
          <img src="../../assets/logo.png" alt="Logo" className="nav-bar-logo" />
        </Link>

        <ul className="nav-bar-items">
          <li>
            <Link to="/">Inicio</Link>
          </li>
          <li>
            <Link to="/product">Productos</Link>
          </li>
          <li>
            <Link to="/contacto">Contacto</Link>
          </li>
        </ul>

        <div className="cart-widget-container">
          <Link to="/carrito">
            <CartWidget />

          </Link>
        </div>
      </nav>

      {/* Condicional para mostrar el carrito */}
      <div className={`cart-modal ${showCart ? 'show' : ''}`}>
        {/* Aquí iría el componente CartView si es necesario */}
      </div>
    </header>
  );
}

export default Navbar;
