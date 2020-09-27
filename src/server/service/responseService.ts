import {ResponseSchema} from "@server/infra/sqlite/schema/responseSchema";
import {ClientRequestVo} from "@server/domain/vo/clientRequestVo";
import {ClientResponseVo} from "@server/domain/vo/clientResponseVo";

/**
 * ResponseService
 * @class
 */
class ResponseService{
  public async findByApi(request: ClientRequestVo<{apiId: number}>): Promise<ClientResponseVo> {
    const responses: ResponseSchema[] = await ResponseSchema.findByApi(request.queryParams.apiId);
    return ClientResponseVo.createSuccessful(responses);
  }

  public async create(request: ClientRequestVo<{label: string, status: number, contentType: string, apiId: number, response: string}>): Promise<ClientResponseVo> {
    const response: ResponseSchema = new ResponseSchema();

    response.response = request.queryParams.response;
    response.label = request.queryParams.label;
    response.status = request.queryParams.status;
    response.contentType = request.queryParams.contentType;
    response.api_id = request.queryParams.apiId;

    try {
      const result: boolean = await response.create();
      return ClientResponseVo.createSuccessful(result);
    } catch (e) {
      return ClientResponseVo.createError('create fail', {}, 400);
    }
  }

  public async update(request: ClientRequestVo<{id: number, label: string, status: number, contentType: string, response: string}>): Promise<ClientResponseVo> {
    const response: ResponseSchema | null = await ResponseSchema.findById(request.queryParams.id);

    if (response == null) {
      return ClientResponseVo.createError('target not found', {}, 400);
    }

    response.response = request.queryParams.response;
    response.label = request.queryParams.label;
    response.status = request.queryParams.status;
    response.contentType = request.queryParams.contentType;

    try {
      const result: boolean = await response.update();
      return ClientResponseVo.createSuccessful(result);
    } catch (e) {
      return ClientResponseVo.createError('update fail', {}, 500);
    }
  }

  public async delete(request: ClientRequestVo<{id: number}>): Promise<ClientResponseVo> {
    const response: ResponseSchema | null = await ResponseSchema.findById(request.queryParams.id);

    if (response == null) {
      return ClientResponseVo.createError('target not found', {}, 400);
    }

    try {
      const result: boolean = await response.destroy();
      return ClientResponseVo.createSuccessful(result);
    } catch (e) {
      return ClientResponseVo.createError('update fail', {}, 500);
    }
  }
}

export const responseService: ResponseService = new ResponseService();