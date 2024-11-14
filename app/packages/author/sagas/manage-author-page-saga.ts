import { all, call, put, takeLatest } from 'redux-saga/effects';
import {
  updateAuthorError,
  updateAuthorSuccess,
  createAuthorSuccess,
  fetchAuthorSuccess,
  UPDATE_AUTHOR,
  FETCH_AUTHOR,
  UPDATE_AUTHOR_SUCCESS,
  CREATE_AUTHOR_SUCCESS
} from '../actions/manage-author-page-actions';
import { Author } from '../../author/model/author';
import ServiceProvider from '../../../services/ServiceProvider';
import { Action } from '../../../model/Action';
import * as toastr from 'toastr';
import HashLinkService from '../../../services/HashLinkService';

export function* updateAuthorInternal(action: Action) {
  try {
    const originalId = action.payload.author.id;

    yield call(ServiceProvider.getAuthorApi().saveAuthor, action.payload.author);
    if (originalId) {
      yield put(updateAuthorSuccess(action.payload.author));
    } else {
      yield put(createAuthorSuccess(action.payload.author));
    }
  } catch (err) {
    yield put(updateAuthorError(action.payload.author, err));
  }
}

export function* fetchAuthorInternal(action: Action) {
  try {
    const author: Author = yield call(
      ServiceProvider.getAuthorApi().getAuthorById,
      action.payload.authorId
    );
    if (author) {
      yield put(fetchAuthorSuccess(author));
    }
  } catch (err) {
    console.error(err);
  }
}

export function* updateSuccessInternal(action: Action): any {
  try {
    toastr.success('Author Updated.');
    window.location.href = HashLinkService.getAuthorsLink();
  } catch (err) {
    console.error(err);
  }

  yield null;
}

export function* createSuccessInternal(action: Action): any {
  try {
    toastr.success('Author Created.');
    window.location.href = HashLinkService.getAuthorsLink();
  } catch (err) {
    console.error(err);
  }

  yield null;
}

export default function* rootSaga() {
  yield all([
    takeLatest(UPDATE_AUTHOR, updateAuthorInternal),
    takeLatest(FETCH_AUTHOR, fetchAuthorInternal),
    takeLatest(UPDATE_AUTHOR_SUCCESS, updateSuccessInternal),
    takeLatest(CREATE_AUTHOR_SUCCESS, createSuccessInternal)
  ]);
}
