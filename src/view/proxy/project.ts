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
}

export const projectProxy: ProjectProxy = new ProjectProxy();