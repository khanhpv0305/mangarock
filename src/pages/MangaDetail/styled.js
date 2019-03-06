import styled from 'styled-components'

const MangaDetail = styled.main``

MangaDetail.Banner = styled.div`
  height: 450px;
  
  ${props => props.bannerUrl && `
    background: url(${props.bannerUrl}) no-repeat center / cover;
  `}
`

export default MangaDetail