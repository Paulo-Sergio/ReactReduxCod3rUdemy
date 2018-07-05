import React, { Component } from 'react'

import '../common/template/dependencies'
import Header from '../common/template/Header'
import SideBar from '../common/template/SideBar'

class App extends Component {
  render() {
    return (
      <div className="wrapper">
        <Header />
        <SideBar />
      </div>
    );
  }
}

export default App
