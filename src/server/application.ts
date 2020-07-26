import fastify from 'fastify'
import { Server, IncomingMessage, ServerResponse } from 'http'
import {projectRepository} from "./infra/repository/projectRepository";

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

    this.server.get('/create', (req, res) => {
      projectRepository.create('sample');

      res.send('ok')
    });

    this.server.listen(3000, '0.0.0.0', () => {
      console.log('server running listen 0.0.0.0:3000');
    });
  }
}