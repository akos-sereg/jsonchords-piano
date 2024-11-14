import * as React from 'react';
import { Link } from 'react-router-dom';
import * as toastr from 'toastr';
import 'toastr/build/toastr.min.css';
import { Author } from '../model/author';

type Props = {
  authors: Author[];
  onDeleteAuthor: Function;
};

export const AuthorList = (props: Props) => {
  const { authors, onDeleteAuthor } = props;

  const deleteAuthor = (event: any, id: string) => {
    onDeleteAuthor(event, id);
    toastr.success('Author Deleted.');
  };

  const createAuthorRow = (author: Author) => (
    <tr key={author.id}>
      <td>
        <a
          data-automation-id={'author-list-item-delete-button'}
          href="#"
          onClick={(e) => deleteAuthor(e, author.id)}
        >
          Delete
        </a>
      </td>
      <td>
        <Link data-automation-id={'author-list-item-id'} to={`/author/${author.id}`}>
          {author.id}
        </Link>
      </td>
      <td data-automation-id={'author-list-item'}>
        {author.firstName} {author.lastName}
      </td>
    </tr>
  );

  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th>&nbsp;</th>
            <th>ID</th>
            <th>Name</th>
          </tr>
        </thead>
        <tbody>{authors.map(createAuthorRow, this)}</tbody>
      </table>
    </div>
  );
};
