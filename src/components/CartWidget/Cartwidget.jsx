import './CartWidget.css'


const CartWidget = () => {
    const itemsInCart = 5; // Número de artículos en el carrito, puedes cambiarlo dinámicamente
  
    return (
      <div className="cart-widget">
        <i className="fas fa-shopping-cart"></i> {/* Aquí usamos el ícono de Font Awesome */}
        {itemsInCart > 0 && <span>{itemsInCart}</span>} {/* Muestra el número de artículos si es mayor a 0 */}
      </div>
    );
  };
  
  export default CartWidget;
