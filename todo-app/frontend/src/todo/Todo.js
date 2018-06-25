import React, { Component } from 'react'
import axios from 'axios'

import PageHeader from '../template/PageHeader'
import TodoForm from './TodoForm'
import TodoList from './TodoList'

const URL = 'http://localhost:3003/api/todos'

class Todo extends Component {
  constructor(props) {
    super(props)
    this.state = {
      description: '',
      list: []
    }

    this.handleAdd = this.handleAdd.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.handleRemove = this.handleRemove.bind(this)
    this.handleMarkAsDone = this.handleMarkAsDone.bind(this)
    this.handleMarkAsPending = this.handleMarkAsPending.bind(this)
    this.handleSearch = this.handleSearch.bind(this)

    this.refresh()
  }

  refresh(description = '') {
    const search = description ? `&description__regex=${description}` : ''
    axios.get(`${URL}?sort=-createdAt${search}`)
      .then((resp) => {
        this.setState({ ...this.state, description: description, list: resp.data })
      })
  }

  handleSearch() {
    this.refresh(this.state.description)
  }

  handleChange(e) {
    this.setState({ ...this.state, description: e.target.value })
  }

  handleAdd() {
    console.log(this.state.description)
    const description = this.state.description
    axios.post(URL, { description })
      .then((resp) => {
        console.log('Adicinou!')
        this.refresh()
      })
      .catch((err) => console.log(err))
  }

  handleRemove(todo) {
    axios.delete(`${URL}/${todo._id}`)
      .then((resp) => this.refresh(this.state.description))
  }

  handleMarkAsDone(todo) {
    axios.put(`${URL}/${todo._id}`, { ...todo, done: true })
      .then(resp => this.refresh(this.state.description))
  }

  handleMarkAsPending(todo) {
    axios.put(`${URL}/${todo._id}`, { ...todo, done: false })
      .then(resp => this.refresh(this.state.description))
  }

  render() {
    return (
      <div>
        <PageHeader name='Tarefas' small='Cadastro' />

        <TodoForm description={this.state.description}
          handleAdd={this.handleAdd}
          handleChange={this.handleChange}
          handleSearch={this.handleSearch} />

        <TodoList list={this.state.list}
          handleRemove={this.handleRemove}
          handleMarkAsDone={this.handleMarkAsDone}
          handleMarkAsPending={this.handleMarkAsPending} />
      </div>
    );
  }
}

export default Todo;
