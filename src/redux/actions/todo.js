import { ENTITY_KEY } from '../../common/app-const';
import { loadEntity } from 'redux-entity';
import { request } from '../../services/domain/callapi';

export const ADD_LIST = 'ADD_LIST';
export const UPDATE_LIST = 'UPDATE_LIST';
export const DELETE_LIST = 'DELETE_LIST';

/**
 * API call
 * @returns {Function}  thunk
 */
export function fetchData () {
  return loadEntity(
    ENTITY_KEY.TODO,
    request('get', ' https://virtserver.swaggerhub.com/hanabyan/todo/1.0.0/to-do-list')
  );
}

/**
 *  add list
 * @returns array
 */

export function addList (params) {
  return {
    type: ADD_LIST,
    entity: ADD_LIST,
    data: params
  };
}

/**
 *  add list
 * @returns array
 */

export function updateList (params) {
  return {
    type: UPDATE_LIST,
    entity: UPDATE_LIST,
    data: params
  };
}

/**
 *  add list
 * @returns array
 */

export function deleteList (params) {
  return {
    type: DELETE_LIST,
    entity: DELETE_LIST,
    data: params
  };
}
