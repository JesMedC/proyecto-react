import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Item.css';

const Item = ({ product, onAddToCart }) => {
  const [quantity, setQuantity] = useState(1);
  const [errorMessage, setErrorMessage] = useState("");

  const handleQuantityChange = (e) => {
    const newQuantity = Number(e.target.value);

    if (newQuantity > product.stock) {
      setErrorMessage(`Solo quedan ${product.stock} unidades disponibles.`);
    } else {
      setErrorMessage("");
      setQuantity(newQuantity);
    }
  };

  const handleAddToCart = () => {
    if (quantity > 0 && quantity <= product.stock) {
      onAddToCart(product, quantity);
    } else {
      setErrorMessage(`La cantidad debe ser entre 1 y ${product.stock}.`);
    }
  };

  return (
    <div className="item">
      <h4>{product.name}</h4>
      <p>Precio: ${product.price}</p>
      <p>Stock disponible: {product.stock} unidades</p>

      <div>
        <label>Cantidad:</label>
        <input
          type="number"
          min="1"
          max={product.stock}
          value={quantity}
          onChange={handleQuantityChange}
        />
      </div>

      {errorMessage && <p className="error-message">{errorMessage}</p>}

      <button onClick={handleAddToCart}>Agregar al carrito</button>
      <Link to={`/product/${product.id}`}>Ver detalles</Link>
    </div>
  );
};

export default Item;
