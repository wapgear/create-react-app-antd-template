import React                            from 'react'
import {Row, Col, Menu, Icon, Popover}  from 'antd'
import {Link}                           from 'react-router'
import  './styles.less'


export default class Header extends React.Component {
  state = {
    width: 0,
    height: 0,
    mobile: false,
    current: 'projects'
  }

  static contextTypes = {
    router: React.PropTypes.object.isRequired
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
    // console.log('test')
    this.setState({current: e.key})
    this.context.router.push(`/${e.key}`)
  }

  render() {
    console.log(this.context)
    return (
      <header id="header" className="clearfix">
        {this.state.mobile < 925 &&
          <Popover
            placement="bottomRight"
            overlayClassName="popover-menu"
            content={
              <HeaderMenu id="nav" mode='vertical' selectedKeys={[this.state.current]} onClick={this.handleClickOnMenu}/>
            }
            trigger="click"
          >
            <Icon type="menu" className="nav-phone-icon"/>
          </Popover>
        }
        <Row>
          <Col xs={24} sm={24} md={6} lg={4}>
            <Link to="/" id="logo">
              <span>Sooqa dev group</span>
            </Link>
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
    <Menu.Item key="dashboard/projects">
      <Icon type="appstore-o" /> Projects
    </Menu.Item>
    <Menu.Item key="dashboard/logs">
      <Icon type="code" /> Logs
    </Menu.Item>
    <Menu.Item key="dashboard/help">
      <Icon type="question" /> Help
    </Menu.Item>
  </Menu>
)
