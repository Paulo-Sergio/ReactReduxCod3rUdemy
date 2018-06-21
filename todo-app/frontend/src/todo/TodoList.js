import React, { Component } from 'react'

import IconButton from '../template/IconButton'

class TodoList extends Component {
  render() {
    const renderRows = () => {
      const list = this.props.list || []
      return (
        list.map(todo => (
          <tr key={todo._id}>
            <td>{todo.description}</td>
            <td>
              <IconButton style='danger' icon='trash-o' onClick={() => this.props.handleRemove(todo)} />
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
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {renderRows()}
        </tbody>
      </table>
    );
  }
}

export default TodoList;
