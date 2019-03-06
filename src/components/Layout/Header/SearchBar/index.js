import React from 'react'

import SearchBar from './styled'

export default props => {


  return <SearchBar>
    <SearchBar.SearchIcon />

    <SearchBar.Input placeholder="Search manga, character..." />
  </SearchBar>
}