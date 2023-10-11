import React, { useEffect, useState,} from 'react'
import ItemDetail from './ItemDetail'
import { useParams } from 'react-router-dom';
import { doc, getDoc} from 'firebase/firestore'
import {db} from "../Firebase/config"
 
const ItemDetailContainer = () => {
  const [product, setProduct] = useState(null);
  const {id} = useParams()

  useEffect(() =>{
  
    const docRef = doc(db, "productos", id);
    getDoc(docRef)
      .then((resp) =>{
        setProduct(
          {...resp.data(), id: resp.id}
        )
        
      })

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