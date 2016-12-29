export class BaseUrl {
  baseUrl: string;

  constructor() {
    if (!window.location.origin) {
      this.baseUrl = window.location.protocol + '//' + window.location.hostname + (window.location.port ? ':' + window.location.port : '');
    } else {
      this.baseUrl = window.location.origin;
    }
  }
  getBaseUrl(): string {
    return this.baseUrl;
  }
}
