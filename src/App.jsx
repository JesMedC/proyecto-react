import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Home from './components/Home/Home';
import Contact from './components/Contact/Contact'; // Importa el componente Contacto
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from './components/CartContext/CartContext'; // Importa el CartProvider
import CartView from "./components/CartView/CartView"; // Importa la vista del carrito

function App() {
  return (
    <CartProvider> {/* Envuelve tu aplicación con el CartProvider */}
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} /> {/* Ruta de inicio */}
          <Route path="/product" element={<ItemListContainer />} /> {/* Ruta de productos */}
          <Route path="/product/:productId" element={<ItemDetailContainer />} /> {/* Ruta de detalle de producto */}
          <Route path="/contacto" element={<Contact />} /> {/* Ruta de contacto */}
          <Route path="/carrito" element={<CartView />} /> {/* Nueva ruta del carrito */}
        </Routes>
      </Router>
    </CartProvider>
  );
}

export default App;
