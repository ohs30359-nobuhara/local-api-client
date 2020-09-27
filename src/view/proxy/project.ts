import {HttpResponse, proxy} from "../utils/proxy";
import {Project} from "@interface/project";

class ProjectProxy {
  private url: string = 'http://localhost:3000/resources/project';

  public async findIndex(): Promise<Project[]> {
    const response: HttpResponse = await proxy({url: this.url, method: 'GET'})

    if (response.status !== 200) {
      return []
    }

    return response.data
  }

  public async create(project : Project): Promise<boolean> {
    const response: HttpResponse = await proxy({
      url: `${this.url}/create`, method: 'POST', params: {name: project.name}
    })
    return response.status === 200
  }

  public async update(project: Project): Promise<boolean> {
    const response: HttpResponse = await proxy({
      url: `${this.url}/update`, method: 'PUT', params: project
    })
    return response.status === 200
  }

  public async destroy(project: Project): Promise<boolean> {
    const response: HttpResponse = await proxy({
      url: `${this.url}/delete`, method: 'DELETE', params: project
    })
    return response.status === 200
  }
}

export const projectProxy: ProjectProxy = new ProjectProxy();