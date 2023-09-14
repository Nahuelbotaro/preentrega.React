import React, { useEffect, useState } from 'react'
import ItemList from './ItemList';

const ItemDetailContainer = () => {
  const [arrayList, setArrayList] = useState ([]);

    
    return (
    <>
     <ItemList/>
    </>
  )
}

export default ItemDetailContainer