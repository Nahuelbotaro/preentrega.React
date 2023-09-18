import React from 'react'

const ItemDetail = ({ product }) => {
    if (!product) {
      return <p>No se ha proporcionado un producto válido.</p>;
    }
  
    return (
      <div>
        <h2>{product.nombre}</h2>
        <p>{product.descripcion}</p>
        <p>Precio:{product.precio}</p>
      </div>
    );
  };
  
  export default ItemDetail;