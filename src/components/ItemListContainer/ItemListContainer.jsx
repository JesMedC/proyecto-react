import React, { useState, useEffect, useContext } from 'react';
import { useParams, Link } from 'react-router-dom'; // Asegúrate de importar Link
import { CartContext } from '../CartContext/CartContext';
import "./ItemListContainer.css";

const ItemListContainer = () => {
  const { categoryId } = useParams();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      // Simulación de API con imágenes
      const response = await new Promise((resolve) =>
        setTimeout(() =>
          resolve([
            {
              id: 1,
              name: 'Teclado Razer',
              category: 'tecnologia',
              price: 100000,
              stock: 15,
              image: '../../asset/images/teclado.jpg',
            },
            {
              id: 2,
              name: 'Camisa Polo',
              category: 'ropa',
              price: 50000,
              stock: 10,
              image: '../../asset/images/camisa.jpg',
            },
            {
              id: 3,
              name: 'Monitor LG',
              category: 'tecnologia',
              price: 150000,
              stock: 20,
              image: '../../asset/images/monitor.jpg',
            },
          ]), 1000)
      );

      const formattedProducts = response.map(p => ({ ...p, id: Number(p.id) }));
      const filteredProducts = categoryId
        ? formattedProducts.filter((p) => p.category === categoryId)
        : formattedProducts;

      setProducts(filteredProducts);
      setLoading(false);
    };

    fetchData();
  }, [categoryId]);

  const handleAddToCart = (product, quantity) => {
    if (quantity > 0 && quantity <= product.stock) {
      addToCart(product, quantity); // Añade el producto con la cantidad especificada
    } else {
      alert('Cantidad de productos no disponible. intente con una cantidad menor o igual al stock disponible.');
    }
  };

  if (loading) {
    return <p>Cargando productos...</p>;
  }

  return (
    <div className="item-list-container">
      <h2>Productos</h2>
      <div className="item-list">
        {products.map((product) => (
          <div key={product.id} className="item">
            <img src={product.image} alt={product.name} />
            <div className="details">
              <div className="name">{product.name}</div>
              <div className="price">${product.price}</div>
              <div className="quantity">
                <input
                  id={`quantity-${product.id}`}
                  type="number"
                  min="1"
                  max={product.stock}
                  defaultValue="1"
                />
              </div>
              <div>
                <button onClick={() => handleAddToCart( product, parseInt(document.querySelector(`#quantity-${product.id}`).value))}>     
                  Agregar al carrito
                  </button>
                  <Link to={`/product/${product.id}`}>
                    <button>Ver Detalle</button>
                  </Link>
              </div>

            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ItemListContainer;
