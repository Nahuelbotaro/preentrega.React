import React from 'react'
import {AiOutlineShoppingCart} from 'react-icons/ai';
import {AiOutlineEye} from 'react-icons/ai';
import {AiOutlineHeart} from 'react-icons/ai';
import {AiOutlineCloseCircle} from 'react-icons/ai';
import Productdetail from './productdetail'
import './product.css'

const Product = ({product, setProduct, detail, view, close, setClose, addtocart}) => {
    const filtterproduct = (product)=>
    {
        const update = Productdetail.filter((x)=>
        {
            return x.Cat === product;
        })
        setProduct(update);
    }
    const AllProducts = ()=>
    {
        setProduct(Productdetail)
    }
    return (
        <>  
        {
            close ?
            <div className='producto-detail'>
                <div className='container'>
                    <button onClick={()=>setClose(false)} className='closebtn'><AiOutlineCloseCircle/></button>
                    {
                        detail.map((curElm) =>
                        {
                            return(
                                <div className='product-box'>
                                    <div className='img-box'>
                                        <img src={curElm.Img} alt={curElm.titulo}></img>
                                    </div>
                                    <div className='detail'>
                                        <h4>{curElm.Cat}</h4>
                                        <h2>{curElm.titulo}</h2>
                                        <h3>{curElm.precio}</h3>
                                        <button>Agregar al carrito</button>
                                    </div>
                                </div>
                            )
                        })
                       
                    }
                    
                </div>
            </div> : null
        }
            
           
            <div className='productos'>
                 <h2># Productos</h2>
                <p>Inicio . Productos</p>
                <div className='container'>
                    <div className='filter'>
                        <div className='categorias'>
                            <h3>Categorias</h3>
                            <ul>
                                <li onClick={() => AllProducts ()}>Todos los productos</li>
                                <li onClick={() => filtterproduct ("Alfajores")}>Alfajores</li>
                                <li onClick={() => filtterproduct ("Cafe")}>Cafe</li>
                                <li onClick={() => filtterproduct ("Cookies")}>Cookies</li>
                                <li onClick={() => filtterproduct ("Cupcakes")}>Cupcakes</li>
                                <li onClick={() => filtterproduct ("Tartas")}>Tartas</li>
                                <li onClick={() => filtterproduct ("Tortas")}>Tortas</li>
                            </ul>
                        </div>
                        <div className='productbox'>
                            <div className='contant'>
                                {
                                    product.map((curElm) => {
                                        return(
                                            <div className='box' key={curElm.id}>
                                                  <div className='img-box'>
                                                      <img className='img' src={curElm.Img} alt={curElm.titulo}></img> 
                                                      <div className='icono'>
                                                          <li onClick={() => addtocart(curElm)}><AiOutlineShoppingCart/></li>
                                                          <li onClick={()=> view(curElm)}><AiOutlineEye/></li>
                                                          <li> <AiOutlineHeart/></li>
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
                    </div>
                </div>
            </div>
        </>
    )
}

export default Product  