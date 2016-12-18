import React                            from 'react';
import {
  Router, browserHistory,
  Route, IndexRoute
}                                       from 'react-router';
import ReactDOM                         from 'react-dom';
import App                              from './App';
import injectTapEventPlugin             from 'react-tap-event-plugin';
import './index.css';
injectTapEventPlugin();

import HomeModule       from './modules/Home'
import ProjectsModule   from './modules/Projects'
import LogsModule       from './modules/Logs'
import HelpModule       from './modules/Help'

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={HomeModule} />
      <Route path="projects" component={ProjectsModule} />
      <Route path="logs" component={LogsModule} />
      <Route path="help" component={HelpModule} />
    </Route>
  </Router>,
  document.getElementById('root')
);
