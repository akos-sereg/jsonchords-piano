/**
 * App-internal hash links are extracted here. The existence of this service guarantees that we have no
 * hard-coded links within the app, aside of this class.
 *
 * In case we want to modify routes (links), we would only need to touch this file and the <Route /> codes,
 * instead of searching in files for "/#/" patterns.
 */
class HashLinkService {
  getAuthorsLink = () => {
    return '/#/authors';
  };

  getAddAuthorLink = () => {
    return '/#/author';
  };

  getAuthorLink = (authorId: string) => {
    return `/#/author/${authorId}`;
  };

  getAboutLink = () => {
    return '/#/about';
  };
}

export default new HashLinkService();
