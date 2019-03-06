import styled from 'styled-components'

import { Link } from 'react-router-dom'

const SimilarManga = styled.div``

SimilarManga.Item = styled(Link)`
  padding: 12px 15px;
  display: flex;
  align-items: center;

  &:hover {
    background: rgba(0,0,0,.08);
    text-decoration: none;
  }
`

SimilarManga.ThumbnailWrapper = styled.div`
  width: 60px;
  height: 90px;
  border: 1px solid rgba(0,0,0,.12);
  position: relative;
  margin-right: 15px;
`

SimilarManga.Thumbnail = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
`

SimilarManga.ItemInfoWrapper = styled.div``

SimilarManga.ItemName = styled.div`
  font-weight: 500;
  margin-bottom: 0.5em;
`

SimilarManga.ItemOtherInfo = styled.div`
  font-size: 14px;
  color: rgba(0, 0, 0, 0.54);
`

export default SimilarManga