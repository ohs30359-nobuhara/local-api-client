import {Project} from "../sqlite/schema/project";

/**
 * ProjectRepository
 * @class
 */
class ProjectRepository {
  /**
   * 全件削除
   */
  public async index(): Promise<Array<Project>> {
    return Project.index();
  }

  /**
   * id検索
   * @param id
   */
  public async findById(id: number): Promise<Project | null> {
    return await Project.findById(id);
  }

  /**
   * 新規作成
   * @param name
   */
  public async create(name: string): Promise<boolean> {
    const p: Project = new Project()
    p.name = name;
    return await p.create();
  }

  /**
   * 削除
   * @param id
   */
  public async destroy(id: number): Promise<boolean> {
    const p: Project | null = await Project.findById(id);

    if (p == null) {
      return false;
    }

    return await p.destroy();
  }

  /**
   * 更新
   * @param id
   * @param name
   */
  public async update(id: number, name: string): Promise<boolean> {
    const p: Project | null = await Project.findById(id);

    if (p == null) {
      return false;
    }

    p.name = name;
    return await p.update()
  }
}

export const projectRepository: ProjectRepository = new ProjectRepository();