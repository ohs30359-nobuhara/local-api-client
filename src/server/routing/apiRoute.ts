import {apiService} from "@server/service/apiService";
import {Router} from "@server/routing/router";

export const apiRouter: Router = new Router();
apiRouter.get('/getProjectApi', apiService.findByProject)
apiRouter.post('/create', apiService.create);
apiRouter.put('/update', apiService.update);
apiRouter.delete('/delete', apiService.delete);
