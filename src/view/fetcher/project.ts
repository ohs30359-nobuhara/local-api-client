import {httpClient} from "../utils/httpRequest";

class ProjectFetcher {
  public async findIndex(): Promise<any> {
    return await httpClient.get({url: 'http://localhost:3000/resources/project', headers: new Headers(), body: {}})
  }
}

export const projectFetcher: ProjectFetcher = new ProjectFetcher();