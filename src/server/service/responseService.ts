import {ResponseSchema} from "@server/infra/sqlite/schema/responseSchema";
import {ClientRequestVo} from "@server/domain/vo/clientRequestVo";
import {ClientResponseVo} from "@server/domain/vo/clientResponseVo";

/**
 * ResponseService
 * @class
 */
class ResponseService{
  public async findByApi(request: ClientRequestVo<{apiId: number}>): Promise<ClientResponseVo> {
    const responses: ResponseSchema[] = await ResponseSchema.findByApi(request.body.apiId);
    return ClientResponseVo.createSuccessful(responses);
  }

  public async create(request: ClientRequestVo<{label: string, status: number, contentType: string, apiId: number, response: string}>): Promise<ClientResponseVo> {
    const response: ResponseSchema = new ResponseSchema();

    response.response = request.body.response;
    response.label = request.body.label;
    response.status = request.body.status;
    response.contentType = request.body.contentType;
    response.api_id = request.body.apiId;

    try {
      const result: boolean = await response.create();
      return ClientResponseVo.createSuccessful(result);
    } catch (e) {
      return ClientResponseVo.createError('create fail', {}, 400);
    }
  }

  public async update(request: ClientRequestVo<{id: number, label: string, status: number, contentType: string, response: string}>): Promise<ClientResponseVo> {
    const response: ResponseSchema | null = await ResponseSchema.findById(request.body.id);

    if (response == null) {
      return ClientResponseVo.createError('target not found', {}, 400);
    }

    response.response = request.body.response;
    response.label = request.body.label;
    response.status = request.body.status;
    response.contentType = request.body.contentType;

    try {
      const result: boolean = await response.update();
      return ClientResponseVo.createSuccessful(result);
    } catch (e) {
      return ClientResponseVo.createError('update fail', {}, 500);
    }
  }

  public async delete(request: ClientRequestVo<{id: number}>): Promise<ClientResponseVo> {
    const response: ResponseSchema | null = await ResponseSchema.findById(request.body.id);

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