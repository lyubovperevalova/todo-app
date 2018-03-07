import React, { Component } from 'react';
import './App.css';

class App extends Component {

  constructor(props) {
      super(props)
      this.state = {
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



  render() {

    return (
      <div>
          <h1 align="center" >Todo list</h1>

          <hr/>

          <div className="container">
              <p><input type="button" name="list" value=" List " />

                  <input type="button" name="calendar" value=" The calendar " />
              </p>

              <p><input type="button" name="today" value=" Today " />
                  <input type="button" name="tomorrow" value=" Tomorrow " />
                  <input type="button" name="week" value=" Week " />
                  <input type="button" name="month" value=" Month " />
              </p>
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
                      <td></td>
                  </tr>
              )}
          </table>
      </div>
    );
  }
}

export default App;
