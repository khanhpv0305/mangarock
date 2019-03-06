import React from 'react'
import styled from 'styled-components'

import { FaSearch } from 'react-icons/fa'

const SearchBar = styled.div`
  height: 40px;
  width: 300px;
  position: relative;
`

SearchBar.Input = styled.input`
  border: 1px solid rgba(0, 0, 0, 0.12);
  padding-left: 38px;
  height: 100%;
  width: 100%;

  &::placeholder {
    color: #C2C2C2;
  }

  &:hover, &:focus {
    outline: none;
    border-color: rgba(0, 0, 0, 0.38);
  }
`

SearchBar.SearchIcon = styled(
  props => <div {...props}>
    <FaSearch />
  </div>
)`
  position: absolute;
  top: 1px;
  left: 1px;
  width: 38px;
  height: 38px;
  display: flex;
  align-items: center;
  justify-content: center;
`

export default SearchBar