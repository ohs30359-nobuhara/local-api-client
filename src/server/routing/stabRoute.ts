import {Router} from "@server/routing/router"
import {stabService} from "@server/service/stabService";

export const stabRouter: Router = new Router();
stabRouter.get('/:project/*', stabService.exec)
