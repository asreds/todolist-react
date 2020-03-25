import { ENTITY_KEY } from '../../common/app-const';
import { ADD_LIST, UPDATE_LIST, DELETE_LIST } from '../actions/todo';

const counter = (state = {}, action) => {
  switch (action.entity) {
    case ENTITY_KEY.TODO:
      return Object.assign({}, action);
    case ADD_LIST:
      if (state.data) {
        let data = action.data;
        data.id = state.data.length + 1;
        state.data = state.data.concat(data);
      }
      return Object.assign({}, state);
    case UPDATE_LIST:
      if (state.data) {
        let data = action.data;
        state.data.map(val => {
          if (parseInt(val.id) === parseInt(data.id)) {
            val.status = data.status;
            val.title = data.title;
            val.description = data.description;
          }
        });
      }
      return Object.assign({}, state);
    case DELETE_LIST:
      if (state.data) {
        let data = action.data;
        state.data.map((val, idx) => {
          if (parseInt(val.id) === parseInt(data.id)) {
            state['data'].splice(idx, 1);
          }
        });
      }
      return Object.assign({}, state);
    default: {
      return state;
    }
  }
};

export default counter;
