/**
 * ClientResponseVo
 * @class
 * @classdesc クライアント側へのレスポンスを抽象化したオブジェクト
 */
export class ClientResponseVo<T = any> {
  public readonly headers?: any;
  public readonly status: number;
  public readonly response: T;

  /**
   * @constructor
   * @param {number} status HttpStatusCode
   * @param {any} response レスポンス値
   * @param {any} headers ヘッダ
   */
  private constructor(
    status: number,
    response: any,
    headers: any
  ) {
    this.status = status;
    this.response = response;
    this.headers = headers;
  }

  /**
   * 正常レスポンスの生成
   * @param {any} response レスポンス値
   * @param {any} headers ヘッダ
   */
  public static createSuccessful(
    response: any,
    headers: any = {}
  ): ClientResponseVo {
    return new ClientResponseVo(200, response, headers);
  }

  public static createError(
    response: any,
    headers: any,
    status: number): ClientResponseVo {
    return new ClientResponseVo(status, response, headers);
  }
}
