import React from 'react'
import { FaTruckMoving } from 'react-icons/fa';
import { AiOutlineHeart } from 'react-icons/ai';
import {AiOutlineUser } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import CartWidget from './CartWidget/CartWidget';
import './nav.css'
const Nav = () => {
  return (
    <>
    <div className='free'>
        
            <div className='icono'>
            <FaTruckMoving />
            </div> 
            <p>Envios gratis a partir de $10000 </p> 
    </div>
    <div className='main-header'>
        <div className='container'>
            <div className='logo'>
                <img className='imagen-logo' src='./img/logo.svg.png' alt='logo'></img>
            </div>
            <div className='search-box'>
                <input type='text' value='' placeholder='Buscar productos...'></input>
                <button>Buscar</button>
            </div>
            <div className='icono'>
                <div className='cuenta'>
                    <div className='usuario-icono'>
                        <AiOutlineUser />
                    </div>
                    <p>Hola usuario</p>
                </div>
                <div className='segundo-icono'>
                    <Link to="/" className='link'><AiOutlineHeart /></Link>
                </div>
            </div>
        </div>

    </div>
    <div className='header'>
        <div className='container'>
            <div className='nav'>
                <ul>
                <li>
                    <Link to='/'className='link'>Inicio</Link>
                </li>
                <li>
                    <Link to='/productos'className='link'>Nuestros Productos</Link>
                </li>
                <li>
                    <Link to='/galeria'className='link'>Galeria</Link>
                </li>
                <li>
                    <Link to='/contacto'className='link'>Contactanos</Link>
                </li>
               </ul>
            </div>
            <CartWidget/>
        
        </div>
    
    </div>
      
    </>
  )
}

export default Nav