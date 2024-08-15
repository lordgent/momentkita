import UserLayout from '@/components/layouts/UserLayout'
import SearchBar from '@/components/search-bar/searchBar'
import React from 'react'
import styled from './search.module.css'

const SearchPage = () => {
  return (
    <UserLayout>
          <div className={styled.bodySearch}>
          <SearchBar/>
          </div>
    </UserLayout>
  )
}

export default SearchPage