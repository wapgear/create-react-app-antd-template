import React, { Component }               from 'react';
import './styles.less'

class App extends Component {
  render() {
    return (
        <div className="page-wrapper">
          {this.props.children}
        </div>
    );
  }
}

export default App;
