import React, { Component } from 'react'

import Grid from '../template/Grid'
import IconButton from '../template/IconButton'

class TodoForm extends Component {
  render() {
    return (
      <div role='form' className='todoForm'>
        <Grid cols='12 9 10'>
          <input id='description'
            className='form-control'
            placeholder='Adicione uma tarefa'
            onChange={this.props.handleChange}
            value={this.props.description} />
        </Grid>

        <Grid cols='12 3 2'>
          <IconButton style='primary' icon='plus' onClick={this.props.handleAdd}></IconButton>
          <IconButton style='info' icon='search' onClick={this.props.handleSearch}></IconButton>
          <IconButton style='default' icon='close' onClick={this.props.handleClear}></IconButton>
        </Grid>
      </div>
    );
  }
}

export default TodoForm;
