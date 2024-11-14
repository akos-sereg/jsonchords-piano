export enum ServiceType {
  InMemory,
  LocalStorage,
  RemoteEndpoint
}

class ConfigService {
  /**
   * We can use local (mocked) service, or a real endpoint. Mocked service can be handy if you want to develop
   * quickly, or in case the real backend is unstable for whatever reason.
   */
  public serviceType: ServiceType;

  /**
   * When using mocked service (eg. in-memory or localStorage based), we can simulate a network latency.
   */
  public mockedLatencyMs: number;

  constructor() {
    this.serviceType = ServiceType.InMemory;
    this.mockedLatencyMs = 120;
  }
}

export default new ConfigService();
