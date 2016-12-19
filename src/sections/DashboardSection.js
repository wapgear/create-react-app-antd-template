import React      from 'react'
import {Row, Col} from 'antd'

import Header     from './../layout/Header'
import Sidebar    from './../layout/Sidebar'

export default class LandingSection extends React.Component {
  render() {
    return (
      <div>
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
    )
  }
}
