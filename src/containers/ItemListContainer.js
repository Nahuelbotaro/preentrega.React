import React, { useEffect, useState } from 'react' 
import ItemList from '../componentes/ItemList'
import { collection, getDocs, query, where} from "firebase/firestore"
import { db } from "../Firebase/config"
import { useParams } from 'react-router-dom'

const ItemListContainer = () => {
  const [array, setArray] = useState([])
 
 const categoria = useParams().categoria;


    
   useEffect(() =>{   
   
  const productosRef = collection(db, "productos"); 

    const q = query (productosRef, where("categoria", "==", categoria));

    getDocs(q)
      .then ((resp) =>{
       
       setArray(
        
            resp.docs.map((doc) =>{
              return {...doc.data(), id: doc.id}
            })
        )
      })
  },[categoria])
 

  return (
    <div className='listcontainer'>
       <ItemList products={array}/>
      
    </div>
  )
}

export default ItemListContainer