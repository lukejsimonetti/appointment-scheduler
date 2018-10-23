import React from 'react'
import ReactDOM from 'react-dom'
import { HashRouter as Router, Route, Switch } from 'react-router-dom'
import { Provider } from 'react-redux'

// Containers
import AppRoutes from './AppRoutes'

// redux store
import store from './store'

ReactDOM.render((
  <Provider store={store}>
    <div>
    <Router>
        <Switch>
          <Route path="/" name="AppRoutes" component={AppRoutes} />
        </Switch>
      </Router>
    </div>
  </Provider>
), document.getElementById('root'))
