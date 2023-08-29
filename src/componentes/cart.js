import React from 'react'
import {AiOutlineClose} from 'react-icons/ai';
import { Link } from 'react-router-dom';
import './cart.css'

const Cart = ({cart, setCart}) => {
  return (
    <>
        <div className='cart-container'>
            {cart.length === 0 && 
            <div className='carrito-vacio'>
                <h2 className='vacio'>El carrito esta vacio</h2>
                <Link to='/productos' className='boton-carrito'>Comprar Ahora</Link>
            </div>
            
            }
           <div className='contant'>
            {
                cart.map((curlElm)=>
                {
                    return(
                        <div className='cart-item' key={curlElm.id}>
                            <div className='img-box'>
                                <img src={curlElm.Img} alt={curlElm.titulo}></img>
                            </div>
                            <div className='detail'>
                                <h4>{curlElm.Cat}</h4>
                                <h3>{curlElm.titulo}</h3>
                                <p>{curlElm.precio}</p>
                                <button><AiOutlineClose/></button>
                            </div>
                        </div>
                    )
                })
            }
            
           </div>
        </div>
    </>
  )
}

export default Cart