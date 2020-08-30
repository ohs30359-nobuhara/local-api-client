import {Router} from "./router";
import {responseService} from "../service/responseService";

export const responseRouter: Router = new Router();
responseRouter.get('/getApiResponse', responseService.findByApi)
responseRouter.post('/create', responseService.create);
responseRouter.put('/update', responseService.update);
responseRouter.delete('/delete', responseService.delete);
