import React, { Component } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'

import Index from '../views/Index'
class Full extends Component {
  render() {
    return (
      <div className="app">
          <main className="main">
              <Switch>
                <Route path="/index" name="Index" component={Index} />
                <Redirect from="/" to="/index"/>
              </Switch>
          </main>
        </div>
    );
  }
}

export default Full
