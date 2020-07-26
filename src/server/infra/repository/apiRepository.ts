import {Api} from "../sqlite/schema/api";

/**
 * ApiRepository
 * @class
 */
class ApiRepository {
  /**
   * 全件削除
   */
  public async index(): Promise<Array<Api>> {
    return Api.index();
  }

  /**
   * id検索
   * @param id
   */
  public async findById(id: number): Promise<Api | null> {
    return await Api.findById(id);
  }

  /**
   * 
   * @param name
   * @param method
   * @param path
   * @param projectId
   */
  public async create(name: string, method: string, path: string, projectId: number): Promise<boolean> {
    const a: Api = new Api()
    a.name = name;
    a.method = method;
    a.path = path;
    a.project_id = projectId;
    return await a.create();
  }

  /**
   * 削除
   * @param id
   */
  public async destroy(id: number): Promise<boolean> {
    const a: Api | null = await Api.findById(id);

    if (a == null) {
      return false;
    }

    return await a.destroy();
  }

  /**
   *
   * @param id
   * @param name
   * @param method
   * @param path
   */
  public async update(id: number, name: string, method: string, path: string): Promise<boolean> {
    const a: Api | null = await Api.findById(id);

    if (a == null) {
      return false;
    }

    a.name = name;
    a.method = method;
    a.path = path;

    return await a.update()
  }
}

export const apiRepository: ApiRepository = new ApiRepository();