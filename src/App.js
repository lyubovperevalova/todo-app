import React, { Component } from 'react';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      isOpenModal: false,
      modal: null,
      todos: [
        {
          id: 1,
          title: 'Running',
          description: 'rrrr',
          startDate: 'yy',
          endDate: 'yy',
          priority: 'high',
          participants: 'Lyuba Perevalova'
        },
        {
          id: 2,
          title: 'Running',
          description: 'rrrr',
          startDate: 'yy',
          endDate: 'yy',
          priority: 'high',
          participants: 'Lyuba Perevalova'
        }
      ]
    }
  }


  modalClasses = () => {
      let classes = "modal"
      if (this.state.isOpenModal) {
          classes = " modal-open"
      }
      return classes
  }

  openNewFormModal = () =>
    this.setState({
      isOpenModal: true,
      modal: this.newForm
    })

  openEditFormModal = () =>
    this.setState({
      isOpenModal: true,
      modal: this.editForm
    })

  openShowTodoModal = (todo) =>
    this.setState({
      isOpenModal: true,
      modal: () => this.todoShow(todo)
    })

  closeModal = () =>
      this.setState({isOpenModal: false})

  addTodo = () => {
    const { title, description, startDate, endDate, priority, participants, todos } = this.state

    const next_id = Math.max(...todos.map((t) => t.id)) + 1

    const todo = {
      id: next_id,
      title: title,
      description: description,
      startDate: startDate,
      endDate: endDate,
      priority: priority,
      participants: participants
    }

    this.setState({
      isOpenModal: false,
      todos: [...this.state.todos, todo ]
    })
    this.clearForm()
  }

  editTodo = (todo) => {
    this.setState({
      ...this.state, ...todo
    })

    this.openEditFormModal()
  }

  showTodo = (todo) => {
    this.openShowTodoModal(todo)
  }

  clearForm = () => {

    this.setState({
      id: "",
      title: "",
      description: "",
      startDate: "",
      endDate: "",
      priority: "",
      participants: ""
    })
  }

  newForm = () =>
    <div>
      <p>
        Create todo
      </p>
      {this.todo_form()}
      <input onClick={this.addTodo} type="button" name="click" value="Create" />
    </div>

  editForm = () => {
    return (
      <div>
        <p>
          Edit todo
        </p>
        {this.todo_form()}
        <input onClick={this.updateTodo} type="button" name="click" value="Update" />
      </div>)
  }

  todoShow = (todo) => {
    return (
      <div>
        <p>
          Show todo
        </p>
        <p>Title: {todo.title}</p>
        <p>Description: {todo.description}</p>
        <p>Start date: {todo.startDate}</p>
        <p>End date: {todo.endDate}</p>
        <p>Priority: {todo.priority}</p>
        <p>Participants: {todo.participants}</p>
        <input onClick={this.closeModal} type="button" name="click" value="Close" />
      </div>
    )
  }

  todo_form = () => {
    const { title, description, startDate, endDate, priority, participants } = this.state

    return (
      <div>
        Title: <br/>
        <input type="text" value={title} name="title" onChange={this.handleInputChange} /> <br/>
        Description: <br/>
        <input type="text" value={description} name="description" onChange={this.handleInputChange} /> <br/>
        Start date: <br/>
        <input type="date" value={startDate} name="startDate" onChange={this.handleInputChange} /> <br/>
        End date: <br/>
        <input type="date" value={endDate} name="endDate" onChange={this.handleInputChange} /> <br/>
        Priority: <br/>
        <input type="text" value={priority} name="priority" onChange={this.handleInputChange} /> <br/>
        Participants: <br/>
        <input type="text" value={participants} name="participants" onChange={this.handleInputChange} /> <br/>
        <input onClick={this.closeModal} type="button" name="click" value="Close" />
      </div>
    )}

  updateTodo = () => {
    const { id, title, description, startDate, endDate, priority, participants } = this.state

    const todo = {
      id: id,
      title: title,
      description: description,
      startDate: startDate,
      endDate: endDate,
      priority: priority,
      participants: participants
    }

    const todosWithoutCurrent = this.state.todos.filter((t) => t.id !== id)

    this.setState({
      isOpenModal: false,
      todos: [...todosWithoutCurrent, todo ]
    })
    this.clearForm()
  }

  handleInputChange = (event) => {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  render() {
    const sortedTodos =  this.state.todos.sort((a, b) =>
      new Date(a.startDate) - new Date(b.startDate))

    return (
      <div>
        <h1 align="center" >Todo list</h1>

        <hr/>

        <div className="container">
          <div>
            <input type="button" name="list" value=" List " />
            <input type="button" name="calendar" value=" The calendar " />
          </div>

          <div>
            <input onClick={this.openNewFormModal} type="button" name="Create Todo" value=" Create Todo " />
          </div>

          <div>
            <input type="button" name="today" value=" Today " />
            <input type="button" name="tomorrow" value=" Tomorrow " />
            <input type="button" name="week" value=" Week " />
            <input type="button" name="month" value=" Month " />
          </div>
        </div>

        { this.state.modal &&
          <div className={this.modalClasses()}>
            <div className="modal-content">
              { this.state.modal() }
            </div>
          </div>
        }

          <table border="2">
            <tr>
              <th>Title</th>
              <th>Description</th>
              <th>Start date</th>
              <th>End date</th>
              <th>Priority</th>
              <th>Participants</th>
              <th></th>
            </tr>
            { sortedTodos.map((todo) =>
              <tr>
                <td>{todo.title}</td>
                <td>{todo.description}</td>
                <td>{todo.startDate}</td>
                <td>{todo.endDate}</td>
                <td>{todo.priority}</td>
                <td>{todo.participants}</td>
                <td>
                  <span onClick={() => this.showTodo(todo)}>&#x1f441;</span>
                  <span onClick={() => this.editTodo(todo)}>&#x270d;</span>
                </td>
              </tr>
            )}
          </table>
          <div className="Modal-dialog"></div>
      </div>

    );
  }
}

export default App;
