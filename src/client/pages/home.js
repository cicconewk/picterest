import React, { Component, Fragment } from 'react'

import ContentLayout from '../components/content-layout'
import Header from '../components/header/components/header'
import Navigation from '../components/navigation'
import Content from '../components/content'
import Footer from '../components/footer/components/footer'
import CardLayout from '../components/card/components/card-layout';
import Card from '../components/card/container/card'

export default class Home extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        
        <ContentLayout>
          <Navigation />

          <Content>
            <CardLayout>
              <Card title="Cool Title" image="https://images.unsplash.com/photo-1489743342057-3448cc7c3bb9?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=6d284a2efbca5f89528546307f7e7b87&auto=format&fit=crop&w=500&q=60" />
            </CardLayout>
          </Content>            
        </ContentLayout>          

        <Footer />
      </Fragment>
    )
  }
}
