import React, { Component } from 'react';
import {Container} from 'flux/utils';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, Link, browserHistory } from 'react-router';
import createBrowserHistory from 'history/createBrowserHistory'

class AppEntities extends Component {
  render () {
    return (<h1>Welcome to entity app</h1>);
  }
}

AppEntities.getStores = () => ([AppGeneralStore]);
AppEntities.calculateState = (prevState) => ({
  userInfo: AppGeneralStore.getState(),
});
let history = createBrowserHistory();

const AppContainer = Container.create(AppEntities);

render((
  <Router history={null}>
    <Route path="/configure" component={AppContainer}>
    </Route>
  </Router>
), document.getElementById('appContainer'));