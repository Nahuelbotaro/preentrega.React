import React from 'react'
import Item from './Item'

const ItemList = ({ products, titulo }) => {
  return(
  <>
  <div className='container'>
    <h2 className='titulo'>{titulo}</h2>
    <div className='productos'>
      {products.map((product) => <Item key={product.id} product={product} />)}
    </div>
    
  </div>
    
  </>
);
}
 

export default ItemList