import React from 'react'
import styled from 'styled-components'

const ThumbnailAndBrief = styled.div`
  margin-left: -20px;
  margin-right: -20px;
  margin-bottom: 20px;
  height: 300px;
  display: flex;
`

ThumbnailAndBrief.ThumbnailWrapper = styled.div`
  flex: 0 0 300px;
  position: relative;
`

ThumbnailAndBrief.ThumbnailWrapper2 = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: calc(100% + 110px);
  background: white;
`

ThumbnailAndBrief.ThumbnailWrapper3 = styled(
  ({ children, ...restProps }) => <div {...restProps}>
    <div>{children}</div>
  </div>
)`
  padding: 20px 20px 0 20px;

  > div {
    position: relative;
    width: 100%;
    padding-top: 150%;
  }
`

ThumbnailAndBrief.Thumbnail = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
`

ThumbnailAndBrief.Brief = styled.div`
  padding-top: 20px;
  padding-right: 20px;
  flex: 1;
  display: flex;
  position: relative;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
`

ThumbnailAndBrief.ThreeDotsWrapper = styled.div`
  position: absolute;
  top: 15px;
  right: 15px;
  width: 38px;
  height: 38px;
`

ThumbnailAndBrief.MangaNameAndBrief = styled.div``

ThumbnailAndBrief.MangaName = styled.div`
  font-size: 1.5rem;
  font-weight: 500;
  margin-bottom: 1em;
`

ThumbnailAndBrief.ShareBtns = styled.div``

ThumbnailAndBrief.ShareBtnWrapper = styled.div`
  display: inline-block;
  margin-right: 12px;
`

export default ThumbnailAndBrief