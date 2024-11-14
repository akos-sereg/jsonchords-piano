import authorsPageReducer from '../../packages/author/reducers/authors-page-reducer';
import manageAuthorPageReducer from '../../packages/author/reducers/manage-author-page-reducer';

const reducers = {
  authors: authorsPageReducer,
  manageAuthor: manageAuthorPageReducer
};

export default reducers;
