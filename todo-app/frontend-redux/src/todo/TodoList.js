import React, { Component } from 'react'
import { connect } from 'react-redux'

import IconButton from '../template/IconButton'

class TodoList extends Component {
  render() {
    const renderRows = () => {
      const list = this.props.list || []
      return (
        list.map(todo => (
          <tr key={todo._id}>
            <td className={todo.done ? 'markedAsDone' : ''}>{todo.description}</td>
            <td>
              <IconButton style='success' hide={todo.done} icon='check' onClick={() => this.props.handleMarkAsDone(todo)} />
              <IconButton style='warning' hide={!todo.done} icon='undo' onClick={() => this.props.handleMarkAsPending(todo)} />
              <IconButton style='danger' hide={!todo.done} icon='trash-o' onClick={() => this.props.handleRemove(todo)} />
            </td>
          </tr>
        ))
      )
    }
    return (
      <table className='table'>
        <thead>
          <tr>
            <th>Descrição</th>
            <th className='tableActions'>Ações</th>
          </tr>
        </thead>
        <tbody>
          {renderRows()}
        </tbody>
      </table>
    );
  }
}

const mapStateToProps = state => ({ list: state.todo.list })

export default connect(mapStateToProps)(TodoList);
//export default TodoList;
