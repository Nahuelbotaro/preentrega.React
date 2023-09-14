import React, {} from 'react'
import Nav from './componentes/nav'
import { BrowserRouter} from 'react-router-dom';
import Footer from './componentes/footer';
import Rout from './componentes/rout';
const App = () => {

 return (
  <>
    <BrowserRouter>
    <Nav/>
    <Rout></Rout>
    <Footer/>
    </BrowserRouter>
     
  
    </>
  )
  }

export default App



