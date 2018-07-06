import React, { Component } from 'react'


class MenuItem extends Component {
  render() {
    return (
      <a href={this.props.path}>
        <i className={`fa fa-${this.props.icon}`}></i> {this.props.label}
      </a>
    );
  }
}

export default MenuItem
