export class Router {
 public readonly mapper: Map<string, {callback: Function, action: 'get'| 'post' | 'put' | 'delete'}>;

  /**
   * @constructor
   */
  constructor() {
    this.mapper = new Map();
  }

  public get(path: string, callback: Function): void {
    this.mapper.set(path, {callback, action: 'get'})
  }

  public post(path: string, callback: Function): void {
    this.mapper.set(path, {callback, action: 'post'})
  }

  public put(path: string, callback: Function): void {
    this.mapper.set(path, {callback, action: 'put'})
  }

  public delete(path: string, callback: Function): void {
    this.mapper.set(path, {callback, action: 'delete'})
  }
}