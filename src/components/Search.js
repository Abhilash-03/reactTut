import React from 'react'

function Search({search, setSearch}) {
  return (
    <form className='searchBox' onSubmit={(e)=> e.preventDefault()}>
       <input
        type="search"
        id='search'
        role='searchbox'
        value={search}
        placeholder='Search Items'
        onChange={(e)=> setSearch(e.target.value)}
       />
    </form>
  )
}

export default Search
