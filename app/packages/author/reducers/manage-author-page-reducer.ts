import 'toastr/build/toastr.min.css';

import { FETCH_AUTHOR_SUCCESS } from '../actions/manage-author-page-actions';
import initialState from '../../../utils/state/initialState';
import { Action } from '../../../model/Action';

function manageAuthorReducer(state = initialState, action: Action) {
  switch (action.type) {
    case FETCH_AUTHOR_SUCCESS:
      return {
        ...state,
        author: action.payload.author
      };

    default:
      return state;
  }
}

export default manageAuthorReducer;
