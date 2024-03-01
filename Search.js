import React from 'react'

const Search = ({search,setSearch}) => {
  return (
    <form className='searchForm' onSubmit={(e)=>e.preventDefault()} >
        <label htmlFor='search'></label>
        <input
        id='search'
         type='text'
         role='searchbox'
         placeholder='Search a todo'
         className='search-input'
         value={search}
         onChange={(e)=>setSearch(e.target.value)}
          />
    </form>
  )
}

export default Search