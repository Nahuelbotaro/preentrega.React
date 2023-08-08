import React from 'react'
import Nav from './componentes/nav'
import { BrowserRouter } from 'react-router-dom';
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer';
const App = () => {
  return (
    <>
    <BrowserRouter>
      <Nav />
      <ItemListContainer greeting={'Bienvenidos'}/>
    </BrowserRouter>
  
    </>
  )
}

export default App