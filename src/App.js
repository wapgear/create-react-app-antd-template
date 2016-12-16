import React, { Component }           from 'react';
import {BrowserRouter, Match}         from 'react-router'
import {Col, Row}                     from 'antd'
import './styles.less'

import HomeContainer  from './modules/Home'
import Header         from './layout/Header'
import Sidebar        from './layout/Sidebar'

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
