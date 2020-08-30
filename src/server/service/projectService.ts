import {Project} from "../infra/sqlite/schema/project";
import {ClientRequestVo} from "../domain/vo/clientRequestVo";
import {ClientResponseVo} from "../domain/vo/clientResponseVo";

/**
 * ProjectService
 * @class
 */
class ProjectService {
  public async index(_: ClientRequestVo): Promise<ClientResponseVo> {
    const projects: Project[] = await Project.index();
    return ClientResponseVo.createSuccessful(projects);
  }

  public async create(name: string): Promise<ClientResponseVo> {
    const project: Project = new Project();
    project.name = name;

    try {
      const result: boolean = await project.create();
      return ClientResponseVo.createSuccessful(result);
    } catch (e) {
      return ClientResponseVo.createError('create fail', {}, 400);
    }
  }

  public async update(id: number, name: string): Promise<ClientResponseVo> {
    const project: Project | null = await Project.findById(id);

    if (project == null) {
      return ClientResponseVo.createError('target not found', {}, 400);
    }

    project.name = name;

    try {
      const result: boolean = await project.update();
      return ClientResponseVo.createSuccessful(result);
    } catch (e) {
      return ClientResponseVo.createError('update fail', {}, 500);
    }
  }

  public async delete(id: number): Promise<ClientResponseVo> {
    const project: Project | null = await Project.findById(id);

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