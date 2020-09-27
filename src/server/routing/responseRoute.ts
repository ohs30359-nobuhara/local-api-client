import {Router} from "@server/routing/router"
import {responseService} from "@server/service/responseService";

export const responseRouter: Router = new Router();
responseRouter.get('/getApiResponse', responseService.findByApi)
responseRouter.post('/create', responseService.create);
responseRouter.put('/update', responseService.update);
responseRouter.delete('/delete', responseService.delete);
