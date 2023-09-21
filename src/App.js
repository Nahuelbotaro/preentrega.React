
import Nav from './componentes/nav'
import Home from './componentes/home'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './componentes/footer';
import './componentes/product.css'
import ItemDetailContainer from './componentes/ItemDetailContainer';
import ItemListContainer from './containers/ItemListContainer';
import Galeria from './componentes/galeria';
import Contacto from './componentes/contacto';
import './componentes/cart.css'
import { CartProvider } from './context/CartContext';
import Carrito from './componentes/Carrito';

function App() {

  return (
    <>
      <CartProvider>
        <BrowserRouter>
          <Nav />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/productos' element={<ItemListContainer />} />
            <Route path='/productos/:categoria' element={<ItemListContainer />} />
            <Route path='/item/:id' element={<ItemDetailContainer />} />
            <Route path='/galeria' element={<Galeria />} />
            <Route path='/contacto' element={<Contacto />} />
            <Route path='/carrito' element={<Carrito />} />
          </Routes>


          <Footer />
        </BrowserRouter>
      </CartProvider>




    </>
  )
}

export default App



