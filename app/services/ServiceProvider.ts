import { AuthorApi } from './authorApi/AuthorApi';
import LocalStorageAuthorApi from './authorApi/LocalStorageAuthorApi';
import ConfigService, { ServiceType } from './ConfigService';
import InMemoryAuthorApi from './authorApi/InMemoryAuthorApi';

/**
 * ServiceProvider instance exposes API clients - eg. clients accessing to endpoints.
 */
class ServiceProvider {
  authorApi: AuthorApi;

  constructor() {
    switch (ConfigService.serviceType) {
      case ServiceType.InMemory:
        this.authorApi = new InMemoryAuthorApi();
        break;

      case ServiceType.LocalStorage:
        this.authorApi = new LocalStorageAuthorApi();
        break;

      case ServiceType.RemoteEndpoint:
        // remote endpoint is not in scope of this project. you can have your own app's specific service,
        // but it is always good to retain InMemory and/or LocalStorage based services, so that you
        // can develop your frontend stuff even if service is down (pro: developer experience is better,
        // con: real endpoint and mocked one must be synchronized at all times)
        throw Error('Not Implemented Yet');
        break;
    }
  }

  getAuthorApi = () => {
    return this.authorApi;
  };
}

export default new ServiceProvider();
