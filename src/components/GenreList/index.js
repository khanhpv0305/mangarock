import React, { useState, useCallback } from 'react'
import update from 'immutability-helper'

import GenreList from './styled'
import { Row, Col } from 'reactstrap'

export default ({ items }) => {
  const [ isExpanding, setExpandStatus ] = useState(false)

  const first8Items = update(items, {
    $splice: [ [ 8 ] ]
  })

  const restItems = update(items, {
    $splice: [ [ 0, 8 ] ]
  })

  const handleToggleExpand = useCallback(() => {
    setExpandStatus(prevStatus => !prevStatus)
  }, [])

  return <GenreList>
    <Row>
      {first8Items.map((item, index) => <Col key={index} xs={6}>
        <GenreList.Item to="#">{item}</GenreList.Item>
      </Col>)}

      {isExpanding && restItems.map((item, index) => <Col key={index} xs={6}>
        <GenreList.Item to="#">{item}</GenreList.Item>
      </Col>)}
    </Row>

    <GenreList.Toggler onClick={handleToggleExpand}>
      <GenreList.TogglerText {...{ isExpanding }}>SHOW MORE</GenreList.TogglerText>
    </GenreList.Toggler>
  </GenreList>
}