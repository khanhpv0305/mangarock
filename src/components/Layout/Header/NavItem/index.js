import React, { useState, useCallback } from 'react'

import NavItem from './styled'

export default ({ name, to, menuLevel2 }) => {
  const hasMenuLevel2 = !!menuLevel2

  const [ isMenuLevel2Displayed, setMenuLevel2DisplayStatus ] = useState(false)

  const handleToggleMenuLevel2 = useCallback(e => {
    e.preventDefault()

    setMenuLevel2DisplayStatus(prevStatus => !prevStatus)
  }, [])

  return <NavItem {...{ hasMenuLevel2 }}>
    <NavItem.Link
      to={to}
      onClick={hasMenuLevel2 ? handleToggleMenuLevel2 : undefined}
      {...{ hasMenuLevel2 }}
    >{name}</NavItem.Link>

    {hasMenuLevel2 && isMenuLevel2Displayed && <NavItem.MenuLevel2Wrapper>
      {menuLevel2.map((item, index) => <NavItem.MenuLevel2Item
        key={index}
        to={item.to}
      >{item.name}</NavItem.MenuLevel2Item>)}
    </NavItem.MenuLevel2Wrapper>}
  </NavItem>
}