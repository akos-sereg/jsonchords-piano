export const FETCH_AUTHORS = 'boilerplate/Author/FETCH_AUTHORS';
export const FETCH_AUTHORS_SUCCESS = 'boilerplate/Author/FETCH_AUTHORS_SUCCESS';
export const FETCH_AUTHORS_ERROR = 'boilerplate/Author/FETCH_AUTHORS_ERROR';

export const DELETE_AUTHOR = 'boilerplate/Author/DELETE_AUTHOR';
export const DELETE_AUTHOR_SUCCESS = 'boilerplate/Author/DELETE_AUTHOR_SUCCESS';

import { Author } from '../model/author';

export function fetchAuthors() {
  return {
    type: FETCH_AUTHORS
  };
}

export function authorsFetched(authors: Author[]) {
  return {
    type: FETCH_AUTHORS_SUCCESS,
    payload: {
      authors
    }
  };
}

export function fetchAuthorsError(error: any) {
  return {
    type: FETCH_AUTHORS_ERROR,
    payload: {
      error
    }
  };
}

export function deleteAuthor(authorId: string) {
  return {
    type: DELETE_AUTHOR,
    payload: {
      authorId
    }
  };
}

export function deleteAuthorSuccess(authorId: string) {
  return {
    type: DELETE_AUTHOR_SUCCESS,
    payload: {
      authorId
    }
  };
}
