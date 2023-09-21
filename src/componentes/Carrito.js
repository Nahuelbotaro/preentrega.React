import React, { useContext } from 'react'
import { CartContext } from '../context/CartContext'
import { Link } from 'react-router-dom'
import './carrito.css'

const Carrito = () => {
    
    const {carrito, precioTotal, vaciarCarrito} = useContext(CartContext)

    const handlVaciar= () =>{
        vaciarCarrito()
    }

  return (
    <div className='cart-container'>
        <h1 className='titulo'>Carrito</h1>
        {
            carrito.map((prod) =>(
                <div className='cart-item' key={prod.id}>
                     <h2 className='titulo-producto'>{prod.titulo}</h2>
                     <p>Precio unit: {prod.precio}</p>
                     <p>Precio total: {prod.precio * prod.cantidad}</p>  
                     <p className='titulo-cantidad'>Cant :{prod.cantidad}</p>
                     <br/>
                </div>
              
            ))
        }

        {
            carrito.length > 0 ?
            <>
                <h2 className='precio-total'>Precio Total: ${precioTotal()} </h2>
                <button className='boton-vaciar' onClick={handlVaciar}>Vaciar</button>
                <Link className='checkout' to="/checkout"> Finalizar compra</Link>
            </> :
            <h2 className='carrito vacio'>El carrito esta vacio</h2>
        }
        
       


    </div>
  )
}

export default Carrito