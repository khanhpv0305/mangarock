import React, { useState, useEffect, useCallback } from 'react'
import { Helmet } from 'react-helmet'

// Components
import MangaDetail from './styled'
import { Container, Row, Col } from 'reactstrap'
import BoxWithShadow from 'components/BoxWithShadow'
import SectionHeading from 'components/SectionHeading'
import ThreeDots from 'components/ThreeDots'
import ThumbnailAndBrief from './ThumbnailAndBrief'
import TagList from 'components/TagList'
import SimilarManga from './SimilarManga'

// Utils
import delay from 'utils/delay-promise'

// Mock data
import trending from 'mock-data/trending'

const Head = React.memo(({ name }) => <Helmet>
  <title>{name}</title>
</Helmet>)

export default props => {
  const {
    match: {
      params
    }
  } = props

  const [ manga, setManga ] = useState(null)

  const [ isExpandingDescr, setDescrExpandStatus ] = useState(false)

  const handleToggleExpand = useCallback(() => {
    setDescrExpandStatus(prevStatus => !prevStatus)
  }, [])

  useEffect(() => {
    (async () => {
      await delay(200)

      const foundManga = trending.find(manga => manga.id  === +params.id)

      setManga(foundManga)
    })()
  }, [ params.id ])

  if (!manga) return null

  return <MangaDetail>
    <Head name={manga.name} />

    <MangaDetail.Banner bannerUrl={manga.bannerUrl} />

    <Container>
      <Row>
        <Col md={8}>
          <BoxWithShadow className="pb-0 pt-0">
            <ThumbnailAndBrief
              thumbnailUrl={manga.thumbnailUrl}
              name={manga.name}
              totalChaptersCount={manga.totalChaptersCount}
              rank={manga.rank}
            />

            <MangaDetail.TagListWrapper>
              <TagList
                items={manga.tags}
              />
            </MangaDetail.TagListWrapper>

            <MangaDetail.Descr>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos quod quae tempore nam consequatur error laboriosam ut ratione nobis doloremque earum, maxime omnis doloribus totam, ducimus asperiores alias iste! Earum repellat numquam corporis distinctio aliquam libero rerum exercitationem illum sed. Eos non commodi voluptatem sit ullam esse vitae dolorem ex!<br />

              {isExpandingDescr && 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos quod quae tempore nam consequatur error laboriosam ut ratione nobis doloremque earum, maxime omnis doloribus totam'}
            </MangaDetail.Descr>

            <MangaDetail.Toggler onClick={handleToggleExpand}>
              <MangaDetail.TogglerText isExpanding={isExpandingDescr}>SHOW MORE</MangaDetail.TogglerText>
            </MangaDetail.Toggler>
          </BoxWithShadow>
        </Col>

        <Col md={4}>
          <SectionHeading className="mt-5">
            <SectionHeading.H2>SIMILAR MANGA</SectionHeading.H2>
          </SectionHeading>

          <SimilarManga items={trending} />
        </Col>
      </Row>
    </Container>
  </MangaDetail>
}