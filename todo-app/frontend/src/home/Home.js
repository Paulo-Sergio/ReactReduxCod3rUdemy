import React, { Component } from 'react'

class Home extends Component {
  render() {
    return (
      <div>
        <div class="jumbotron">
          <h1>Minha página inicial!</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer semper felis ut feugiat congue. Aenean ut tristique velit. 
            Vivamus commodo, mauris vitae sollicitudin ornare, massa sapien vestibulum massa, sit amet placerat velit dui ut nisl. Donec vitae 
            lorem ac mi bibendum blandit. Nullam convallis iaculis rhoncus. In bibendum quam ac elit congue, quis gravida urna facilisis. 
            Aenean eu consectetur velit. Nunc laoreet bibendum dui. Vivamus pellentesque porta tincidunt. Praesent risus nisl, eleifend ut 
            quam at, luctus dignissim erat. In vel consequat augue. Ut id laoreet arcu.</p>
          <p><a class="btn btn-primary btn-lg" href="/todos" role="button">Ver Tarefas</a></p>
        </div>
      </div>
    );
  }
}

export default Home
