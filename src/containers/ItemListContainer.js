import React, { useEffect, useState } from 'react' 
/* import getList from '../componentes/getProduct' */
import ItemList from '../componentes/ItemList'

const ItemListContainer = () => {
  const [arrayList, setArrayList] = useState([])
  
  useEffect(() =>{
    fetch('productos.json')
    .then((resp) => resp.json())

    .then((data) => setArrayList(data))
    .catch((err) => console.error(err))
  
  },[])
 

  return (
    <div className='listcontainer'>
       <ItemList products={arrayList}/>
      
    </div>
  )
}

export default ItemListContainer