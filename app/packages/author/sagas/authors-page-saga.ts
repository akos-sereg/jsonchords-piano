import { all, call, put, takeLatest } from 'redux-saga/effects';
import {
  fetchAuthors,
  authorsFetched,
  fetchAuthorsError,
  deleteAuthorSuccess
} from '../actions/authors-actions';
import { FETCH_AUTHORS, DELETE_AUTHOR } from '../actions/authors-actions';
import { Author } from '../model/author';
import ServiceProvider from '../../../services/ServiceProvider';

export function* getAuthors() {
  try {
    const authors: Author[] = yield call(ServiceProvider.getAuthorApi().getAllAuthors);
    yield put(authorsFetched(authors));
  } catch (err) {
    yield put(fetchAuthorsError(err));
  }
}

export function* deleteAuthor(action: any) {
  yield call(ServiceProvider.getAuthorApi().deleteAuthor, action.payload.authorId);
  yield put(deleteAuthorSuccess(action.payload.authorId));
  yield put(fetchAuthors());
}

export default function* rootSaga() {
  yield all([takeLatest(FETCH_AUTHORS, getAuthors), takeLatest(DELETE_AUTHOR, deleteAuthor)]);
}
