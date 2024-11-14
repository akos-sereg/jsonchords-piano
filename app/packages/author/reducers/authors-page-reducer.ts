import { Author } from '../model/author';

import {
  FETCH_AUTHORS,
  FETCH_AUTHORS_SUCCESS,
  FETCH_AUTHORS_ERROR,
  DELETE_AUTHOR_SUCCESS
} from '../actions/authors-actions';
import initialState from '../../../utils/state/initialState';
import { Action } from '../../../model/Action';

function authorsReducer(state = initialState, action: Action) {
  switch (action.type) {
    case FETCH_AUTHORS:
      return {
        ...state,
        loading: true,
        error: false,
        userData: {
          authors: []
        }
      };

    case FETCH_AUTHORS_SUCCESS:
      return {
        ...state,
        loading: false,
        error: false,
        userData: {
          authors: action.payload.authors
        }
      };

    case FETCH_AUTHORS_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
        userData: {
          authors: Array<Author>()
        }
      };

    case DELETE_AUTHOR_SUCCESS:
      return {
        ...state,
        loading: false
      };

    default:
      return state;
  }
}

export default authorsReducer;
