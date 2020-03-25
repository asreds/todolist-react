import React, { Component } from 'react';
import Add from './components/add';

class Todo extends Component {
  add () {
    window.showModalContent(props => <Add {...props}/>);
  }
  render () {
    return <div className="bd-main">
      <h1>Simple todo list using react and redux by Asih Priyatno</h1>
      <div className="todo-container">
        <button className="button is-primary" onClick={() => this.add()}>Add</button>
        <table className="table table-todo">
          <tr>
            <td> In rogress</td>
            <td>Finish</td>
          </tr>
        </table>
      </div>

    </div>;
  }
}

export default Todo;
