import axios, {AxiosRequestConfig, AxiosResponse} from 'axios';

/**
 * HttpRequest
 * @interface
 */
export interface HttpRequest<T=any> {
  method: 'GET' | 'POST' | 'PUT' | 'DELETE'
  params?: T
  url: string
}

/**
 * HttpResponse
 * @interface
 */
export interface HttpResponse<T=any> {
  status: number
  data: T
}

/**
 * proxy
 * @param request
 */
export async function proxy(request: HttpRequest): Promise<HttpResponse> {
  const config: AxiosRequestConfig = {};

  if (request.params != null) {
    config.data = request.params;
  }

  config.method = request.method;
  config.url = request.url;

  try {
    const response: AxiosResponse = await axios(config);

    return {
      status: response.status,
      data: response.data
    }
  } catch (e) {
    const response: AxiosResponse | undefined = e.response;
    console.error('curl err', e.message);

    return {
      data: e.message,
      status: response === undefined ? 500 : response.status
    }
  }
}