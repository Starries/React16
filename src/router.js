import React, { Component } from 'react';
import { HashRouter, Route, hashHistory, Switch } from 'react-router-dom';
import App from './page/app/index';
import News from './page/news/index'

class AppRouter extends Component {
  render() {
    return (
      <HashRouter history={hashHistory}>
        <Switch>
          <Route path='/' exact component={App} />
          <Route path='/news' component={News} />
        </Switch>
      </HashRouter>
    );
  }
}

export default AppRouter;