'use strict'
import React from 'react';
import {Router, Route, IndexRedirect, browserHistory} from 'react-router';
import {render} from 'react-dom';
import {connect, Provider} from 'react-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import store from './store';
import PuppyContainer from './components/PuppyContainer';
import Dog from './components/Dog';
import {getAllPuppies, getPresentPuppies} from './reducers/puppies';

import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

const ExampleApp = connect(
  ({ auth }) => ({ user: auth })
) (
  ({ user, children }) =>
    <div>
      <nav>
        {user ? <WhoAmI/> : <Login/>}
      </nav>
      {children}
    </div>
);

const onPuppiesEnter = () => {
  store.dispatch(getAllPuppies())
  store.dispatch(getPresentPuppies())
};

render (
  <MuiThemeProvider>
    <Provider store={store}>
      <Router history={browserHistory}>
          <Route path="/" component={PuppyContainer} onEnter={onPuppiesEnter}/>
      </Router>
    </Provider>
  </MuiThemeProvider>,
  document.getElementById('main')
);
