
import Nav from '../src/componentes/Navbar/nav'
import Home from '../src/componentes/Home/home'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './componentes/Footer/footer';
import './componentes/product.css'
import ItemDetailContainer from '../src/containers/ItemDetailContainer';
import ItemListContainer from './containers/ItemListContainer';
import Galeria from './componentes/galeria';
import Contacto from '../src/componentes/Contacto/contacto';
import '../src/containers/cart.css'
import { CartProvider } from './componentes/context/CartContext';
import Carrito from '../src/componentes/Carrito/Carrito';
import Checkout from '../src/componentes/Checkout/Checkout';

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
            <Route path='/checkout' element={<Checkout/>} />
          </Routes>
         <Footer />
        </BrowserRouter>
      </CartProvider>

    </>
  )
}
export default App


 






