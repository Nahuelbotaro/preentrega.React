import React, {} from 'react'
import Nav from './componentes/nav'
import Home from './componentes/home'
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Footer from './componentes/footer';
import './componentes/product.css'
import ItemDetailContainer from './componentes/ItemDetailContainer';
import ItemListContainer from './containers/ItemListContainer';

function App () {

 return (
  <>
    <BrowserRouter>
    <Nav/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/productos' element={<ItemListContainer/>}/>
      <Route path='/item/:id' element={<ItemDetailContainer/>}/>
    </Routes>
   
    
    <Footer/>
    </BrowserRouter>
     
  
    </>
  )
  }

export default App



