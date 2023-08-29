import React, { useState } from 'react'
import Nav from './componentes/nav'
import Rout from './componentes/rout'
import { BrowserRouter } from 'react-router-dom';
import Footer from './componentes/footer';
import Productdetail from './componentes/productdetail';
const App = () => {
  //carrito
  const [cart, setCart] = useState([])
  //product detail
  const[close, setClose] = useState (false)
  const [detail, setDetail] = useState([])
  //filter product
  const [product, setProduct] = useState(Productdetail)
  const searchbtn = (product) =>
  {
    const change = Productdetail.filter((x)=>
    {
      return x.Cat === product
    })
    setProduct(change)
  }
//product detail
const view = (product)=>
{
  setDetail([{...product}])
  setClose(true)
}
//agregar al carrito
const addtocart = (product)=>
{

}
  return (
  <>
    <BrowserRouter>
      <Nav searchbtn={searchbtn}/>
      <Rout product={product} setProduct={setProduct} detail={detail} view={view} close={close} setClose={setClose} cart={cart} setCart={setCart} addtocart={addtocart}/>
      <Footer/>
    </BrowserRouter>
  
    </>
  )
}

export default App