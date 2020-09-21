import {stringify} from "query-string";

/**
 * HttpClient
 * @class
 */
class HttpClient {
  /**
   * get
   * @param request
   */
  public async get<T=any>(request: HttpRequest): Promise<HttpResponse> {
    try {
      // browser仕様で getは bodyを許可しない
      const queryString: string = stringify(request.body);

      const response: Response = await fetch(`${request.url}?${queryString}`, {
        method: 'GET',
        headers: request.headers
      })

      return {
        status: response.status,
        json: await response.json()
      }
    } catch (e) {
      return {
        status: 500,
        json: e.message
      }
    }
  }

  /**
   * post
   * @param request
   */
  public async post(request: HttpRequest): Promise<HttpResponse> {
    try {
      const response: Response = await fetch(request.url, {
        method: 'POST',
        body: request.body,
        headers: request.headers
      })

      return {
        status: response.status,
        json: response.json()
      }
    } catch (e) {
      return {
        status: 500,
        json: e.message
      }
    }
  }
}

/**
 * HttpRequest
 * @interface
 */
interface HttpRequest {
  url: string,
  body: any,
  headers: Headers
}

/**
 * HttpResponse
 * @interface
 */
interface HttpResponse {
  status: number
  json: any
}
export const httpClient: HttpClient = new HttpClient()