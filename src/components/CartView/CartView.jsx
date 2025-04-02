import React, { useContext } from 'react';
import { CartContext } from '../CartContext/CartContext';
import './CartView.css';

const CartView = () => {
  const { cart, removeFromCart, updateCartQuantity } = useContext(CartContext);

  const handleQuantityChange = (productId, newQuantity) => {
    // Encuentra el producto en el carrito
    const product = cart.find(item => item.product.id === productId);

    // Si no hay producto o el stock no es suficiente, retorna
    if (!product || newQuantity <= 0 || newQuantity > product.product.stock) {
      alert(`Solo quedan ${product.product.stock} unidades disponibles.`);
      return;
    }

    updateCartQuantity(productId, Number(newQuantity));
  };

  const total = cart.reduce((acc, item) => acc + item.product.price * item.quantity, 0);

  return (
    <div className="cart-view">
      <h2>Mi Carrito</h2>
      {cart.length === 0 ? (
        <p>El carrito está vacío</p>
      ) : (
        <ul>
          {cart.map(item => (
            <li key={item.product.id}>
              <span>{item.product.name}</span> - 
              <input
                type="number"
                min="1"
                value={item.quantity}
                onChange={(e) => handleQuantityChange(item.product.id, e.target.value)}
              />
              x ${item.product.price} = ${item.product.price * item.quantity}
              <button onClick={() => removeFromCart(item.product.id)}>Eliminar</button>
            </li>
          ))}
        </ul>
      )}
      <h3>Total: ${total}</h3>
    </div>
  );
};

export default CartView;
