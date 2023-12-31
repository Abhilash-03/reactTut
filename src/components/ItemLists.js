import React from 'react'
import LineItem from './LineItem'

function ItemLists({items, handleCheck, handleDelete}) {
  return (
    <ul>
    {items.map((item)=> ( 
        <LineItem 
           key={item.id}
           item = {item}
           handleCheck={handleCheck}
           handleDelete={handleDelete}
        />
      )
  )}
  </ul>
  )
}

export default ItemLists
