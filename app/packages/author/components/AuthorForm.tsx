import * as React from 'react';
import { useEffect, useState } from 'react';
import { Author, defaultAuthor } from '../model/author';
import styled from '@emotion/styled';
import TextInput from '../../../components/widgets/TextInput';

const Button = styled.input<{ primary: boolean }>`
  border: ${(props) => (props.primary ? 'solid 1px' : 'dotted 1px #1B8DC2')};
`;

type OnSaveFunction = (event: any, author: Author) => void;
export type AuthorModelError = {
  firstName: string | null;
  lastName: string | null;
};
type Props = {
  author: Author;
  onSave: OnSaveFunction;
  errors?: AuthorModelError;
};

export const AuthorForm = (props: Props) => {
  const [author, setAuthor] = useState(defaultAuthor);

  useEffect(() => {
    setAuthor(props.author);

    if (props.author.firstName === 'buggy-0123456789') {
      throw Error(
        'Throwing an error from useEffect intentionally, to check if ErrorBoundary works properly'
      );
    }
  }, [props.author]);

  return (
    <form>
      <h1>Manage Author</h1>

      <TextInput
        name="firstName"
        label="First Name"
        automationId={'first-name-textfield'}
        value={author.firstName}
        error={props.errors.firstName}
        onChange={(event) => setAuthor({ ...author, firstName: event.target.value })}
      />
      <br />

      <TextInput
        name="lastName"
        label="Last Name"
        automationId={'last-name-textfield'}
        value={author.lastName}
        error={props.errors.lastName}
        onChange={(event) => setAuthor({ ...author, lastName: event.target.value })}
      />
      <br />

      <Button
        primary={author.id ? true : false}
        data-automation-id={'save-author-button'}
        type="submit"
        value="Save"
        className="btn btn-default"
        onClick={(event) => props.onSave(event, author)}
      />
    </form>
  );
};
