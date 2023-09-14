import React from 'react'
import { Link } from 'react-router-dom'
import { BsArrowRight } from 'react-icons/bs';
import { BsTruck } from 'react-icons/bs';
import { BsCurrencyDollar } from 'react-icons/bs';
import { AiOutlinePercentage } from 'react-icons/ai';
import { BsHeadset } from 'react-icons/bs';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { AiOutlineEye } from 'react-icons/ai';
import { AiOutlineHeart } from 'react-icons/ai';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import { AiOutlineArrowRight } from 'react-icons/ai';

import HomeProducto from './homeproducto';
import './home.css'

const Home = ({ detail, close, setClose }) => {
    return (
        <>
            {
                close ?
                    <div className='producto-detail'>
                        <div className='container'>
                            <button onClick={() => setClose(false)} className='closebtn'><AiOutlineCloseCircle /></button>
                            {
                                detail.map((curElm) => {
                                    return (
                                        <div className='product-box'>
                                            <div className='img-box'>
                                                <img src={curElm.Img} alt={curElm.titulo}></img>
                                            </div>
                                            <div className='detail'>
                                                <h4>{curElm.Cat}</h4>
                                                <h2>{curElm.titulo}</h2>
                                                <h3>{curElm.precio}</h3>
                                               
                                            </div>
                                        </div>
                                    )
                                })

                            }

                        </div>
                    </div> : null
            }
            <div className='top_banner'>
                <div className='container'>
                    <div className='detail'>
                        <h2>Nuestros mejores productos</h2>
                        <Link to='/productos' className='link'> Comprar Ahora <BsArrowRight /></Link>
                    </div>
                </div>
            </div>
            <div className='producto-type'>
                <div className='container'>
                    <div className='box'>
                        <div className='img-box'>
                            <img src='./img/Alfajore-maicena.jpeg' alt='alfajor'></img>
                        </div>
                        <div className='detail'>
                            <p>En Stock</p>
                        </div>
                    </div>
                    <div className='box'>
                        <div className='img-box'>
                            <img src='./img/muffinss.jpeg' alt='muffins'></img>
                        </div>
                        <div className='detail'>
                            <p>En Stock</p>
                        </div>
                    </div>
                    <div className='box'>
                        <div className='img-box'>
                            <img src='./img/Tarta-frutilla.jpeg' alt='tarta'></img>
                        </div>
                        <div className='detail'>
                            <p>20 productos</p>
                        </div>
                    </div>
                    <div className='box'>
                        <div className='img-box'>
                            <img src='./img/torta.jpeg' alt='torta'></img>
                        </div>
                        <div className='detail'>
                            <p>15 productos</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='about'>
                <div className='container'>
                    <div className='box'>
                        <div className='icon'>
                            <BsTruck />
                        </div>
                        <div className='detail'>
                            <h3>Envios Gratis</h3>
                            <p>A partir de $5000</p>
                        </div>
                    </div>
                    <div className='box'>
                        <div className='icon'>
                            <BsCurrencyDollar />
                        </div>
                        <div className='detail'>
                            <h3>Reembolso</h3>
                            <p>Devolucion total del dinero</p>
                        </div>
                    </div>
                    <div className='box'>
                        <div className='icon'>
                            < AiOutlinePercentage />
                        </div>
                        <div className='detail'>
                            <h3>Descuento para miembros </h3>
                            <p> Para cada compra realizada</p>
                        </div>
                    </div>
                    <div className='box'>
                        <div className='icon'>
                            <BsHeadset />
                        </div>
                        <div className='detail'>
                            <h3>Atencion al cliente</h3>
                            <p> De lun a Sab en el horario de 09:00hs - 18:00hs</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='producto'>
                <div className='container'>
                    {
                        HomeProducto.map((curElm) => {
                            return (
                                <div className='box' key={curElm.id}>
                                    <div className='img-box'>
                                        <img className='img' src={curElm.Img} alt={curElm.titulo}></img>
                                        <div className='icono'>
                                            <li><AiOutlineShoppingCart /></li>
                                            <li><AiOutlineEye /></li>
                                            <li><AiOutlineHeart /></li>
                                        </div>
                                    </div>
                                    <div className='detail'>
                                        <p>{curElm.Cat}</p>
                                        <h3>{curElm.titulo}</h3>
                                        <h4>{curElm.precio}</h4>
                                    </div>
                                </div>
                            )
                        })

                    }
                </div>
            </div>
            <div className='banner'>
                <div className='container'>
                    <div className='detail'>
                        <h4>TAMBIEN PODES ARMAR TU DESAYUNO O MERIENDA COMO MAS TE GUSTE</h4>
                        <h3>Reservalo con anticipacion!</h3>
                        <Link to='/producto' className='link'>Reservar Ahora < AiOutlineArrowRight /></Link>
                    </div>
                    <div className='img-box'>
                        <img src='./img/desayuno1.jpeg' alt='desayuno'></img>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home