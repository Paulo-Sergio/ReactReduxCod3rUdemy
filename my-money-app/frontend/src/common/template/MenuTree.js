import React, { Component } from 'react'


class MenuTree extends Component {
  render() {
    return (
      <li className='treeview'>
        <a href>
          <i className={`fa fa-${this.props.icon}`}></i> {this.props.label}
          <i className='fa fa-angle-left pull-right'></i>
        </a>
        <ul className='treeview-menu'>
          {this.props.children}
        </ul>
      </li>
    );
  }
}

export default MenuTree
