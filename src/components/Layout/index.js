import React from 'react'

// Components
import Layout from './styled'
import Header from './Header'
import Footer from './Footer'

export default ({ children, ...restProps }) => {
  return <Layout {...restProps}>
    <Header />
    
    {children}

    <Footer />
  </Layout>
}