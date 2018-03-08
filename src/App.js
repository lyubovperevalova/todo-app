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
                  <input type="text" name="today" value="" />
                  <input onClick={this.closeModal} type="button" name="click" value=" Close " />
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
