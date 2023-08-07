import React from 'react'

function Footer({length}) {
  return (
    <footer>
      <p>Total: {length} list {length === 1 ? 'item': 'items'}</p>
    </footer>
  )
}

export default Footer
