import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { Helmet } from 'react-helmet'

// Components
import Home from './styled'
import { Container, Row, Col } from 'reactstrap'
import BoxWithShadow from 'components/BoxWithShadow'
import SubHeading from 'components/SubHeading'
import SectionHeading from 'components/SectionHeading'
import Trending from 'components/Trending'
import ReadingLists from 'components/ReadingLists'
import GenreList from 'components/GenreList'

// Actions
import { getTrending } from 'actions/trending'
import { getReadingLists } from 'actions/readingLists'
import { getAllGenre } from 'actions/genre'

const Head = React.memo(() => <Helmet>
  <title>Manga Rock - Online Manga Reader</title>
</Helmet>)

const HomePage = props => {
  const {
    trendingItems,
    getTrending,
    readingListsItems,
    getReadingLists,
    genreItems,
    getAllGenre
  } = props

  useEffect(() => {
    getTrending()

    getReadingLists()

    getAllGenre()
  }, [])

  return <Container>
    <Home>
      <Head />

      <Row>
        <Col md={8}>
          <BoxWithShadow>
            <SubHeading>In the last few hours</SubHeading>

            <SectionHeading>
              <SectionHeading.H2>TRENDING UPDATES</SectionHeading.H2>

              <SectionHeading.TextRight to="#">VIEW ALL</SectionHeading.TextRight>
            </SectionHeading>

            <Trending items={trendingItems} />
          </BoxWithShadow>

          <SubHeading>Updated Daily</SubHeading>

          <SectionHeading>
            <SectionHeading.H2>READING LISTS</SectionHeading.H2>
          </SectionHeading>

          <Row>
            {readingListsItems.map(readingListsItem => <Col
              key={readingListsItem.id}
              md={6}
            >
              <BoxWithShadow>
                <ReadingLists {...readingListsItem} />
              </BoxWithShadow>
            </Col>)}
          </Row>
        </Col>

        <Col md={4}>
          <BoxWithShadow className="pb-0">
            <SectionHeading>
              <SectionHeading.H2>BROWSE BY GENRES</SectionHeading.H2>
            </SectionHeading>

            <GenreList items={genreItems} />
          </BoxWithShadow>
        </Col>
      </Row>
    </Home>
  </Container>
}

const mapStateToProps = state => ({
  trendingItems: state.trending.items,
  readingListsItems: state.readingLists.items,
  genreItems: state.genre.items
})

const mapDispatchToProps = {
  getTrending,
  getReadingLists,
  getAllGenre
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomePage)