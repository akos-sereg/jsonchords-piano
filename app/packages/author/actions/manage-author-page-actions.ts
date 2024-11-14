export const UPDATE_AUTHOR = 'boilerplate/ManageAuthor/UPDATE_AUTHOR';
export const UPDATE_AUTHOR_SUCCESS = 'boilerplate/ManageAuthor/UPDATE_AUTHOR_SUCCESS';
export const UPDATE_AUTHOR_ERROR = 'boilerplate/ManageAuthor/UPDATE_AUTHOR_ERROR';

export const CREATE_AUTHOR_SUCCESS = 'boilerplate/ManageAuthor/CREATE_AUTHOR_SUCCESS';
export const FETCH_AUTHOR = 'boilerplate/ManageAuthor/FETCH_AUTHOR';
export const FETCH_AUTHOR_SUCCESS = 'boilerplate/ManageAuthor/FETCH_AUTHOR_SUCCESS';

import { Author } from '../model/author';

export function saveOrUpdateAuthor(author: Author) {
  return {
    type: UPDATE_AUTHOR,
    payload: {
      author
    }
  };
}

export function updateAuthorSuccess(author: Author) {
  return {
    type: UPDATE_AUTHOR_SUCCESS,
    payload: {
      author
    }
  };
}

export function updateAuthorError(author: Author, error: any) {
  return {
    type: UPDATE_AUTHOR_ERROR,
    payload: {
      author,
      error
    }
  };
}

export function createAuthorSuccess(author: Author) {
  return {
    type: CREATE_AUTHOR_SUCCESS,
    payload: {
      author
    }
  };
}

export function fetchAuthorById(authorId: string) {
  return {
    type: FETCH_AUTHOR,
    payload: {
      authorId
    }
  };
}

export function fetchAuthorSuccess(author: Author) {
  return {
    type: FETCH_AUTHOR_SUCCESS,
    payload: {
      author
    }
  };
}
