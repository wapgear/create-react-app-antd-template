import React, { Component }               from 'react';
import {Col, Row}                         from 'antd'
import './styles.less'

import Header         from './layout/Header'
import Sidebar        from './layout/Sidebar'


class App extends Component {
  render() {
    return (
        <div className="page-wrapper">
          <Header />
          <div className="main-wrapper">
            <Row>
              <Sidebar />
              <Col className="main-container" xs={24} sm={24} md={18} lg={20}>
                {this.props.children}
              </Col>
            </Row>
          </div>
        </div>
    );
  }
}

export default App;
