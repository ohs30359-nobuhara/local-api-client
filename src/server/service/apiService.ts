import {ApiSchema} from "@server/infra/sqlite/schema/apiSchema";
import {ClientRequestVo} from "@server/domain/vo/clientRequestVo";
import {ClientResponseVo} from "@server/domain/vo/clientResponseVo";

/**
 * ApiService
 * @class
 */
class ApiService{
  public async findByProject(request: ClientRequestVo<{projectId: number}>): Promise<ClientResponseVo> {
    const apis: ApiSchema[] = await ApiSchema.findByProject(request.queryParams.projectId);
    return ClientResponseVo.createSuccessful(apis);
  }

  public async create(request: ClientRequestVo<{name: string, path: string, method: string, projectId: number}>): Promise<ClientResponseVo> {
    const api: ApiSchema = new ApiSchema();

    api.path = request.queryParams.path;
    api.method = request.queryParams.method;
    api.name = request.queryParams.name;
    api.project_id = request.queryParams.projectId;

    try {
      const result: boolean = await api.create();
      return ClientResponseVo.createSuccessful(result);
    } catch (e) {
      return ClientResponseVo.createError('create fail', {}, 400);
    }
  }

  public async update(request: ClientRequestVo<{name: string, path: string, method: string, id: number}>): Promise<ClientResponseVo> {
    const api: ApiSchema | null = await ApiSchema.findById(request.queryParams.id);

    if (api == null) {
      return ClientResponseVo.createError('target not found', {}, 400);
    }

    api.name = request.queryParams.name;
    api.method = request.queryParams.method;
    api.path  = request.queryParams.path;

    try {
      const result: boolean = await api.update();
      return ClientResponseVo.createSuccessful(result);
    } catch (e) {
      return ClientResponseVo.createError('update fail', {}, 500);
    }
  }

  public async delete(request: ClientRequestVo<{id: number}>): Promise<ClientResponseVo> {
    const api: ApiSchema | null = await ApiSchema.findById(request.queryParams.id);

    if (api == null) {
      return ClientResponseVo.createError('target not found', {}, 400);
    }

    try {
      const result: boolean = await api.destroy();
      return ClientResponseVo.createSuccessful(result);
    } catch (e) {
      return ClientResponseVo.createError('update fail', {}, 500);
    }
  }
}

export const apiService: ApiService = new ApiService();