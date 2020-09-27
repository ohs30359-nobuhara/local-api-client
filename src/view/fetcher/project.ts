import {HttpResponse, proxy} from "../utils/proxy";

class ProjectFetcher {
  private url: string = 'http://localhost:3000/resources/project';

  public async findIndex(): Promise<any[]> {
    const response: HttpResponse = await proxy({url: this.url, method: 'GET'})

    if (response.status !== 200) {
      return []
    }

    return response.data
  }
}

export const projectFetcher: ProjectFetcher = new ProjectFetcher();