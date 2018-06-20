import React, { Component } from 'react'

class IconButton extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    if (this.props.hide) {
      return null
    } else {
      return (
        <button className={'btn btn-' + this.props.style} onClick={this.props.onClick}>
          <i className={'fa fa-' + this.props.icon}></i>
        </button>
      )
    }

  }
}

export default IconButton;
