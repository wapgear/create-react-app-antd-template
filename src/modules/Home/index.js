import React    from 'react'
import {Button} from 'antd'

import './styles.css'

export default class HomeModule extends React.Component {

  render() {
    return (
        <div className="homeModule">
          <section className="page banner-wrapper">
              <div id="banner">
                  <div className="banner-text-wrapper">
                      <h2 className="" style={{opacity: 1, visibility: 'visible', transform: 'translateX(0px)'}}>
                        Anton <p>Izmailov</p>
                      </h2>
                      <p className="" style={{opacity: 1, visibility: 'visible', transform: 'translateX(0px)'}}>
                          <span><span className="specialText">ReactJS</span> Developer</span>
                      </p>
                      <span className="line" style={{opacity: 1, visibility: 'visible', transform: 'translateX(0px)'}}></span>
                      <div className="start-button clearfix" style={{opacity: 1, visibility: 'visible', transform: 'translateX(0px)'}}>
                        <Button
                          size="large"
                          type="ghost"
                        >
                          About me
                        </Button>
                        <Button
                          size="large"
                          type="ghost"
                        >
                          My blog
                        </Button>
                      </div>
                  </div>
                  <i className="anticon anticon-down down"></i>
              </div>
          </section>
        </div>
    )
}
}
