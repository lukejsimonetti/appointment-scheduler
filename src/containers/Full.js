import React, { Component } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'

import Async from '../components/Helper/Async'

class Full extends Component {
  render() {
    return (
      <div className="app">
          <main className="main">
              <Switch>
                <Route path="/index" name="Index" render={() => <Async load={import('../views/Index')} />}/>
                <Redirect from="/" to="/index"/>
              </Switch>
          </main>
        </div>
    );
  }
}

export default Full
