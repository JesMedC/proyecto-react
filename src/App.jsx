
import './App.css';
import Navbar from './components/Navbar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

function App() {

  return (
    <>
      <Navbar />
      <ItemListContainer welcomeMessage="Bienvenido a nuestra tienda online!" /> {/* Pasamos el mensaje */}
    </>
  );
};

export default App;
