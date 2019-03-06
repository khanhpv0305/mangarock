import React from 'react'
import slugify from 'voca/slugify'

import SimilarManga from './styled'

export default ({ items }) => <SimilarManga>
  {items.map(item => <SimilarManga.Item key={item.id} to={`/manga/${slugify(item.name)}-${item.id}`}>
    <SimilarManga.ThumbnailWrapper>
      <SimilarManga.Thumbnail src={item.thumbnailUrl} />
    </SimilarManga.ThumbnailWrapper>

    <SimilarManga.ItemInfoWrapper>
      <SimilarManga.ItemName>{item.name}</SimilarManga.ItemName>

      <SimilarManga.ItemOtherInfo>{item.totalChaptersCount} chapters</SimilarManga.ItemOtherInfo>
    </SimilarManga.ItemInfoWrapper>
  </SimilarManga.Item>)}
</SimilarManga>