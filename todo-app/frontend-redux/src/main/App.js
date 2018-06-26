import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../../node_modules/font-awesome/css/font-awesome.min.css'

import '../template/custom.css'
import Menu from '../template/Menu'
import Home from '../home/Home'
import Todo from '../todo/Todo'
import About from '../about/About'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">
          <Menu />
          
          <Route exact path='/' component={Home} />
          <Route exact path='/todos' component={Todo} />
          <Route exact path='/about' component={About} />
        </div>
      </Router>
    );
  }
}

export default App;
