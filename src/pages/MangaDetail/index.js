import React, { useState, useEffect } from 'react'
import { Helmet } from 'react-helmet'

// Components
import MangaDetail from './styled'
import { Container, Row, Col } from 'reactstrap'
import BoxWithShadow from 'components/BoxWithShadow'
import SectionHeading from 'components/SectionHeading'

// Utils
import delay from 'utils/delay-promise'

// Mock data
import trending from 'mock-data/trending'

export default props => {
  const {
    match: {
      params
    }
  } = props

  const [ manga, setManga ] = useState(null)

  useEffect(() => {
    (async () => {
      await delay(200)

      const foundManga = trending.find(manga => manga.id  === +params.id)

      setManga(foundManga)
    })()
  }, [ params.id ])

  if (!manga) return null

  return <MangaDetail>
    <Helmet>
      <title>{manga.name}</title>
    </Helmet>

    <MangaDetail.Banner bannerUrl={manga.bannerUrl} />

    <Container>
      <Row>
        <Col md={8}>
          <BoxWithShadow className="pb-0">
            sdfsdfdsf
          </BoxWithShadow>
        </Col>
      </Row>
    </Container>
  </MangaDetail>
}