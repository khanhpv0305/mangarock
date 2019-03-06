import React from 'react'
import styled from 'styled-components'
import { down } from 'styled-breakpoints'

import { Link } from 'react-router-dom'

const Trending = styled.div`
  display: flex;
  justify-content: space-between;
`

Trending.Item = styled.div`
  flex: 0 0 calc(20% - 3.2px);
  padding: 8px 8px 12px 8px;
  position: relative;

  &:hover {
    background: rgba(0, 0, 0, 0.08);
  }
`

Trending.ItemPartNumber = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  display: inline-block;
  height: 24px;
  min-width: 24px;
  line-height: 24px;
  text-align: center;
  color: white;
  font-weight: 500;
  font-size: 14px;
  z-index: 1;
  background: #ff5722;
`

Trending.ItemThumbnailWrapper = styled(Link)`
  position: relative;
  display: block;
  width: 100%;
  padding-top: 150%;
  margin-bottom: 12px;
`

Trending.ItemThumbnail = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
`

Trending.ItemName = styled(Link)`
  font-weight: 500;
  line-height: 19px;
  margin-bottom: 2px;
  max-height: 38px;
  overflow-x: hidden;
  overflow-y: hidden;
  text-overflow: ellipsis;
  margin-bottom: 0.25rem;

  &:hover {
    color: #29b6f6;
  }
`

Trending.ItemNewestChapter = styled(
  ({ to, className, children }) => <Link {...{ to, className }}>
    <div />

    <span>{children}</span>
  </Link>
)`
  display: flex;
  color: rgba(0,0,0,.54);

  &:hover {
    color: #29b6f6;
  }

  > div {
    height: 1.5rem;
    flex: 0 0 8px;
    position: relative;
    margin-right: 4px;

    &:before {
      content: '';
      position: absolute;
      top: 50%;
      left: 0;
      transform: translateY(-50%);
      width: 8px;
      height: 8px;
      border-radius: 4px;
      background: #29b6f6;
    }
  }
`

export default Trending