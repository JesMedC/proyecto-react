import React, { useState, useEffect, useContext } from 'react';
import { useParams, Link } from 'react-router-dom'; // Para acceder a los parámetros de la URL
import { CartContext } from '../CartContext/CartContext';
import "./ItemDetailContainer.css";

const ItemDetailContainer = () => {
  const { productId } = useParams(); // Obtén el ID del producto desde la URL
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    const fetchProductDetails = async () => {
      setLoading(true);
      // Simulación de la API con más detalles
      const response = await new Promise((resolve) =>
        setTimeout(() =>
          resolve([
            {
              id: 1,
              name: 'Teclado Razer',
              category: 'Tecnología',
              price: 100000,
              stock: 15,
              description: 'Teclado mecánico con retroiluminación RGB. Ideal para gamers.',
              brand: 'Razer',
              color: 'Negro',
              weight: '1.5kg',
              image: '../../asset/images/teclado.jpg',
            },
            {
              id: 2,
              name: 'Camisa Polo',
              category: 'Ropa',
              price: 50000,
              stock: 10,
              description: 'Camisa de algodón de alta calidad. Perfecta para el verano.',
              brand: 'Polo',
              color: 'Azul',
              weight: '0.3kg',
              image: '../../asset/images/camisa.jpg',
            },
            {
              id: 3,
              name: 'Monitor LG',
              category: 'Tecnología',
              price: 150000,
              stock: 20,
              description: 'Monitor Full HD de 24 pulgadas. Perfecto para trabajo y entretenimiento.',
              brand: 'LG',
              color: 'Negro',
              weight: '4.5kg',
              image: '../../asset/images/monitor.jpg',
            },
          ]), 1000)
      );

      const selectedProduct = response.find(p => p.id === parseInt(productId)); // Filtra por el id del producto
      setProduct(selectedProduct);
      setLoading(false);
    };

    fetchProductDetails();
  }, [productId]);

  const handleAddToCart = (product, quantity) => {
    if (quantity > 0 && quantity <= product.stock) {
      addToCart(product, quantity);
    } else {
      alert('Cantidad no disponible.');
    }
  };

  if (loading) {
    return <p>Cargando detalles del producto...</p>;
  }

  if (!product) {
    return <p>Producto no encontrado.</p>;
  }

  return (
    <div className="item-detail-container">
      <h2>Detalles del Producto</h2>
      <div className="product-detail">
        <img src={product.image} alt={product.name} />
        <div className="details">
          <div className="name">{product.name}</div>
          <div className="category">Categoría: {product.category}</div>
          <div className="price">Precio: ${product.price}</div>
          <div className="description">Descripción: {product.description}</div>
          <div className="brand">Marca: {product.brand}</div>
          <div className="color">Color: {product.color}</div>
          <div className="weight">Peso: {product.weight}</div>
          <div className="stock">Stock disponible: {product.stock}</div>
          <div className="quantity">
            <input
              id={`quantity-${product.id}`}
              type="number"
              min="1"
              max={product.stock}
              defaultValue="1"
            />
          </div>
          <button onClick={() => handleAddToCart(product, parseInt(document.querySelector(`#quantity-${product.id}`).value))}>
              Agregar al carrito
            </button>
          <Link to="/">
            <button>Volver a la tienda</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ItemDetailContainer;
