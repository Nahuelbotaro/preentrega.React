import React, { useContext, useState } from 'react'
import { CartContext } from '../context/CartContext'
import { useForm } from 'react-hook-form';
import {collection, addDoc} from "firebase/firestore"
import {db} from '../Firebase/config'
import './carrito.css'

const Checkout = () => {

    const [pedidoId, setPedidoId] = useState("")

    const {carrito, precioTotal, vaciarCarrito} = useContext(CartContext)

    const {register, handleSubmit} = useForm();

 const comprar = (data) =>{
   const pedido = {
        cliente: data,
        productos: carrito,
        total: precioTotal()
   }
   console.log(pedido)

   const pedidosRef = collection(db, "pedidos")
   
   addDoc(pedidosRef, pedido)
    .then((doc) =>{
        setPedidoId(doc.id);
        vaciarCarrito();
    })

  }
  
    if(pedidoId){
        return (
            <div className='container-pedido'>
                <h1 className='Titulo-pedido'>Muchas gracias por tu compra</h1>
                <p className='numero-pedido'>Tu numero de pedido es: {pedidoId}</p>
            </div>
        )
    }

  return (
    <div className='contact-container'>
    <div className='contant'>
      <div className='formulario'>
        <h1>Finzalizar compra</h1>
        <form className='post' onSubmit={handleSubmit(comprar)}>
          <input type='text' placeholder='Ingrese su nombre' {...register("nombre")} />
          <input type='email' placeholder='Ingrese su E-mail'{...register("email")}  />
          <input type='phone' placeholder='Ingrese su numero de telefono' {...register("telefono")} />
          <textarea type='text' placeholder='Tu mensaje' {...register("texto")} />
          <button type='submit'>Comprar</button>
        
        </form>
      </div>
    </div>
  </div>
  )
}

export default Checkout