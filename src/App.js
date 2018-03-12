import React, { Component } from 'react';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      isOpenModal: false,
      todos: [
        {
          title: 'Running',
          description: 'rrrr',
          startDate: 'yy',
          endDate: 'yy',
          priority: 'high',
          participants: 'Lyuba Perevalova'
        },
        {
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

  openModal = () =>
      this.setState({isOpenModal: true})

  closeModal = () =>
      this.setState({isOpenModal: false})

  addTodo = () => {
    const todo = {
      title: this.input_title.value,
      description: this.input_description.value,
      startDate: this.input_startDate.value,
      endDate: this.input_endDate.value,
      priority: this.input_priority.value,
      participants: this.input_participants.value
    }
    this.setState({
      isOpenModal: false,
      todos: [...this.state.todos, todo ]
    })
    this.clearForm()
  }

  clearForm = () => {
    this.input_title.value = ""
    this.input_description.value = ""
    this.input_startDate.value = ""
    this.input_endDate.value = ""
    this.input_priority.value = ""
    this.input_participants.value = ""

  }

  render() {

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
              <input onClick={this.openModal} type="button" name="Create Todo" value=" Create Todo " />
            </div>

            <div>
              <input type="button" name="today" value=" Today " />
              <input type="button" name="tomorrow" value=" Tomorrow " />
              <input type="button" name="week" value=" Week " />
              <input type="button" name="month" value=" Month " />
            </div>
          </div>

          <div className={this.modalClasses()}>
            <div className="modal-content">
              <p>
                  Create todo
              </p>
              Title: <br/>
              <input type="text" name="title" ref={(input) => this.input_title = input}/> <br/>
              Description: <br/>
              <input type="text" name="description"  ref={(input) => this.input_description = input}/> <br/>
              Start date: <br/>
              <input type="text" name="startDate" ref={(input) => this.input_startDate = input}/> <br/>
              End date: <br/>
              <input type="text" name="endDate" ref={(input) => this.input_endDate = input}/> <br/>
              Priority: <br/>
              <input type="text" name="priority" ref={(input) => this.input_priority = input}/> <br/>
              Participants: <br/>
              <input type="text" name="participants" ref={(input) => this.input_participants = input}/> <br/>
              <input onClick={this.closeModal} type="button" name="click" value="Close" />
              <input onClick={this.addTodo} type="button" name="click" value="Create" />
            </div>
          </div>


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
              { this.state.todos.map((todo) =>
                  <tr>
                      <td>{todo.title}</td>
                      <td>{todo.description}</td>
                      <td>{todo.startDate}</td>
                      <td>{todo.endDate}</td>
                      <td>{todo.priority}</td>
                      <td>{todo.participants}</td>
                      <td>
                          <span>&#x1f441;</span>
                          <span>&#x270d;</span>

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
