import React from 'react'
import ItemLists from './ItemLists'

function GrocieryLists({items, handleCheck, handleDelete}) {

  return (
    <div className='list-item'>
      
      {items.length > 0?
       ( <ItemLists
          items={items}
          handleCheck={handleCheck}
          handleDelete={handleDelete}
        />)
       :( <p>Lists is empty</p> )}

    </div>
  )
}

GrocieryLists.defaultProps = {
  title : "Shopping Lists"
}

export default GrocieryLists

