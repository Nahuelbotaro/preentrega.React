import React, { useEffect, useState } from 'react' 
import getList from '../componentes/getProduct'
import ItemList from '../componentes/ItemList'

const ItemListContainer = () => {
  const [arrayList, setArrayList] = useState([])
  
  useEffect(() =>{
    getList()
      .then((response) => setArrayList(response))
      .catch((err) => console.error(err))
      .finally()
  },[])
 

  return (
    <div className='listcontainer'>
       <ItemList productos={arrayList}/>
      
    </div>
  )
}

export default ItemListContainer