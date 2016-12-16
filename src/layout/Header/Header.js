import React                            from 'react'
import {Row, Col, Menu, Icon, Popover}  from 'antd'
import  './styles.less'


export default class Header extends React.Component {

  state = {
    width: 0,
    height: 0,
    mobile: false,
    current: 'projects'
  }


  componentDidMount() {
    if(window) this.updateWidth()
    window.addEventListener('resize', this.updateWidth)
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWidth)
  }

  updateWidth = () => this.setState({width: window.innerWidth, height: window.innerHeight, mobile: window.innerWidth <= 940})
  handleClickOnMenu = e => {

    this.setState({current: e.key})
  }

  render() {
    return (
      <header id="header" className="clearfix">
        {this.state.mobile < 925 &&
          <Popover placement="bottomRight" overlayClassName="popover-menu" content={<HeaderMenu />} trigger="click">
            <Icon type="menu" className="nav-phone-icon"/>
          </Popover>
        }
        <Row>
          <Col xs={24} sm={24} md={6} lg={4}>
            <a to="/" id="logo">
              <span>Sooqa dev group</span>
            </a>
          </Col>
          <Col xs={0} sm={0} md={18} lg={20}>
            <HeaderMenu id="nav" mode={this.state.mobile ? 'inline' : 'horizontal'} selectedKeys={[this.state.current]} onClick={this.handleClickOnMenu}/>
          </Col>
        </Row>
      </header>
    )
  }
}

const HeaderMenu = props => (
  <Menu {...props}>
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
)
