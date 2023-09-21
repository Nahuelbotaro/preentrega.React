import {useContext, useState } from 'react';
import ItemCount from './ItemCount';
import './product.css'
import { CartContext } from '../context/CartContext';

const ItemDetail = ({ product }) => {

  const {carrito, agregarAlCarrito} = useContext (CartContext)

 
 
  const [cantidad, setCantidad] = useState(1);

  const handleRestar = () =>{
      cantidad > 1 && setCantidad(cantidad - 1)
  }
  const handleSumar = () =>{
      cantidad < product.stock && setCantidad(cantidad +1) 
  }


  if (!product) {
    return <p>No se ha proporcionado un producto válido.</p>;
  }

  return (
    <div className="producto-detail">
      <div className="container">
        <div className='productbox'>
          <div className='product-box'>
            <div className='img-box'>
              <img src={product.Img} alt={product.titulo}></img>
            </div>
            <div className='detail'>
              <h4>{product.Cat}</h4>
              <h2>{product.titulo}</h2>
              <h3>{product.precio}</h3>
              <ItemCount 
              cantidad={cantidad}
               handleRestar={handleRestar}
                handleSumar={handleSumar}
                 handleAgregar={() =>{ agregarAlCarrito (product,cantidad)}}/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;