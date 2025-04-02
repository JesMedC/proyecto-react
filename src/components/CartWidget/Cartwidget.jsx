import React, { useContext } from 'react';
import { CartContext } from '../CartContext/CartContext';
import './CartWidget.css';

const CartWidget = () => {
  const { cart } = useContext(CartContext);

  // Calcular la cantidad total de productos sumando las cantidades de cada uno
  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);

  // Si no hay productos en el carrito, no renderizamos el número
  if (totalItems === 0) {
    return (
      <div className="cart-widget">
        <i className="fas fa-shopping-cart"></i>
      </div>
    );
  }

  return (
    <div className="cart-widget">
      <i className="fas fa-shopping-cart"></i>
      <span>{totalItems}</span> {/* Mostrar la cantidad total de productos en el carrito */}
    </div>
  );
};

export default CartWidget;
