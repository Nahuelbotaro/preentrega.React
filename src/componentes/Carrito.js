import React, { useContext } from 'react'
import { CartContext } from '../context/CartContext'

const Carrito = () => {
    
    const {carrito, precioTotal, vaciarCarrito} = useContext(CartContext)

    const handlVaciar= () =>{
        vaciarCarrito()
    }

  return (
    <div className='container'>
        <h1 className='titulo'>Carrito</h1>
        {
            carrito.map((prod) =>(
                <div className='productos-carrito' key={prod.id}>
                     <h2>{prod.titulo}</h2>
                     <p>Precio unit: {prod.precio}</p>
                     <p>Precio total: {prod.precio * prod.cantidad}</p>  
                     <p>Cant :{prod.cantidad}</p>
                     <br/>
                </div>
              
            ))
        }

        {
            carrito.length > 0 ?
            <>
                <h2>Precio Total: ${precioTotal()} </h2>
                <button onClick={handlVaciar}>Vaciar</button> 
            </> :
            <h2>El carrito esta vacio</h2>
        }
        
       


    </div>
  )
}

export default Carrito