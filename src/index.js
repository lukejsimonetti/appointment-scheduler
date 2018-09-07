import React from 'react'
import ReactDOM from 'react-dom'
import { HashRouter as Router, Route, Switch } from 'react-router-dom'
import { Provider } from 'react-redux'

// Styles
// Import Flag Icons Set
import 'flag-icon-css/css/flag-icon.min.css'
// Import Font Awesome Icons Set
import 'font-awesome/css/font-awesome.min.css'
// Import Simple Line Icons Set
import 'simple-line-icons/css/simple-line-icons.css'

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
