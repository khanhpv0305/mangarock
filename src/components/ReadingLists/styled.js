import React from 'react'
import styled from 'styled-components'

import { Link } from 'react-router-dom'

const ReadingLists = styled(Link)`
  display: block;

  &:hover {
    text-decoration: none;
  }
`

ReadingLists.ImagesWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 30px;
`

ReadingLists.ImageWrapper = styled(
  ({ children, ...restProps }) => <div {...restProps}>
    <div>{children}</div>
  </div>
)`
  flex: 0 0 calc(33.333333% - 10px);

  > div {
    position: relative;
    width: 100%;
    padding-top: 150%;
    border: 1px solid rgba(0, 0, 0, 0.12);
  }
`

ReadingLists.Image = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
`

ReadingLists.Name = styled.div`
  font-weight: 500;
  line-height: 19px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-top: 16px;
`

ReadingLists.Brieft = styled.div`
  margin-top: 8px;
  color: rgba(0,0,0,.54);
  font-size: 0.875rem;
  line-height: 16px;
  height: 32px;
  overflow: hidden;
  -webkit-line-clamp: 2;
  text-overflow: ellipsis;
`

export default ReadingLists