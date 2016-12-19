import React      from 'react'
import Header     from './../layout/Header'

import './styles.css'

export default class LandingSection extends React.Component {
  render() {
    return (
      <div className="landingSection">
        <Header/>
        <div className="main-wrapper">
          {this.props.children}
        </div>
      </div>
    )
  }
}
