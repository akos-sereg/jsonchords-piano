import * as React from 'react';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { AuthorList } from '../../packages/author/components/AuthorList';
import { AppState } from '../../model/AppState';
import { fetchAuthors, deleteAuthor } from '../../packages/author/actions/authors-actions';

const AuthorsPage = () => {
  const dispatch = useDispatch();
  const authors = useSelector((appState: AppState) =>
    appState.authors.userData ? appState.authors.userData.authors : []
  );

  useEffect(() => {
    dispatch(fetchAuthors());
  }, []);

  const onDeleteAuthor = (event: any, authorId: string) => {
    if (event !== undefined && event.preventDefault) {
      event.preventDefault();
    }
    dispatch(deleteAuthor(authorId));
  };

  return (
    <div>
      <h1>Authors</h1>
      <Link to="/author" className="btn btn-default" data-automation-id={'add-author-button'}>
        Add Author
      </Link>
      <AuthorList onDeleteAuthor={onDeleteAuthor} authors={authors} />
    </div>
  );
};

export default AuthorsPage;
