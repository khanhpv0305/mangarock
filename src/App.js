import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { Helmet } from 'react-helmet'

// Layout
import Layout from 'components/Layout'

// Pages
import Home from 'pages/Home'
import MangaDetail from 'pages/MangaDetail'
import NotFound from 'pages/NotFound'

// Global styles
import 'normalize.css/normalize.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'styles/reset.css'

// Store
import store from 'store'

class App extends Component {
  render() {
    return <Provider store={store}>
      <ThemeProvider theme={{
        breakpoints: {
          sm: '576px',
          md: '768px',
          lg: '992px',
          xl: '1200px'
        }
      }}>
        <Router>
          <Layout>
            <Helmet>
              <title>Manga Rock</title>
            </Helmet>

            <Switch>
              <Route exact path="/" component={Home} />

              <Route exact path="/manga/:slug([a-zA-Z0-9-]+)-:id([0-9]+)" component={MangaDetail} />

              {/* <Route component={NotFound} /> */}
            </Switch>
          </Layout>
        </Router>
      </ThemeProvider>
    </Provider>
  }
}

export default App
