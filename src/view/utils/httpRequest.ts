/**
 * HttpRequest
 * @class
 */
class HttpRequest {
  /**
   * get
   * @param request
   */
  public async get<T=any>(request: HttpRequest): Promise<HttpResponse> {
    try {
      const response: Response = await fetch(request.url, {
        method: 'GET',
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
