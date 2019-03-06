import styled from 'styled-components'
import is from 'styled-is'

const MangaDetail = styled.main``

MangaDetail.Banner = styled.div`
  height: 450px;
  
  ${props => props.bannerUrl && `
    background: url(${props.bannerUrl}) no-repeat center / cover;
  `}
`

MangaDetail.TagListWrapper = styled.div`
  margin-bottom: 20px;
`

MangaDetail.Descr = styled.p.attrs({ className: 'mb-0' })`
  padding-bottom: 20px;
`

MangaDetail.Toggler = styled.div`
  cursor: pointer;
  text-align: center;
  margin-right: -20px;
  margin-left: -20px;
  height: 36px;
  margin-top: 16px;

  &:hover {
    background: hsla(0,0%,62%,.2);
  }
`

MangaDetail.TogglerText = styled.div`
  display: inline-block;
  position: relative;
  padding-right: 20px;
  color: #29b6f6;
  font-weight: 500;
  line-height: 36px;
  user-select: none;

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
    border-top: 4px solid #29b6f6;

    ${is('isExpanding')`
      border-top: none;
      border-bottom: 4px solid #29b6f6;
    `}
  }
`

export default MangaDetail