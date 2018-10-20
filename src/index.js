import React from 'react'
import ReactDOM from 'react-dom'
import { HashRouter as Router, Route, Switch } from 'react-router-dom'
import { Provider } from 'react-redux'

// Containers
import Full from './containers/Full'

// redux store
import store from './store'

ReactDOM.render((
  <Provider store={store}>
    <div>
      <Router>
        <Switch>
          <Route path="/" name="Home" component={Full} />
        </Switch>
      </Router>
    </div>
  </Provider>
), document.getElementById('root'))
