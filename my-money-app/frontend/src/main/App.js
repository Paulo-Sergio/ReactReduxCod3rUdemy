import React, { Component } from 'react'

import '../common/template/dependencies'
import Header from '../common/template/Header'
import SideBar from '../common/template/SideBar'
import Footer from '../common/template/Footer'

class App extends Component {
  render() {
    return (
      <div className='wrapper'>
        <Header />
        <SideBar />

        <div className='content-wrapper'>
          <h1>Conteudo</h1>
        </div>
        
        <Footer />
      </div>
    );
  }
}

export default App
