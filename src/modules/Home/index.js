import React from 'react'

export default class HomeModule extends React.Component {

  render() {
    return (
        <div>
          <section className="page banner-wrapper">
              <div id="banner">
                  <div className="banner-text-wrapper">
                      <h2 className="" style={{opacity: 1, visibility: 'visible', transform: 'translateX(0px)'}}>
                        ANT <p>DESIGN</p>
                      </h2>
                      <p className="" style={{opacity: 1, visibility: 'visible', transform: 'translateX(0px)'}}>
                          <span>One Design Language for UI</span>
                      </p>
                      <span className="line" style={{opacity: 1, visibility: 'visible', transform: 'translateX(0px)'}}></span>
                      <div className="start-button clearfix" style={{opacity: 1, visibility: 'visible', transform: 'translateX(0px)'}}>
                          <a href="/docs/spec/introduce">
                              <span>Introduce</span>
                          </a>
                          <a href="/docs/react/introduce">
                              <span>Get Started</span>
                          </a>
                      </div>
                  </div>
                  <i className="anticon anticon-down down"></i>
              </div>
          </section>
        </div>
    )
}
}
