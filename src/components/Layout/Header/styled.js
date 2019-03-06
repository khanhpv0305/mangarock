import styled from 'styled-components'
import { rem } from 'polished'

const Header = styled.header`
  height: 72px;
  padding: 0 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0 1px 5px 0 rgba(0, 0, 0, 0.2);
`

Header.LogoAndNavWrapper = styled.div`
  display: flex;
  height: 100%;
  align-items: center;
`

Header.Logo = styled.img`
  height: 50px;
  margin-right: 56px;
`

Header.Nav = styled.nav`
  height: 100%;
  display: flex;
`

Header.SearchBarAndSignInBtnWrapper = styled.div`
  display: flex;
`

Header.SearchBarWrapper = styled.div`
  margin-right: 16px;
`

Header.SignInBtn = styled.button.attrs({ type: 'button' })`
  height: 40px;
  padding: 0 16px;
  background: #29b6f6;
  color: white;
  font-size: ${rem('14px')};
  font-weight: 500;
  border: none;
`

export default Header