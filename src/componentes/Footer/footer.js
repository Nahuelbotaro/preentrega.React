import React from 'react'
import { BsFacebook} from 'react-icons/bs';
import {BsInstagram } from 'react-icons/bs';
import {BsWhatsapp} from 'react-icons/bs';
import {FaPinterestP} from 'react-icons/fa';
import './/footer.css'

const Footer = () => {
  return (
    <>
    <div className='footer'>
        <div className='container'>
            <div className='about'>
                <div className='logo'>
                    <img src='./img/logo.svg.png' alt='logo'></img>
                </div>
                <div className='detail'>
                    <p>Somos una pequeña empresa conformada por un gran equipo de pasteleros y confiteros</p>
                    <div className='icono'>
                        <li><BsFacebook/></li>
                        <li><BsInstagram/></li>
                        <li><BsWhatsapp/></li>
                        <li><FaPinterestP/></li>
                    </div>
                </div>
            </div>
            <div className='cuenta'>
                <h3> Mi Cuenta</h3>
                <ul>
                    <li>Cuenta</li>
                    <li>Pedidos</li>
                    <li>Carrito</li>
                    <li>Envios</li>
                    <li>Volver</li>
                </ul>
            </div>
            <div className='pagina'>
                <h3>Paginas</h3>
                <ul>
                    <li>Inicio</li>
                    <li>About</li>
                    <li>Contacto</li>
                    <li>Terminos y condiciones</li>
                </ul>
            </div>
        </div>
    </div>
    </>
  )
}

export default Footer