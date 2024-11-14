import { all, fork } from 'redux-saga/effects';
import authorsPageSaga from '../../packages/author/sagas/authors-page-saga';
import manageAuthorPageSaga from '../../packages/author/sagas/manage-author-page-saga';

export default function* rootSaga() {
  yield all([fork(authorsPageSaga), fork(manageAuthorPageSaga)]);
}
