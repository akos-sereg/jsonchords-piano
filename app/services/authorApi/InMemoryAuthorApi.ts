import * as _ from 'lodash';
import { Author } from '../../packages/author/model/author';
import { sleep, clone } from '../Utils';
import { AuthorApi } from './AuthorApi';
import ConfigService from '../ConfigService';

/**
 * This AuthorApi solution keeps data in-memory, which means that you get a fresh state after refreshing
 * your browser tab.
 */
export default class InMemoryAuthorApi implements AuthorApi {
  authors: Author[];

  constructor() {
    console.log('Using InMemoryAuthorApi');
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
  }

  public getAllAuthors = async () => {
    await sleep(ConfigService.mockedLatencyMs);
    return clone(this.authors);
  };

  public getAuthorById = async (id: string) => {
    const author = _.find(this.authors, { id });
    await sleep(ConfigService.mockedLatencyMs);
    return author ? clone(author) : null;
  };

  public saveAuthor = async (author: Author) => {
    if (author.id) {
      const existingAuthorIndex = _.indexOf(this.authors, _.find(this.authors, { id: author.id }));
      this.authors.splice(existingAuthorIndex, 1, author);
    } else {
      author.id = InMemoryAuthorApi.generateId(author);
      this.authors.push(author);
    }

    await sleep(ConfigService.mockedLatencyMs);
    return clone(author);
  };

  public deleteAuthor = async (id: string) => {
    await sleep(ConfigService.mockedLatencyMs);
    _.remove(this.authors, { id });
  };

  static generateId(author: Author) {
    return `${author.firstName.toLowerCase()}-${author.lastName.toLowerCase()}`;
  }
}
