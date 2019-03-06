import React from 'react'

import ReadingLists from './styled'

export default ({ url, images, name, brief }) => <ReadingLists to="#">
  <ReadingLists.ImagesWrapper>
    {images.map((image, index) => <ReadingLists.ImageWrapper key={index}>
      <ReadingLists.Image src={image} />
    </ReadingLists.ImageWrapper>)}
  </ReadingLists.ImagesWrapper>

  <ReadingLists.Name>{name}</ReadingLists.Name>

  <ReadingLists.Brieft>{brief}</ReadingLists.Brieft>
</ReadingLists>