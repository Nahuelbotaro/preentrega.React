import React, { useEffect, useState,} from 'react'
import ItemDetail from './ItemDetail'


const ItemDetailContainer = () => {
  const [product, setProduct] = useState(null);
  const id = 1

  useEffect(() =>{
    const producto = (`producto.json${id}`)
    const getItem = fetch(producto)

    getItem
    .then((res) => res.json())
    .then((res) =>{
      setProduct(res)
    })
    .catch((err) => console.log(err))
  },[id])


  return (
    <div>
      {product ? (
        <ItemDetail product={product} />
      ) : (
        <p>Cargando producto...</p>
      )}
    </div>
  );
};

export default ItemDetailContainer;