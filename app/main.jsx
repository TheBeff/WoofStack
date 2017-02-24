'use strict'
import React from 'react'
import {Router, Route, IndexRedirect, browserHistory} from 'react-router'
import {render} from 'react-dom'
import {connect, Provider} from 'react-redux'

import store from './store'
import Jokes from './components/Jokes'
import PuppyContainer from './components/PuppyContainer'
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
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={ExampleApp}>
        <IndexRedirect to="/jokes" />
        <Route path="/jokes" component={Jokes} />
        <Route path="/puppies" component={PuppyContainer} onEnter={onPuppiesEnter}/>
      </Route>
    </Router>
  </Provider>,
  document.getElementById('main')
)