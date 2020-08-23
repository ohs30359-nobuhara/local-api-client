import fastify from 'fastify'
import { Server, IncomingMessage, ServerResponse } from 'http'
import {projectRepository} from "./infra/repository/projectRepository";
import {ClientResponseVo} from "./domain/vo/clientResponseVo";
import {stabService} from "./service/stabService";
import {ClientRequestVo} from "./domain/vo/clientRequestVo";

export class Application {
  private readonly server: fastify.FastifyInstance<Server, IncomingMessage, ServerResponse>;

  /**
   * @constructor
   */
  public constructor() {
    this.server = fastify({});
  }

  public run(): void {
    this.server.get('/', async (req, res) => {
      res.send(await projectRepository.index());
    });

    this.server.get('/stab/:project//*', async (req, res) => {
      const responseVo: ClientResponseVo = await stabService.exec(ClientRequestVo.createFromFastify(req));
      res.status(responseVo.status).send(responseVo.response);
    });

    this.server.listen(3000, '0.0.0.0', () => {
      console.log('server running listen 0.0.0.0:3000');
    });
  }
}