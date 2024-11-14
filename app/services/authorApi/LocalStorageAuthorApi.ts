import { AuthorApi } from './AuthorApi';
import { clone, sleep } from '../Utils';
import * as _ from 'lodash';
import { Author } from '../../packages/author/model/author';
import ConfigService from '../ConfigService';

export default class LocalStorageAuthorApi implements AuthorApi {
  localStorageKeyAuthors = 'authors';
  authors: Author[];

  constructor() {
    console.log('Using LocalStorageAuthorApi');
    const persistedAuthors = localStorage.getItem(this.localStorageKeyAuthors);
    if (persistedAuthors) {
      this.authors = JSON.parse(persistedAuthors);
    } else {
      this.authors = [
        {
          id: 'cory-house',
          firstName: 'Cory',
          lastName: 'House'
        },
        {
          id: 'scott-allen',
          firstName: 'Scott',
          lastName: 'Allen'
        },
        {
          id: 'dan-wahlin',
          firstName: 'Dan',
          lastName: 'Wahlin'
        }
      ];

      this.persist();
    }
  }

  getAllAuthors = async () => {
    await sleep(ConfigService.mockedLatencyMs);
    return clone(this.authors);
  };

  getAuthorById = async (id: string) => {
    const author = _.find(this.authors, { id });
    await sleep(ConfigService.mockedLatencyMs);
    return clone(author);
  };

  saveAuthor = async (author: Author) => {
    if (author.id) {
      const existingAuthorIndex = _.indexOf(this.authors, _.find(this.authors, { id: author.id }));
      this.authors.splice(existingAuthorIndex, 1, author);
    } else {
      author.id = LocalStorageAuthorApi.generateId(author);
      this.authors.push(author);
    }

    this.persist();

    await sleep(ConfigService.mockedLatencyMs);
    return clone(author);
  };

  deleteAuthor = async (id: string) => {
    _.remove(this.authors, { id });
    this.persist();
    await sleep(ConfigService.mockedLatencyMs);
  };

  persist = () => {
    localStorage.setItem(this.localStorageKeyAuthors, JSON.stringify(this.authors));
  };

  static generateId(author: Author) {
    return `${author.firstName.toLowerCase()}-${author.lastName.toLowerCase()}`;
  }
}
