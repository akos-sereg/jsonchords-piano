import InMemoryAuthorApi from '../InMemoryAuthorApi';

describe('InMemoryAuthorApi', () => {
  let authorApi;

  beforeEach(() => {
    authorApi = new InMemoryAuthorApi();
  });

  it('should return authors', async () => {
    const authors = await authorApi.getAllAuthors();
    expect(authors).not.toBeNull();
    expect(authors.length).toBeGreaterThan(0);
  });

  it('should return known author', async () => {
    const author = await authorApi.getAuthorById('cory-house');
    expect(author).not.toBeNull();
  });

  it('should return null on unknown author', async () => {
    const author = await authorApi.getAuthorById('asdf');
    expect(author).toBeNull();
  });

  it('should delete known author', async () => {
    await authorApi.deleteAuthor('cory-house');
    const author = await authorApi.getAuthorById('cory-house');
    expect(author).toBeNull();
  });

  it('should save new author', async () => {
    await authorApi.saveAuthor({ id: null, firstName: 'Paul', lastName: 'MaudDib' });
    const author = await authorApi.getAuthorById('paul-mauddib');
    expect(author).not.toBeNull();
  });

  it('should save existing author', async () => {
    await authorApi.saveAuthor({ id: 'cory-house', firstName: 'Paul', lastName: 'MaudDib' });
    const author = await authorApi.getAuthorById('cory-house');
    expect(author).not.toBeNull();
    expect(author.firstName).toBe('Paul');
    expect(author.lastName).toBe('MaudDib');
  });
});
