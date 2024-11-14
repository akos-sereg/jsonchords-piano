import { AppState } from '../../model/AppState';

const initialState: AppState = {
  authors: {
    loading: false,
    error: false,
    userData: {
      authors: []
    }
  },
  manageAuthor: {
    author: null
  }
};

export default initialState;
