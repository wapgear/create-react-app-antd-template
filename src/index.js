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

import HomeModule                 from './modules/Home'
import DashboardHomeModule        from './modules/Dashboard/Home'
import ProjectsModule             from './modules/Dashboard/Projects'
import LogsModule                 from './modules/Dashboard/Logs'
import HelpModule                 from './modules/Dashboard/Help'

import DashboardSection           from './sections/DashboardSection'
import LandingSection             from './sections/LandingSection'

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <Route path="dashboard" component={DashboardSection}>
        <IndexRoute component={DashboardHomeModule} />
        <Route path="projects"  component={ProjectsModule} />
        <Route path="logs"      component={LogsModule} />
        <Route path="help"      component={HelpModule} />
      </Route>
      <Route path="" component={LandingSection}>
        <IndexRoute component={HomeModule} />
      </Route>
    </Route>
  </Router>,
  document.getElementById('root')
);
