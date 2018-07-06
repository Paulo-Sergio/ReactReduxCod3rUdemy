import React, { Component } from 'react'

import MenuItem from './MenuItem'
import MenuTree from './MenuTree'

class Menu extends Component {
  render() {
    return (
      <ul className='sidebar-menu'>
        <MenuItem path='/' label='Dashboard' icon='dashboard' />
        <MenuTree label='cadastro' icon='edit'>
          <MenuItem path='/billingCycles' label='Ciclos de Pagamentos' icon='usd' />
        </MenuTree>
      </ul>
    );
  }
}

export default Menu
