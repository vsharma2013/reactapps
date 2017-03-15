import React, { Component } from 'react';
import {Container} from 'flux/utils';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, Link, browserHistory } from 'react-router';
import createBrowserHistory from 'history/createBrowserHistory'

import Login from './components/login/login';
import AppGeneralStore from './stores/AppGeneralStore';
//import AppEntities from './components/entities/AppEntities';

class App extends Component {
  constructor() {
    super(...arguments);
    this.userLoggedIn = false;
  }
  render () {
    return (<Login/>);
  }

  componentWillUpdate(nextProps, nextState){
    //this.userLoggedIn = nextState.userInfo.success
    console.log('will');
  }

  componentDidUpdate() {
    // if(this.userLoggedIn) {
    //   this.props.history.push('/configure');
    // }
    window.location.replace('http://localhost:8080/configure');
    console.log('did');
  }
}

App.getStores = () => ([AppGeneralStore]);
App.calculateState = (prevState) => ({
  userInfo: AppGeneralStore.getState(),
});

const AppContainer = Container.create(App);

//render(<AppContainer />, document.getElementById('appContainer'));
let history = createBrowserHistory();
render((
  <Router history={history}>
    <Route path="/" component={AppContainer}>
    </Route>
  </Router>
), document.getElementById('appContainer'));