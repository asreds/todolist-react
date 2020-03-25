import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Error from './error';
import { addList, updateList, deleteList } from '../../../redux/actions/todo';

export default class Add extends Component {
  // eslint-disable-next-line no-useless-constructor
  constructor (props) {
    super(props);
    let d = new Date();
    this.state = {
      id: props.data.id ? props.data.id : 0,
      title: props.data.title ? props.data.title : '',
      description: props.data.description ? props.data.description : '',
      status: props.data.status ? props.data.status : 0,
      createdAt: props.data.createdAt
        ? props.data.createdAt
        : `${d.getFullYear()}-${d.getMonth()}-${d.getDay()} ${d.getHours()}:${d.getMinutes()}`,
      error: false
    };
  }
  handleChange (e, id) {
    let state = this.state;
    state[id] = e.target.value;
    state.error = false;
    this.setState(state);
  }
  save () {
    if (!this.state.title || !this.state.description) {
      this.setState({
        error: true
      });
    } else {
      this.props.closeModal();
      let form = {
        title: this.state.title,
        description: this.state.description,
        createdAt: this.state.createdAt,
        status: this.state.status
      };
      if (!this.props.data.id) {
        this.props.dispatch(addList(form));
      } else {
        form.id = this.props.data.id;
        this.props.dispatch(updateList(form));
      }
    }
  }
  delete () {
    this.props.closeModal();
    this.props.dispatch(deleteList({ id: this.props.data.id }));
  }
  render () {
    return (
      <div className="modal-content">
        <div className="box">
          {this.state.error ? (
            <Error message="Title and description required" />
          ) : null}
          <div>
            <div className="field">
              <label className="label">Title</label>
              <div className="control">
                <input
                  onChange={e => this.handleChange(e, 'title')}
                  defaultValue={this.state.title}
                  className="input"
                  type="text"
                  placeholder="Title"
                />
              </div>
            </div>
            <div className="field">
              <label className="label">Description</label>
              <div className="control">
                <textarea
                  onChange={e => this.handleChange(e, 'description')}
                  className="textarea"
                  placeholder="Description"
                  defaultValue={this.state.description}
                />
              </div>
            </div>
            <div className="field">
              <div className="control">
                <label className="checkbox">
                  <input
                    onClick={() =>
                      this.setState({
                        status: this.state.status === 0 ? 1 : 0,
                        error: false
                      })
                    }
                    type="checkbox"
                    defaultChecked={this.state.status === 1}
                  />{' '}
                  Status
                </label>
              </div>
            </div>
            <div className="field is-grouped">
              <div className="control">
                <button
                  className="button is-link is-light"
                  onClick={() => this.props.closeModal()}
                >
                  Cancel
                </button>
              </div>
              {this.props.data.status === 0 ? (
                <div className="control">
                  <button
                    className="button is-danger"
                    onClick={() => this.delete()}
                  >
                    Delete
                  </button>
                </div>
              ) : null}

              <div className="control">
                <button
                  className="button is-success"
                  onClick={() => this.save()}
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Add.defaultProps = {
  data: {}
};

Add.propTypes = {
  closeModal: PropTypes.func.isRequired,
  dispatch: PropTypes.func.isRequired,
  data: PropTypes.object
};
