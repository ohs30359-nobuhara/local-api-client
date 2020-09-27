import {Router} from "@server/routing/router"
import {projectService} from "@server/service/projectService";

export const projectRouter: Router = new Router();
projectRouter.get('/', projectService.index)
projectRouter.post('/create', projectService.create);
projectRouter.put('/update', projectService.update);
projectRouter.delete('/delete', projectService.delete);
