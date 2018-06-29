import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import Grid from '../template/Grid'
import IconButton from '../template/IconButton'
import { changeDescription, search, add } from './todoActions'

class TodoForm extends Component {
  constructor(props) {
    super(props)
  }

  componentWillMount() {
    this.props.search()
  }

  render() {
    const { add, search, description } = this.props
    return (
      <div role='form' className='todoForm'>
        <Grid cols='12 9 10'>
          <input id='description'
            className='form-control'
            placeholder='Adicione uma tarefa'
            onChange={this.props.changeDescription}
            value={this.props.description} />
        </Grid>

        <Grid cols='12 3 2'>
          <IconButton style='primary' icon='plus' onClick={() => add(description)}></IconButton>
          <IconButton style='info' icon='search' onClick={() => search()}></IconButton>
          <IconButton style='default' icon='close' onClick={this.props.handleClear}></IconButton>
        </Grid>
      </div>
    );
  }
}

const mapStateToProps = state => ({ description: state.todo.description })
const mapDispatchToProps = dispach => bindActionCreators(
  { changeDescription, search, add },
  dispach
)

export default connect(mapStateToProps, mapDispatchToProps)(TodoForm);
//export default TodoForm;
