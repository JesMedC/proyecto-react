import "./ItemListContainer.css"


const ItemListContainer = (props) => {
  return (
    <div className="item-list-container">
      <h2>{props.welcomeMessage}</h2> {/* Recibimos el mensaje de bienvenida */}

    </div>
  );
};

export default ItemListContainer;
