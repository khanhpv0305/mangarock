import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import is from 'styled-is'
import { rem } from 'polished'

const NavItem = styled.div`
  > a {
    color: rgba(0, 0, 0, 0.54);
    font-size: 1.125rem;
    font-weight: 500;
    height: 100%;
    display: inline-flex;
    align-items: center;

    &:hover {
      text-decoration: none;
      color: #29b6f6;

      > span:before {
        border-top-color: #29b6f6;
      }
    }
  }

  &:not(:last-child) {
    margin-right: 32px;
  }

  ${is('hasMenuLevel2')`
    position: relative;
  `}
`

NavItem.Link = styled(
  ({ to, onClick, children, className }) => <Link {...{ to, onClick }}>
    <span {...{ className }}>{children}</span>
  </Link>
)`

  ${is('hasMenuLevel2')`
    position: relative;
    padding-right: 20px;

    &:before {
      content: '';
      position: absolute;
      top: 50%;
      right: 6px;
      transform: translateY(-50%);
      width: 8px;
      height: 4px;
      border-right: 4px solid transparent;
      border-left: 4px solid transparent;
      border-top: 4px solid rgba(0, 0, 0, 0.54);
    }
  `}
`

NavItem.MenuLevel2AbstractWrapper = styled.div`
  position: absolute;
  top: calc(100% + 2px);
  left: 0;
  width: 200px;
  height: 0px;
`

NavItem.MenuLevel2Wrapper = styled(
  ({ children, ...restProps }) => <NavItem.MenuLevel2AbstractWrapper>
    <div {...restProps}>
      {children}
    </div>
  </NavItem.MenuLevel2AbstractWrapper>
)`
  padding: 7px 0;
  display: inline-block;
  max-width: 100%;
  box-shadow: 0 1px 5px 0 rgba(0, 0, 0, 0.2);
  font-size: ${rem('14px')};
`

NavItem.MenuLevel2Item = styled(Link)`
  display: block;
  padding: 3px 15px;
  color: #000;
  &:hover {
    text-decoration: none;
    color: #000;
    background: #eee;
  }
`

export default NavItem