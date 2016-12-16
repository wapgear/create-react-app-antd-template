import React, { Component } from 'react';
import {BrowserRouter, Match, Link} from 'react-router'
import {Col, Row} from 'antd'
import HomeContainer from './modules/Home'

import Header   from './layout/Header'
import Sidebar  from './layout/Sidebar'
import styles   from './styles.less'
const Router = () => {
  return (
    <BrowserRouter>
      <Match exactly pattern="/" component={HomeContainer} />
    </BrowserRouter>
  )
}

class App extends Component {
  render() {
    return (
      <div className="page-wrapper">
        <Header />
        <div className="main-wrapper">
          <Row>
            <Sidebar />
            <Col className="main-container" xs={24} sm={24} md={18} lg={20}>
              <Router />
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}

export default App;
