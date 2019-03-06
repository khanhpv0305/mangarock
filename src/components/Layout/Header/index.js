import React from 'react'
import { Link } from 'react-router-dom'

import Header from './styled'
import NavItem from './NavItem'
import SearchBar from './SearchBar'

const menu = [{
  name: 'HOME',
  to: '/'
}, {
  name: 'ALL MANGA',
  to: '/manga'
}, {
  name: 'LATEST UPDATES',
  to: '/latest'
}, {
  name: 'WIKI',
  to: '#',
  menuLevel2: [{
    name: 'Genres',
    to: '/genre'
  }, {
    name: 'Characters',
    to: '/character'
  }, {
    name: 'Authors',
    to: '/author'
  }]
}]

export default props => {
  return <Header>
    <Header.LogoAndNavWrapper>
      <Link to="/">
        <Header.Logo src="https://mangarock.com/svg/mr_logo_beta.svg" />
      </Link>

      <Header.Nav>
        {menu.map((item, index) => <NavItem key={index} {...item} />)}
      </Header.Nav>
    </Header.LogoAndNavWrapper>

    <Header.SearchBarAndSignInBtnWrapper>
      <Header.SearchBarWrapper>
        <SearchBar />
      </Header.SearchBarWrapper>

      <Header.SignInBtn>SIGN IN</Header.SignInBtn>
    </Header.SearchBarAndSignInBtnWrapper>
  </Header>
}