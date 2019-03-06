import React from 'react'
import slugify from 'voca/slugify'

import Trending from './styled'

export default ({ items }) => {
  return <Trending>
    {items.map((item, index) => {
      const itemUrl = `/manga/${slugify(item.name)}-${item.id}`

      return <Trending.Item key={index}>
        <Trending.ItemPartNumber>{item.partNumber}</Trending.ItemPartNumber>

        <Trending.ItemThumbnailWrapper to={itemUrl}>
          <Trending.ItemThumbnail src={item.thumbnailUrl} />
        </Trending.ItemThumbnailWrapper>

        <Trending.ItemName to={itemUrl}>{item.name}</Trending.ItemName>

        <Trending.ItemNewestChapter to={itemUrl}>{item.newestChapter}</Trending.ItemNewestChapter>
      </Trending.Item>
    })}
  </Trending>
}