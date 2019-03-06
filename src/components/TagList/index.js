import React from 'react'

import TagList from './styled'

export default ({ items }) => <TagList>
  {items.map((item, index) => <TagList.Item key={index} to="#">
    {item}
  </TagList.Item>)}
</TagList>