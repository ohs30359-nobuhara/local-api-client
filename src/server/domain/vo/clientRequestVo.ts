/**
 * ClientRequestVo
 * @class
 * @classdesc クライアント側のリクエストを抽象化したオブジェクト
 */
export class ClientRequestVo<T = any> {
  public readonly headers?: any;
  public readonly queryParams: T;
  public readonly body: T;
  public readonly resourcesParams: any;
  public readonly requestPath: string;

  /**
   * @constructor
   * @param {any} queryParams　?xxx=xxx
   * @param {any} headers ヘッダ
   * @param {any} body Body
   * @param {any} resourcesParams sample/:xxx(REST時のみ)
   * @param {string} requestPath client側がアクセスした際のパス
   */
  private constructor(
    queryParams: any,
    headers: any,
    body: any,
    resourcesParams: any,
    requestPath: string
  ) {
    this.queryParams = queryParams;
    this.headers = headers;
    this.body = body;
    this.resourcesParams = resourcesParams;
    this.requestPath = requestPath;
  }

  /**
   * Fastifyからリクエストを生成
   * @param {any} req Fastify#request
   * @return {ClientRequestVo}
   */
  public static createFromFastify(req: any): ClientRequestVo {
    return new ClientRequestVo(
      req.query,
      req.headers,
      req.body,
      req.params,
      (req.raw.url || "").split("?")[0]
    );
  }
}
