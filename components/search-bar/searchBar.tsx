import React from 'react'
import styled from './searchBar.module.css'

const SearchBar = () => {
  return (
    <div className={styled.bodyInput}>
        <label htmlFor="search">
            <img src="assets/icons/zoom-code.svg" alt="" />
        </label>
        <input type="text" placeholder='search' id='search' />
    </div>
  )
}

export default SearchBar