import React from 'react'
import { AiOutlineEye } from 'react-icons/ai';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { AiOutlineHeart } from 'react-icons/ai';
import './product.css'
import { Link } from 'react-router-dom';

const Item = ({ product }) => {




    return (
        <>

            <div className='productos'>

                <div className='container'>
                    <div className='productbox'>
                        <div className='contant'>
                            <div className='box' key={product.id}>
                                <div className='img-box'>
                                    <img className='img' src={product.Img} alt={product.titulo}></img>
                                    <div className='icono'>
                                        <li onClick={() => (product)}><AiOutlineShoppingCart /></li>
                                        <li onClick={() => (product)}><AiOutlineEye /></li>
                                        <li> <AiOutlineHeart /></li>
                                    </div>
                                </div>
                                <div className='detail'>
                                    <p>{product.Cat}</p>
                                    <h3>{product.titulo}</h3>
                                    <h4> Precio: {product.precio}</h4>
                                    <button className='boton'><Link to={`/item/${product.id}`}>Ver Mas </Link> </button>
                                </div>
                            </div>



                        </div>
                    </div>

                </div>

            </div>



        </>





    )

}


export default Item