import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './Pages/Home'
import OhWonder from './Pages/OhWonder'
import Kygo from './Pages/Kygo'
import DemunJones from './Pages/DemunJones'

class App extends Component {
  render() {
    return (
      <>
        <Router>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/OhWonder" exact component={OhWonder} />
            <Route path="/Kygo" exact component={Kygo} />
            <Route path="/DemunJones" exact component={DemunJones} />
          </Switch>
        </Router>
      </>
    )
  }
}

export default App
