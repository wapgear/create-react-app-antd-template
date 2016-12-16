import React from 'react'
import {Row, Col, Menu, Icon} from 'antd'
import styles from './styles.less'
import {Link} from 'react-router'

export default class Header extends React.Component {
  constructor(props) {
    super(props)
  }

  state = {
    current: 'projects'
  }

  handleClickOnMenu = e => {
    
    this.setState({current: e.key})
  }

  render() {
    return (
      <header id="header">
        <Row>
          <Col span={8} className={styles.test}>
            <a to="/" id="logo">
              <span>Sooqa dev group</span>
            </a>
          </Col>
          <Col span={16}>
            <Menu id="nav" mode="horizontal" selectedKeys={[this.state.current]} onClick={this.handleClickOnMenu}>
              <Menu.Item key="projects">
                <Icon type="appstore-o" /> Projects
              </Menu.Item>
              <Menu.Item key="logs">
                <Icon type="code" /> Logs
              </Menu.Item>
              <Menu.Item key="help">
                <Icon type="question" /> Help
              </Menu.Item>
            </Menu>
          </Col>
        </Row>
      </header>
    )
  }
}
