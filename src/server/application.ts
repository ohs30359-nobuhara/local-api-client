import fastify from 'fastify'
import { Server, IncomingMessage, ServerResponse } from 'http'
import {ClientResponseVo} from "./domain/vo/clientResponseVo";
import {ClientRequestVo} from "./domain/vo/clientRequestVo";
import {Router} from "./routing/router";

export class Application {
  private readonly server: fastify.FastifyInstance<Server, IncomingMessage, ServerResponse>;
  /**
   * @constructor
   */
  public constructor() {
    this.server = fastify({});
  }

  /**
   * プラグインの指定
   * @param prefix
   * @param router
   */
  public use(prefix: string, router: Router) {
    router.mapper.forEach((val, key) => {
      console.log(key, val);
      this.server[val.action](`${prefix}${key}`, async (req, res) => {
        const responseVo: ClientResponseVo = await val.callback(ClientRequestVo.createFromFastify(req));

        res.status(responseVo.status).send(responseVo.response);
      });
    })
  }

  public run(): void {
    this.server.get('/', async (req, res) => {
      res.status(200).send();
    });

    this.server.listen(3000, '0.0.0.0', () => {
      console.log('server running listen 0.0.0.0:3000');
    });
  }
}

