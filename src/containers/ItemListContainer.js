import React, { useEffect, useState } from 'react' 
import ItemList from '../containers/ItemList'
import { useParams } from 'react-router-dom'
import { collection, getDocs, query, where} from "firebase/firestore"
import { db } from "../Firebase/config"



const ItemListContainer = () => {
  const [array, setArray] = useState([])
 
 const categoria = useParams().categoria;


    
   useEffect(() =>{   
   
  const productosRef = collection(db, "productos"); 

    const q = categoria ? query (productosRef, where("categoria", "==", categoria)) : productosRef;

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