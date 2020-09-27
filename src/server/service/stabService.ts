import {ResponseSchema} from "@server/infra/sqlite/schema/responseSchema";
import {ClientRequestVo} from "@server/domain/vo/clientRequestVo";
import {ClientResponseVo} from "@server/domain/vo/clientResponseVo";

/**
 * StabService
 * @class
 */
export class StabService {
  public async exec(request: ClientRequestVo): Promise<ClientResponseVo> {
    const resources: {project: string} = request.resourcesParams;
    const path: string = request.requestPath.replace(`/stab/${resources.project}`, "");

    const response: ResponseSchema | null = await ResponseSchema.findByRequestPath(resources.project, path);

    if (response == null) {
      return ClientResponseVo.createError('not found', {}, 400);
    }

    return ClientResponseVo.createSuccessful(response.response, response.status);
  }
}


export const stabService: StabService = new StabService();