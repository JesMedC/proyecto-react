import React from 'react';
import { Link } from 'react-router-dom'; // Importamos Link para la navegación
import './Home.css'; // Importa los nuevos estilos

// Asegúrate de colocar la imagen en la carpeta correcta
import logoImage from '../../assets/logo.png'; // Cambia la ruta a tu archivo de imagen

const Home = () => {
  return (
    <div className="home-container">
      <h2 className="home-header">Bienvenidos a nuestra tienda</h2>
      <p className="home-description">Estamos encantados de tenerte aquí. Explora nuestros productos y disfruta de una experiencia de compra única.</p>

      <div className="home-image">
        <img src={logoImage} alt="Bienvenidos" />
      </div>

      {/* Link de redirección al componente de productos */}
      <Link to="/product">
        <button className="home-button">Empezar a explorar</button>
      </Link>
    </div>
  );
};

export default Home;
