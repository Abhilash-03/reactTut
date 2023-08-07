import React from 'react'

function LineItem({item, handleCheck, handleDelete}) {
  return (
        <li className='listItems'>
            <input type="checkbox" checked={item.checked} onChange={()=>{handleCheck(item.id)}} />
            <label onClick={()=>{handleCheck(item.id)}}>{item.item}</label>
            <button onClick={()=> {handleDelete(item.id)}}>Delete</button>
        </li>
  )
}

export default LineItem
