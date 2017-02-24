'use strict'
import React from 'react'
import {Router, Route, IndexRedirect, browserHistory} from 'react-router'
import {render} from 'react-dom'
import {connect, Provider} from 'react-redux'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import store from './store'
import Jokes from './components/Jokes'
import PuppyContainer from './components/PuppyContainer'
import Dog from './components/Dog'
import Login from './components/Login'
import WhoAmI from './components/WhoAmI'
import {getAllPuppies, updatePuppies} from './reducers/puppies'

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
)

const onPuppiesEnter = () => {
  store.dispatch(getAllPuppies())
}

render (
  <MuiThemeProvider>
    <Provider store={store}>
      <Router history={browserHistory}>
        <Route path="/" component={ExampleApp}>
          <IndexRedirect to="/dogs" />
          <Route path="/dogs" component={Dog} />
          <Route path="/puppies" component={PuppyContainer} onEnter={onPuppiesEnter}/>
        </Route>
      </Router>
    </Provider>
  </MuiThemeProvider>,
  document.getElementById('main')
)
