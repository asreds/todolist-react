import React, { Component } from 'react';
import { sortAsc, sortDesc } from '../../modules/sort';
import PropTypes from 'prop-types';
import Add from './add';

export default class List extends Component {
  edit (data) {
    window.showModalContent(props => <Add {...props} data={data} dispatch={this.props.dispatch}/>);
  }
  generateList () {
    let _this = this;
    const data = this.props.type === 1 ? sortDesc(this.props.data) : sortAsc(this.props.data);
    return data.map((val, idx) => {
      if (val.status === this.props.type) {
        return <li key={idx} onClick={() => _this.edit(val)}>
          <div className="title">{val.title}</div>
          <div className="desc">{val.description}</div>
          <div className="date">{val.createdAt}</div>
        </li>;
      }
    });
  }
  render () {
    return <ul className="list-todo">{this.generateList()}</ul>;
  }
}

List.propTypes = {
  data: PropTypes.array.isRequired,
  type: PropTypes.number.isRequired,
  dispatch: PropTypes.func.isRequired
};
