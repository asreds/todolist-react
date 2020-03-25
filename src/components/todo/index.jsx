import React, { Component } from 'react';
import Add from './components/add';
import { connect } from 'react-redux';
import { fetchData } from '../../redux/actions/todo';
import Loading from './components/loading';
import PropTypes from 'prop-types';
import List from './components/list';

class Todo extends Component {
  componentDidMount () {
    this.props.dispatch(fetchData());
  }
  add () {
    if (this.props.todo.data) {
      window.showModalContent(props => <Add {...props} dispatch={this.props.dispatch}/>);
    }
  }
  generateList () {
    return <React.Fragment>
      <td><List data={this.props.todo.data} type={0} dispatch={this.props.dispatch}/></td>
      <td><List data={this.props.todo.data} type={1} dispatch={this.props.dispatch}/></td>
    </React.Fragment>;
  }
  render () {
    return (
      <div className="bd-main">
        <h1>Simple todo list using react and redux by Asih Priyatno</h1>
        <div className="todo-container">
          <button className="button is-primary is-disabled" onClick={() => this.add()} disabled={!this.props.todo.data}>
            Add
          </button>
          <table className="table table-todo">
            <thead>
              <tr>
                <th style={{ width: '50%' }}> In Progress</th>
                <th>Finish</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                {!this.props.todo.data ? <Loading /> : this.generateList()}
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

Todo.propTypes = {
  dispatch: PropTypes.func.isRequired,
  todo: PropTypes.object
};

function mapStateToProps (state) {
  return { todo: state.todo };
}

export default connect(mapStateToProps)(Todo);
