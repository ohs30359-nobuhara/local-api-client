import {ProjectSchema} from "@server/infra/sqlite/schema/projectSchema";
import {ClientRequestVo} from "@server/domain/vo/clientRequestVo";
import {ClientResponseVo} from "@server/domain/vo/clientResponseVo";

/**
 * ProjectService
 * @class
 */
class ProjectService {
  public async index(_: ClientRequestVo): Promise<ClientResponseVo> {
    const projects: ProjectSchema[] = await ProjectSchema.index();
    return ClientResponseVo.createSuccessful(projects);
  }

  public async create(request: ClientRequestVo<{name: string}>): Promise<ClientResponseVo> {
    const project: ProjectSchema = new ProjectSchema();
    project.name = request.queryParams.name;

    try {
      const result: boolean = await project.create();
      return ClientResponseVo.createSuccessful(result);
    } catch (e) {
      return ClientResponseVo.createError(`create fail ${e}`, {}, 400);
    }
  }

  public async update(request: ClientRequestVo<{id: number, name: string}>): Promise<ClientResponseVo> {
    const project: ProjectSchema | null = await ProjectSchema.findById(request.queryParams.id);

    if (project == null) {
      return ClientResponseVo.createError('target not found', {}, 400);
    }

    project.name = request.queryParams.name;

    try {
      const result: boolean = await project.update();
      return ClientResponseVo.createSuccessful(result);
    } catch (e) {
      return ClientResponseVo.createError('update fail', {}, 500);
    }
  }

  public async delete(request: ClientRequestVo<{id: number, name: string}>): Promise<ClientResponseVo> {
    const project: ProjectSchema | null = await ProjectSchema.findById(request.queryParams.id);

    if (project == null) {
      return ClientResponseVo.createError('target not found', {}, 400);
    }

    try {
      const result: boolean = await project.destroy();
      return ClientResponseVo.createSuccessful(result);
    } catch (e) {
      return ClientResponseVo.createError('update fail', {}, 500);
    }
  }
}

export const projectService: ProjectService = new ProjectService();