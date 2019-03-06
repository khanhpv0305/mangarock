import React from 'react'

import ThumbnailAndBrief from './styled'
import ThreeDots from 'components/ThreeDots'
import FbShareBtn from 'components/FbShareBtn'
import TwShareBtn from 'components/TwShareBtn'

export default props => {
  const {
    thumbnailUrl,
    name,
    authors,
    totalChaptersCount,
    rank
  } = props

  return <ThumbnailAndBrief>
    <ThumbnailAndBrief.ThumbnailWrapper>
      <ThumbnailAndBrief.ThumbnailWrapper2>
        <ThumbnailAndBrief.ThumbnailWrapper3>
          <ThumbnailAndBrief.Thumbnail src={thumbnailUrl} />
        </ThumbnailAndBrief.ThumbnailWrapper3>
      </ThumbnailAndBrief.ThumbnailWrapper2>
    </ThumbnailAndBrief.ThumbnailWrapper>

    <ThumbnailAndBrief.Brief>
      <ThumbnailAndBrief.ThreeDotsWrapper>
        <ThreeDots />
      </ThumbnailAndBrief.ThreeDotsWrapper>

      <ThumbnailAndBrief.MangaNameAndBrief>
        <ThumbnailAndBrief.MangaName>{name}</ThumbnailAndBrief.MangaName>

        <div>{totalChaptersCount} chapters | Rank {rank}</div>
      </ThumbnailAndBrief.MangaNameAndBrief>
      
      <ThumbnailAndBrief.ShareBtns>
        <ThumbnailAndBrief.ShareBtnWrapper>
          <FbShareBtn to="#" />
        </ThumbnailAndBrief.ShareBtnWrapper>

        <ThumbnailAndBrief.ShareBtnWrapper>
          <TwShareBtn to="#" />
        </ThumbnailAndBrief.ShareBtnWrapper>
      </ThumbnailAndBrief.ShareBtns>
    </ThumbnailAndBrief.Brief>
  </ThumbnailAndBrief>
}