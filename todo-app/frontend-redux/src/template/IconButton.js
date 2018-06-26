import React, { Component } from 'react'

import If from './If'

class IconButton extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <If test={!this.props.hide}>
        <button className={'btn btn-' + this.props.style} onClick={this.props.onClick}>
          <i className={'fa fa-' + this.props.icon}></i>
        </button>
      </If>
    )
  }
}

export default IconButton;
