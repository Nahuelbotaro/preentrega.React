import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../context/CartContext'

const CartWidget = () => {
  
  const { cantidadEnCarrito } = useContext(CartContext);

return (
  <div>
    <Link to='/carrito' className='link'>Carrito</Link>
    <span className='numero'> {cantidadEnCarrito ()} </span>
  </div>
);
}

export default CartWidget