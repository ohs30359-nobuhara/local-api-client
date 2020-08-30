import {ClientResponseVo} from "../domain/vo/clientResponseVo";
import {ClientRequestVo} from "../domain/vo/clientRequestVo";
import {Response} from "../infra/sqlite/schema/response";

/**
 * StabService
 * @class
 */
export class StabService {
  public async exec(request: ClientRequestVo): Promise<ClientResponseVo> {
    const resources: {project: string} = request.resourcesParams;
    const path: string = request.requestPath.replace(`/stab/${resources.project}`, "");

    const response: Response | null = await Response.findByRequestPath(resources.project, path);

    if (response == null) {
      return ClientResponseVo.createError('not found', {}, 400);
    }

    return ClientResponseVo.createSuccessful(response.response, response.status);
  }
}


export const stabService: StabService = new StabService();