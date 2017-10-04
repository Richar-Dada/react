import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import Timeline from './components/Timeline'
import Summary from './components/Summary'
import Repos from './components/Repos'
import About from './components/About'
import Home from './components/Home'
import { Router, Route, hashHistory, IndexRoute, Redirect, IndexRedirect, browserHistory } from 'react-router'

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={App} >
      <IndexRoute component={Home} />
      <IndexRedirect to="/repos" />
      <Redirect from="/aaa" to="/repos" />
      <Route path="/repos" component={Repos} />
      <Route path="/about" component={About} />
    </Route>
    <Route path="/timeline" component={Timeline} />
    <Route path="/summary" component={Summary} />
  </Router>,
  document.body.appendChild(document.createElement('div'))
);
