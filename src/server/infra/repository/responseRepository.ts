import {Response} from "../sqlite/schema/response";

/**
 * ResponseRepository
 * @class
 */
class ResponseRepository {
  /**
   * 全件削除
   */
  public async index(): Promise<Array<Response>> {
    return Response.index();
  }

  /**
   * id検索
   * @param id
   */
  public async findById(id: number): Promise<Response | null> {
    return await Response.findById(id);
  }

  /**
   *
   * @param label
   * @param status
   * @param contentType
   */
  public async create(label: string, status: number, contentType: string): Promise<boolean> {
    const r: Response = new Response()
    r.label = label;
    r.status = status;
    r.contentType = contentType;
    return await r.create();
  }

  /**
   * 削除
   * @param id
   */
  public async destroy(id: number): Promise<boolean> {
    const r: Response | null = await Response.findById(id);

    if (r == null) {
      return false;
    }

    return await r.destroy();
  }

  /**
   *
   * @param id
   * @param label
   * @param status
   * @param contentType
   */
  public async update(id: number, label: string, status: number, contentType: string): Promise<boolean> {
    const r: Response | null = await Response.findById(id);

    if (r == null) {
      return false;
    }

    r.label = label;
    r.status = status;
    r.contentType = contentType;
    return await r.update()
  }
}

export const responseRepository: ResponseRepository = new ResponseRepository();