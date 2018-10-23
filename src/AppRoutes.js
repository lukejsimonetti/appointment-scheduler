import React, { Component } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import { Container } from 'reactstrap'
import TimeSlotTable from './views/TimeSlotTable'

class AppRoutes extends Component {
  render() {
    return (
      <Container className="app">
          <main className="main">
              <Switch>
                <Route path="/index" name="TimeSlotTable" component={TimeSlotTable} />
                <Redirect from="/" to="/index"/>
              </Switch>
          </main>
        </Container>
    );
  }
}

export default AppRoutes
