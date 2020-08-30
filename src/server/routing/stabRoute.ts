import {Router} from "./router";
import {stabService} from "../service/stabService";

export const stabRouter: Router = new Router();
stabRouter.get('/:project/*', stabService.exec)
