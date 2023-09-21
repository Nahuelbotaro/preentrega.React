import React, { useState } from 'react'
import { FaTruckMoving } from 'react-icons/fa';
import { AiOutlineHeart } from 'react-icons/ai';
import { BsBagCheck } from 'react-icons/bs';
import { AiOutlineUser } from 'react-icons/ai';
import { CiLogin } from 'react-icons/ci';
import { CiLogout } from 'react-icons/ci';

import { Link } from 'react-router-dom';
import './nav.css'
import CartWidget from './CartWidget';
const Nav = ({ searchbtn }) => {
    const [search, setSearch] = useState('')
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
                        <input type='text' value={search} placeholder='Buscar productos...' autoComplete='off' onChange={(e) => setSearch(e.target.value)}></input>
                        <button onClick={() => searchbtn(search)}>Buscar</button>
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
                            <Link to="/cart" className='link'><BsBagCheck /></Link>
                        </div>
                    </div>
                </div>

            </div>
            <div className='header'>
                <div className='container'>
                    <div className='nav'>
                        <ul>
                            <li>
                                <Link to='/' className='link'>Inicio</Link>
                            </li>
                            <li>
                                <Link to='/productos' className='link'>Nuestros Productos</Link>
                            </li>

                            <li>
                                <Link to='/productos/alfajores' className='link'>Alfajores</Link>
                            </li>
                            <li>
                                <Link to='/productos/cafe' className='link'>Cafe</Link>
                            </li>
                            <li>
                                <Link to='/productos/Cookies' className='link'>Cookies</Link>
                            </li>
                            <li>
                                <Link to='/productos/cupcakes' className='link'>Cupcakes</Link>
                            </li>
                            <li>
                                <Link to='/productos/tartas' className='link'>Tartas</Link>
                            </li>
                            <li>
                                <Link to='/productos/tortas' className='link'>Tortas</Link>
                            </li>


                            <li>
                                <CartWidget />
                            </li>
                            <li>
                                <Link to='/contacto' className='link'>Contactanos</Link>
                            </li>

                        </ul>
                    </div>
                    <div className='auth'>
                        <button><CiLogin /> </button>
                        <button><CiLogout /> </button>
                    </div>


                </div>

            </div>

        </>
    )
}

export default Nav