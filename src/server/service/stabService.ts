import {ClientResponseVo} from "../domain/vo/clientResponseVo";
import {ClientRequestVo} from "../domain/vo/clientRequestVo";
import {Project} from "../infra/sqlite/schema/project";

/**
 * TODO; Stab
 */
export class StabService {
  public async exec(request: ClientRequestVo): Promise<ClientResponseVo> {
    const resources: {project: string} = request.resourcesParams;
    const path: string = request.requestPath.replace(`/stab/${resources.project}`, "");

    const project: Project | null = await Project.findByName(resources.project);


    if (project == null) {
      return ClientResponseVo.createError({message: 'stab is not found'}, {}, 400);
    }

    return ClientResponseVo.createSuccessful({pro: resources.project, path: path}, 200);
  }
}


export const stabService: StabService = new StabService();